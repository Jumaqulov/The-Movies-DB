import React from 'react'
import { contentUrl } from '../../repositories/repository'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function MovieID(props) {
  const items = props.movieId

  if (!items || Object.keys(items).length === 0) {
    return null;
  }

  return (
    <div className="movie-info-section">
      <div className="img-opacity">
        <img src={contentUrl + items.backdrop_path} alt={items.title} />
        <div className="bg-opacity"></div>
      </div>
      <div className="contetnt-z-index container py-5">
        <div className="row justify-content-between">
          <div className="col-3">
            <img className='w-100' src={contentUrl + items.poster_path} alt={items.title} />
          </div>
          <div className="col-8 kol-8">
            <h3 className='text-white'>{items.original_title}</h3>
            {items.genres && (
              <ul className='movie-genres mb-4'>
                {items.genres.map((gen, id) => (
                  <li key={id}><a href="">{gen.name}</a>,</li>
                ))}
              </ul>
            )}
            <div className="bar w-100">
              <div className="rate">
                {items.vote_average !== 0 &&
                  Math.round(items.vote_average * 10) > 70 ? (
                  <CircularProgressbar value={Math.round(items.vote_average * 10)} text={`${Math.round(items.vote_average * 10)}%`} background backgroundPadding={2}
                    styles={buildStyles({ backgroundColor: "#081c22", textColor: "#fff", pathColor: "#21d07a", trailColor: "#204529", textSize: "30px", })}
                  />
                ) : items.vote_average !== 0 &&
                  Math.round(items.vote_average * 10) > 45 ? (
                  <CircularProgressbar value={Math.round(items.vote_average * 10)} text={`${Math.round(items.vote_average * 10)}%`} background backgroundPadding={2}
                    styles={buildStyles({ backgroundColor: "#081c22", textColor: "#fff", pathColor: "#d2d531", trailColor: "#423D0F", textSize: "30px", })}
                  />
                ) : (
                  <CircularProgressbar value={Math.round(items.vote_average * 10)}
                    text={
                      items.vote_average !== 0
                        ? `${Math.round(items.vote_average * 10)}%`
                        : "NR"
                    }
                    background
                    backgroundPadding={2}
                    styles={buildStyles({ backgroundColor: "#081c22", textColor: "#fff", pathColor: "DB2360", trailColor: "#491532", textSize: "30px", })}
                  />
                )}
              </div>
            </div>
            <h5 className='text-white mt-3'>Overview</h5>
            <p className='text-white mt-3'>{items.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}