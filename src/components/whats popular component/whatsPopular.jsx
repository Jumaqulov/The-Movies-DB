import React from 'react'
import { contentUrl } from '../../repositories/repository'

export default function WhatsPopular(props) {
  const items = props.popularTvId
  // console.log('WhatsPopular =>', props);
  return (
    <div className=''>
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
                <h3 className='text-white mb-2'>{items.original_title || items.original_name}</h3>
                <h5 className='text-white mt-4'>Overview</h5>
                {
                  (items.overview == "") ?
                    <p className='text-white mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laboriosam nulla quibusdam iusto illo quia, non numquam maiores dignissimos quas voluptate quod et voluptates, mollitia velit molestiae! Dicta magni totam nisi aut natus reprehenderit corrupti recusandae vero voluptates? Placeat voluptate voluptatum enim, totam perspiciatis dicta nihil eveniet soluta sapiente velit assumenda ipsam commodi. Beatae excepturi alias repudiandae, repellat quibusdam nobis accusamus maxime? Atque at eaque quasi unde voluptatem perspiciatis tempore totam consectetur corrupti voluptates! Libero inventore vel nulla quo unde. Laborum accusantium facere pariatur repudiandae recusandae placeat, eius, ratione alias distinctio officiis hic voluptate, perspiciatis doloremque mollitia harum ipsum suscipit!</p>
                  :
                    <p className='text-white mt-3'>{items.overview}</p>  
                }
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
