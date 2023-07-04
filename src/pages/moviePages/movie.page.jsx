import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import movie from '../../repositories/movie'
import FilterComponent from '../../components/movie/FilterComponent'
import ContentListComponent from '../../components/movie/ContentListComponent'
import './moviePage.css'

export default function MoviePage() {
    const {title} = useParams()
    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(false)

    async function getMoviesByName(title) {
        setLoading(true)
        const currentMovies = await movie.getMoviesByName(title)
        setMovieList(currentMovies.results)
        setLoading(false)
    }


    console.log(movieList);
    useEffect(() =>{
        getMoviesByName(title)
    },[title])
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <FilterComponent/>
                </div>
                <div className="col-md-9">
                    {
                        (loading) ?
                            <div className="spinner">
                                <div className="spinner-border text-success" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        :
                            <ContentListComponent movieList={movieList} />      
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
