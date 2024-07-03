import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tvMoviesInfo from '../../repositories/tv.movies.info'
import TvComponent from '../../components/tvComponents/tv.component'


export default function TvMovieInfo() {
    const [loading, setloading] = useState(false)
    const {id} = useParams()
    const [tvMovie, setTvMovie] = useState([])
    
    async function getTvMovie(id) {
        setloading(true)
        const currentTvMovie = await tvMoviesInfo.getTvMovieInfo(id)
        setTvMovie(currentTvMovie)
        setloading(false)
    }
    useEffect(()=>{
        getTvMovie(id)
    },[id])
  return (
    <div>
        {
            (loading) ?
            <div className="spinner">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            :
                <TvComponent  tvMovie={tvMovie} />   
        }
    </div>
  )
}
