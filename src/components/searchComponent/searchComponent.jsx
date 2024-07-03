import React from 'react'
import { contentUrl } from '../../repositories/repository';

export default function SearchComponent(props) {
    console.log(props.searchedList.results);

  return (
    <div>
        {
            (props.searchedList.results) && props.searchedList.results.map((item, index) => {
                return(
                    <div key={index} className="col-12">
                        <div className="row search-result">
                            <div className="col-2 mt-4">
                                <img className='w-100' src={contentUrl + item.poster_path} alt="" />
                            </div>
                            <div className="col-10 mt-4 search-detailes">
                                <h4>{item.title || item.name}</h4>
                                <p>{item.release_date || item.first_air_date}</p>
                                <p>{item.overview}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
