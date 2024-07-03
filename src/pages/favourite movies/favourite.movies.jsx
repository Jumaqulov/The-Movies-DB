import React, { useEffect, useState } from 'react'
import { removeItem } from '../../store/slices/counterSlice'
import { barearToken, contentUrl } from '../../repositories/repository'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { removeTvItem } from '../../store/slices/counterTvSlices'


const FavouriteMovies = () => {
  const render = useSelector(state => state.counter)
  const render_2 = useSelector(state => state.counterTv)
  const dispatch = useDispatch()
  const [movieList, setMovieList] = useState([])
  const [movieList_2, setMovieList_2] = useState([])
    



  useEffect(() => {

    const ids_1 = JSON.parse(localStorage.getItem('counter')) || []
    let elements = []
    let elements_2 = []
    ids_1.map(id =>
      axios.get(`https://api.themoviedb.org/3/movie/${id}`,{  
          headers: {
              accept: 'application/json',
              Authorization: barearToken
          }
      })
          .then(ress => {
            if(ress.status){
              elements.push(ress.data)
            }
          })
          .catch(err => {
              console.log(err);
          })
    )
    const ids_2 = JSON.parse(localStorage.getItem('counterTv')) || []
    ids_2.map(id =>
      axios.get(`https://api.themoviedb.org/3/tv/${id}`,{  
          headers: {
              accept: 'application/json',
              Authorization: barearToken
          }
      })
          .then(ress => {
            if(ress.status){
              elements_2.push(ress.data)
            }
          })
          .catch(err => {
              console.log(err);
          })
    )
    setTimeout(() => {
      setMovieList(elements)
      setMovieList_2(elements_2)
    }, 1000)
  }, [render,render_2])

  return(
    <div className="watch-list container py-5">
        <h3 className='text-center'>My Watchlist</h3>
        <div className="row">
          {
            (movieList.length !==0)?
              movieList.map((item, index) => {
                return(
                  <div key={index} className="row mt-3 rows">
                      <div className="col-2 d-flex justify-content-end">
                        {
                          (item.backdrop_path)?
                            <img className='favourite-movies-img' src={contentUrl + item.backdrop_path} alt={item.title || item.original_title} />
                          :
                            <img className='favourite-movies-img' src={'https://media.istockphoto.com/id/1138179183/vector/no-image-available-sign.jpg?s=612x612&w=0&k=20&c=wJLkJNHgmT9v7bqmCs5uvLcRro437iyasa5RdgFGsoE='} alt="No image" />  
                        }
                      </div>
                    <div className="col-10 favorite-items">
                        <a href={`/movie-info/${item.id}`} className='text-black text-decoration-none'><h4>{item.title || item.original_title || item.name}</h4></a>
                        <p>{item.release_date || item.first_air_date}</p>
                        {
                          (item.overview)?
                            <p className='mt-1 movie-overview'>{item.overview}</p>
                          :
                            <p className='mt-1 movie-overview'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, at sed excepturi qui unde dolorem, eos similique alias laborum recusandae, rem est. Consequatur consequuntur totam quod at. Laudantium cumque delectus error aperiam! Nemo repellendus modi molestiae illum error maiores corporis cupiditate impedit possimus autem alias molestias, officia itaque quaerat iste velit similique ea placeat totam aliquid. Asperiores odio fugiat itaque minus delectus et atque, quis voluptatibus explicabo libero veritatis iure quae voluptates necessitatibus quibusdam dolorum natus alias recusandae rem a maxime veniam enim. Placeat libero praesentium voluptatibus omnis nemo totam nesciunt doloremque vero dicta optio eaque eveniet nam, explicabo eius.</p>  
                        }
                        <button onClick={() => dispatch(removeItem(item.id))} className='remove-btn'>
                          <span className='me-2'><i className="bi bi-x-circle"></i></span>
                          remove
                        </button>  
                    </div>
                  </div>
                )
              })
              :
                <div className="empty-box">
                  <marquee behavior="" direction="">
                    <h1>There is no any films</h1>
                  </marquee>
                </div>
          }
          {
            (movieList_2.length !==0)?
              movieList_2.map((item, index) => {
                return(
                  <div key={index} className="row mt-3 rows">
                      <div className="col-2 d-flex justify-content-end">
                        {
                          (item.backdrop_path)?
                            <img className='favourite-movies-img' src={contentUrl + item.backdrop_path} alt={item.title || item.original_title} />
                          :
                            <img className='favourite-movies-img' src={'https://media.istockphoto.com/id/1138179183/vector/no-image-available-sign.jpg?s=612x612&w=0&k=20&c=wJLkJNHgmT9v7bqmCs5uvLcRro437iyasa5RdgFGsoE='} alt="No image" />  
                        }
                      </div>
                    <div className="col-10 favorite-items">
                        <a href={`/tv-info/${item.id}`} className='text-black text-decoration-none'><h4>{item.title || item.original_title || item.name}</h4></a>
                        <p>{item.release_date || item.first_air_date}</p>
                        {
                          (item.overview)?
                            <p className='mt-1 movie-overview'>{item.overview}</p>
                          :
                            <p className='mt-1 movie-overview'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, at sed excepturi qui unde dolorem, eos similique alias laborum recusandae, rem est. Consequatur consequuntur totam quod at. Laudantium cumque delectus error aperiam! Nemo repellendus modi molestiae illum error maiores corporis cupiditate impedit possimus autem alias molestias, officia itaque quaerat iste velit similique ea placeat totam aliquid. Asperiores odio fugiat itaque minus delectus et atque, quis voluptatibus explicabo libero veritatis iure quae voluptates necessitatibus quibusdam dolorum natus alias recusandae rem a maxime veniam enim. Placeat libero praesentium voluptatibus omnis nemo totam nesciunt doloremque vero dicta optio eaque eveniet nam, explicabo eius.</p>  
                        }
                        <button onClick={() => dispatch(removeTvItem(item.id))} className='remove-btn'>
                          <span className='me-2'><i className="bi bi-x-circle"></i></span>
                          remove
                        </button>  
                    </div>
                  </div>
                )
              })
              :
                <div className="empty-box">
                  <marquee behavior="" direction="">
                    <h1>There is no any series</h1>
                  </marquee>
                </div>
          }
        </div>
    </div>
  )
};

export default FavouriteMovies;
