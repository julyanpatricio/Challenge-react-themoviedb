import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export function getGenres(){
  return async function(dispatch){
    const json = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
    dispatch({ type: "GET_GENRES", payload: json.data });
    
  }
}

export function getMovies() {
  return async function(dispatch) {
    const json = await axios.get(`/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
    dispatch({ type: "GET_MOVIES", payload: json.data });
  };
}

export function getMoviesByName(name) {
  return async function(dispatch) {
    try {
      const json = await axios.get(`/search/movie?query=${name}&api_key=${API_KEY}`);
      dispatch({ type: "GET_MOVIES_BY_NAME", payload: json.data });
      
    } catch (error) {
      console.log(error)
    }
      
  };
}

export function getMovieDetail(id){
  return async function(dispatch) {
    try {
      const json = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
      dispatch({ type: "GET_MOVIE_DETAIL", payload: json.data });
    } catch (error) {
      return dispatch({ type: "GET_MOVIE_DETAIL", payload: null });
    }
  };
}

export function clearPageDetail() {
  return { type: 'GET_MOVIE_DETAIL', payload: undefined} 
}

export function clearPageHome() {
  return { type: 'GET_MOVIES', payload: {results:[]}} 
}


export function filterMovies(rating){
  return {type: "FILTER_MOVIES", payload: rating}
}
