import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tvShow from '../../repositories/tvShow'
import TvFilterComponent from '../../components/tv_shows/tvFilterComponent'
import TvContentList from '../../components/tv_shows/tvContentList'

export default function   TvShow() {
  const {title} = useParams()
  const [showsList, setShowsList] = useState([])
  const [loading, setloading] = useState(false)


  async function getShowsByName(title) {
    setloading(true)
    const currentShows = await tvShow.getShowsByName(title)
    setShowsList(currentShows.results)
    setloading(false)
  }

  useEffect(() =>{
    getShowsByName(title)
  },[title])
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-3">
          <TvFilterComponent/>
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
            <TvContentList tvList={showsList} />
          }
        </div>
      </div>
    </div>
  )
}
