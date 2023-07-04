import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MoviePage from './pages/moviePages/movie.page';
import TvShow from './pages/TV show/tvShow.page';
import NotFoundPage from './pages/Not found/not.found.page';
import HomePage from './pages/home/home.page';
import PeoplePage from './pages/people/people.page';
import MovieId from './pages/movieID/movie.id';
import WhatsPopular from './pages/whats popular/whatsPopular';
import TvMovieInfo from './pages/tv movie id/tv.movie.info';
import AboutPeople from './pages/about people/about.people';
import SearchingMovie from './pages/search/search.movie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<HomePage/>} />
                <Route path='/movie/:title' element={<MoviePage />} />
                <Route path='/tv/:title' element={<TvShow/>}/>
                <Route path='/person' element={<PeoplePage/>} />
                <Route path='/homemovies/:id' element={<MovieId/>} />
                <Route path='/whatspopular/:id' element={<WhatsPopular/>} />
                <Route path='/movie-info/:id' element={<MovieId/>} />
                <Route path='/tv-info/:id' element={<TvMovieInfo/>} />
                <Route path='/person/:id' element={<AboutPeople/>} />
                <Route path='/search/:title' element={<SearchingMovie/>} />
                <Route path={'*'} element={<NotFoundPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
)