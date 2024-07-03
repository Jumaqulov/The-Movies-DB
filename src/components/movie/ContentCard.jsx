import React from 'react'
import { contentUrl } from '../../repositories/repository'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'




export default function ContentCardComponent(props) {
    const {id} = useParams()
  return (
 (props.movieList)
 &&
 (
  props.movieList.map((item , index) => {
    return(
        <div key={index} className='content-card-component mt-2'>
            <div className="card">
                <img src={contentUrl + item.poster_path} alt={item.title} />
                <Link to={`/movie-info/${item.id}`} className='text-decoration-none text-black'>
                    <p>{item.title}</p>
                </Link>
                <p>{item.release_date}</p>
            </div>
        </div>
    )
})
 )
  )
}