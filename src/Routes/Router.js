import TvShow from "../pages/TV show/tvShow.page"
import AboutPeople from "../pages/about people/about.people"
import FavouriteMovies from "../pages/favourite movies/favourite.movies"
import HomePage from "../pages/home/HomePage"
import MovieId from "../pages/movieID/movie.id"
import MoviePage from "../pages/moviePages/movie.page"
import PeoplePage from "../pages/people/people.page"
import SearchingMovie from "../pages/search/search.movie"
import TvMovieInfo from "../pages/tv movie id/tv.movie.info"

const router = [
  { path: `${process.env.PUBLIC_URL}`, Component: <HomePage /> },
  { path: `${process.env.PUBLIC_URL}/movie/:title`, Component: <MoviePage /> },
  { path: `${process.env.PUBLIC_URL}/tv/:title`, Component: <TvShow /> },
  { path: `${process.env.PUBLIC_URL}/person`, Component: <PeoplePage /> },
  { path: `${process.env.PUBLIC_URL}/home-movies/:id`, Component: <MovieId /> },
  { path: `${process.env.PUBLIC_URL}/whats-popular/:id`, Component: <MovieId /> },
  { path: `${process.env.PUBLIC_URL}/movie-info/:id`, Component: <MovieId /> },
  { path: `${process.env.PUBLIC_URL}/tv-info/:id`, Component: <TvMovieInfo /> },
  { path: `${process.env.PUBLIC_URL}/person/:id`, Component: <AboutPeople /> },
  { path: `${process.env.PUBLIC_URL}/search/multi`, Component: <SearchingMovie /> },
  { path: `${process.env.PUBLIC_URL}/added-movies-list`, Component: <FavouriteMovies /> },

]

export default router