import React from 'react'
import { contentUrl } from '../../repositories/repository'
import { Link } from 'react-router-dom'

export default function ContentCardPeople(props) {
  return (
    <>
      {
        props.personList.map((item , index) => {
          return(
            <div key={index} className="content-people-card-component">
              {
                (item.profile_path)?
                <div className='card'>
                  <img src={contentUrl + item.profile_path} alt={item.name} />
                  <Link to={`/person/${item.id}`} className='text-decoration-none text-black'>{item.name}</Link>
                </div>
                :
                <div className='card'>
                  <img className='no-person-img' src={'https://img.freepik.com/free-icon/user_318-804790.jpg'} alt={item.name} />
                  <Link to={`/person/${item.id}`} className='text-decoration-none text-black'>{item.name}</Link>
                </div>
              }
            </div>
          )
        })
      }
    </>
  )
}
