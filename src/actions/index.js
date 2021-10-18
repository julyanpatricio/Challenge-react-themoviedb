import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY

export function getGenres(){
  return function(dispatch){
    return axios.get(`/genre/movie/list?api_key=${API_KEY}`)
    .then(json => {
      dispatch({type: "GET_GENRES", payload: json.data})
    })
  }
}

export function getMovies() {
  return function(dispatch) {
    return axios.get(`/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json.data });
      });
  };
}

export function getMoviesByName(name) {
  return function(dispatch) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${API_KEY}`)
      .then(json => {
        dispatch({ type: "GET_MOVIES_BY_NAME", payload: json.data });
      });
  };
}



export function getMovieDetail(id){
  return function(dispatch) {
    return axios.get(`/movie/${id}?api_key=${API_KEY}`) 
      .then(json => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json.data });
      })
      .catch(error => {
            return dispatch({ type: "GET_MOVIE_DETAIL", payload: null })
          })
  };
}

export function changePage({currentPage,startIndex,endIndex}){
  return {
    type: "CHANGE_PAGE",
    payload: {currentPage,startIndex,endIndex}
  }
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
