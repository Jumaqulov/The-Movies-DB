import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import trendingMovieId from '../../repositories/trendingMovieId'
import MovieIDComponent from '../../components/movieComponents/movieID.Component'


export default function MovieId() {
    const [loading, setloading] = useState(false)
    const {id} = useParams()
    const [movieId, setMovieId] = useState([])  

    async function getMovieId(id) {
      setloading(true)
      const currentMovieId = await trendingMovieId.getTrendingMovie(id)
      setMovieId(currentMovieId)
      setloading(false)
    }

    useEffect(()=> {
        getMovieId(id)
    },[id])
  return (
    <div className=''>
      {
        (loading) ?
          <div className="spinner">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        :
          <MovieIDComponent movieId={movieId} />
      }
    </div>
  )
}
