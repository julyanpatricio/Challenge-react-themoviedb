import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPageDetail, getMovieDetail } from "../actions";
import './Movie.css'
import gif from '../WMDx.gif'
import ImageDefaultMovie from '../ImageDefaultMovie.jpg'

const BASE_URL_IMAGES = 'https://image.tmdb.org/t/p/original'

function Movie() {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { id } = useParams();

  // cuando se monta la pagina hace el get
  useEffect(() => {
    dispatch(getMovieDetail(id));
    return () => dispatch(clearPageDetail()) //cuando se desmonta, limpia el componente
  }, [id, dispatch]);


  return (
    <React.Fragment>
      {movie ? (
        <div className='background-movie-detail' style={{
          backgroundImage: `url(${BASE_URL_IMAGES + (movie.backdrop_path || movie.poster_path)})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div className='movie-detail background-movie-detail' style={{
            background: 'linear-gradient(rgb(53 58 64) 0%, rgb(52 58 64 / 20%) 30%)'
          }}>

            <div className='description-container'>
              <h1 className='badge-title' >{movie.title}</h1>
              <div className='description-container-up'>

                <img className='img-detail' src={movie.poster_path?BASE_URL_IMAGES+movie.poster_path : ImageDefaultMovie} alt={movie.title} />
                <div className='movie-information'>
                  <div className='released items-movie-information'>
                    Title: {movie.title}
                  </div>

                  <div className='Rating items-movie-information'>
                    Rating:
                    <div className="stars-outer">
                      <div className="stars-inner" style={{
                        width: `${movie.vote_average * 10}%`,
                        overflow: 'hidden'
                      }}></div>
                    </div>
                  </div>

                  <div className='container-genres items-movie-information'>
                    Genres:
                    {movie.genres.map((genre, i) => (
                      <span className='badge-pill badge-dark-light' key={genre.id}>{genre.name}</span>
                    ))}
                  </div>

                  <div className='items-movie-information'>
                    Release date: {movie.release_date}
                  </div>
                  
                  <div className='overview items-movie-information'>
                    Overview: {movie.overview}
                  </div>

                  <div className='overview items-movie-information'>
                    Website: <a href={movie.homepage}>{movie.homepage}</a>
                  </div>
                </div>
              </div>

              {/* <div className='description-container-down'>
                <div className='description'>
                  Description: <p></p>
                  {movie.overview}
                </div>

              </div> */}
            </div>

          </div>

        </div>
      ) : movie === undefined ? (
        <div>
          <img src={gif} alt='spinner de carga' />
        </div>
      ) : (
        <h1>Inexist Movie</h1>
      )}
    </React.Fragment>
  )
}

export default Movie;