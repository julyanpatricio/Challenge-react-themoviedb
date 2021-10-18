
const initialState = {
  movies: [],
  moviesSinFIltro: [],
  movie: undefined,
  genres: {},
};

function rootReducer(state = initialState, action) {

  switch (action.type) {

    case "GET_GENRES":
      let objGenres = {}
      // eslint-disable-next-line
      action.payload.genres.map(genre => {
        objGenres = { ...objGenres, [genre.id]: genre.name }
      })
      return {
        ...state,
        genres: objGenres
      }

    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload.results,
        moviesSinFIltro: action.payload.results,
      }

    case "GET_MOVIES_BY_NAME":
      return {
        ...state,
        movies: action.payload.results,
        moviesSinFIltro: action.payload.results,
      }

    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movie: action.payload
      }

    case "FILTER_MOVIES":
      const filteredMovies = action.payload ? state.moviesSinFIltro.filter(movie => movie.vote_average > action.payload-2 && movie.vote_average <= action.payload) : state.moviesSinFIltro 
      return {
        ...state,
        movies: filteredMovies,
      }

    default:
      return state
  }
}

export default rootReducer;