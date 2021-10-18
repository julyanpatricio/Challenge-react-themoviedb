import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { clearPageHome, getGenres, getMovies } from "../actions";
import './Home.css'
import '../App.css'
import ImageDefaultMovie from '../ImageDefaultMovie.jpg'

const BASE_URL_IMAGES = 'https://image.tmdb.org/t/p/original'

function Home() {

  let { movies, genres } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
    if (!movies.length) dispatch(getMovies())
    return () => {
      dispatch(clearPageHome())
    }
    // eslint-disable-next-line 
  }, [])


  return (
    <div className='moviesList'>
      {movies?.map((movie, i) => (
        <React.Fragment key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <div className='card bg-dark text-white border-0'>
              <div>
                <div className='img-zoom img-zoom-container card-background bg-secondary'>
                  <img className='card-img-top' src={movie.poster_path ? BASE_URL_IMAGES + movie.poster_path : ImageDefaultMovie} alt={movie.title} />
                </div>
                <div className='badge-pill badge-warning position-absolute right-badge'>★{movie.vote_average}/10</div>
              </div>
              <div className='card-body'>
                <div className='badge-pill badge-dark position-absolute badge-position'>
                  #<strong>{i + 1}</strong>
                </div>
              </div>
              <h2 className='position-absolute h2-position'>
                {movie.title}
              </h2>
              <div className='position-absolute genre-badge-position'>
                {movie.genre_ids.map((genre, i) => (
                  <div className='badge badge-dark genre-badge-margin' key={i + 1}>
                    {genres[genre]}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </React.Fragment>
      ))
      }
    </div>
  )
}
export default Home