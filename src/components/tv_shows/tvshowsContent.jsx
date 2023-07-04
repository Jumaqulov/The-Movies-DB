import React from 'react'
import { contentUrl } from '../../repositories/repository'
import { Link } from 'react-router-dom'

export default function TvshowsContent(props) {
    // console.log(props);
  return (
    props.tvList.map((item, index)=> {
        return(
            <div key={index} className='content-card-component'>
                <div className="card mt-2">
                    <img src={contentUrl + item.poster_path} alt={item.title} />
                    <Link to={`/tv-info/${item.id}`} className='text-decoration-none text-black'>{item.name}</Link>
                    <p>{item.first_air_date}</p>
                </div>
            </div>
        )
    })
  )
}
