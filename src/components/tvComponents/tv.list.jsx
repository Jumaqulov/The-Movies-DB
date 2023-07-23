import React from 'react'
import { contentUrl } from '../../repositories/repository'


export default function TvList(props) {
    const items = props.tvMovie
  return (
    <div>
        {
        <div className="movie-info-section">
          <div className="img-opacity">
            <img className='w-100' src={contentUrl + items.backdrop_path} alt="" />
            <div className="bg-opacity"></div>
          </div>
          <div className="contetnt-z-index container py-5">
            <div className="row justify-content-between">
              <div className="col-3">
                <img className='w-100' src={contentUrl + items.poster_path} alt="" />
              </div>
              <div className="col-8">
                <h3 className='text-white mb-2'>{items.original_title || items.name}</h3>
                <h5 className='text-white mt-4'>Overview</h5>
                {
                  (items.overview)?
                    <p className='text-white mt-3'>{items.overview}</p>
                  :
                    <p className='text-white mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur harum praesentium recusandae, minus magnam obcaecati sequi sed vero quisquam autem, quam, ut perspiciatis temporibus. Assumenda quo ipsam dolorum numquam totam nesciunt cumque, praesentium nemo exercitationem vel quae quisquam, dolor asperiores laboriosam dolore ex sit corrupti inventore magni debitis, eum hic nisi? Atque delectus porro nesciunt similique fugit? Perferendis incidunt aspernatur id blanditiis in repellat quae voluptas! Quia perferendis at explicabo sapiente similique odit adipisci dolor omnis neque asperiores iste ratione consequuntur tempore deserunt consequatur nostrum laudantium ea, ipsum soluta repudiandae esse! Numquam expedita sint cumque alias animi unde aliquam et.</p>  
                }
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
