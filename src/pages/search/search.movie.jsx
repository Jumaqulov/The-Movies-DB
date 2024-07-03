import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import search from '../../repositories/search'
import SearchComponent from '../../components/searchComponent/searchComponent'

export default function SearchingMovie() {
  const [searchedList, setSearchedList] = useState([])
  const [loading ,setLoading] = useState(false)
  const{title} = useParams()

  async function getSearchedMovies(title) {
    setLoading(true)
    const currentSearched = await search.getSearchedMovie(title)
    setSearchedList(currentSearched)
    setLoading(false)
  }

  useEffect(()=>{
    getSearchedMovies(title)
  },[])
  return (
    <div>
      <div className="row mb-3">
        <div className="col-3">
        </div>
        <div className="col-9">
          {
            (loading) ?
              <div className="spinner">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            :
            <SearchComponent searchedList={searchedList}/>
          }
        </div>
      </div>
    </div>
  )
}
