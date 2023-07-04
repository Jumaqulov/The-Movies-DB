import React from 'react'
import { contentUrl } from '../../repositories/repository'
import './movieID.css'

export default function MovieID(props) {
  const items = props.movieId
  // console.log(props)
  return (
    <div className=''>
      {
        <div className="movie-info-section">
          <div className="img-opacity">
            <img className='w-100' src={contentUrl + items.backdrop_path} alt={items.title} />
            <div className="bg-opacity"></div>
          </div>
          <div className="contetnt-z-index container py-5">
            <div className="row justify-content-between">
              <div className="col-3">
                <img className='w-100' src={contentUrl + items.poster_path} alt={items.title} />
              </div>
              <div className="col-8">
                <h3 className='text-white mb-2'>{items.original_title}</h3>
                <h5 className='text-white mt-4'>Overview</h5>
                <p className='text-white mt-3'>{items.overview}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}