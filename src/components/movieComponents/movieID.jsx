import React from 'react'
import { contentUrl } from '../../repositories/repository'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function MovieID(props) {
  const items = props.movieId
  const genres = items.genres
  console.log(genres);
  return (
    <div className=''>
      {
        <div className="movie-info-section">
          <div className="img-opacity">
            <img className='w-100' src={contentUrl + items.backdrop_path} alt={items.title} />
            <div className="bg-opacity"></div>
          </div>
          <div className="contetnt-z-index container py-5">
            <div className="row justify-content-between">
              <div className="col-3">
                <img className='w-100' src={contentUrl + items.poster_path} alt={items.title} />
              </div>
              <div className="col-8 kol-8">
                <h3 className='text-white mb-4'>{items.original_title}</h3>
                <ul>
                  {/* {
                    // console.log("genres =>", genres)
                    genres.map((gen, id)=> {
                      return(
                        <li key={id}>{gen.name}</li>
                        // <></>
                      )
                    })
                  } */}
                </ul>
                <div className="bar w-100">
                  <div className="rate">
                                      {items.vote_average !== 0 &&
                                          Math.round(items.vote_average * 10) > 70 ? (
                                          <CircularProgressbar
                                          value={Math.round(items.vote_average * 10)}
                                          text={`${Math.round(items.vote_average * 10)}%`}
                                          background
                                          backgroundPadding={2}
                                          styles={buildStyles({
                                              backgroundColor: "#081c22",
                                              textColor: "#fff",
                                              pathColor: "#21d07a",
                                              trailColor: "#204529",
                                              textSize: "30px",
                                          })}
                                          />
                                      ) : items.vote_average !== 0 &&
                                          Math.round(items.vote_average * 10) > 45 ? (
                                          <CircularProgressbar
                                          value={Math.round(items.vote_average * 10)}
                                          text={`${Math.round(items.vote_average * 10)}%`}
                                          background
                                          backgroundPadding={2}
                                          styles={buildStyles({
                                              backgroundColor: "#081c22",
                                              textColor: "#fff",
                                              pathColor: "#d2d531",
                                              trailColor: "#423D0F",
                                              textSize: "30px",
                                          })}
                                          />
                                      ) : (
                                          <CircularProgressbar
                                          value={Math.round(items.vote_average * 10)}
                                          text={
                                              items.vote_average !== 0
                                              ? `${Math.round(items.vote_average * 10)}%`
                                              : "NR"
                                          }
                                          background
                                          backgroundPadding={2}
                                          styles={buildStyles({
                                              backgroundColor: "#081c22",
                                              textColor: "#fff",
                                              pathColor: "DB2360",
                                              trailColor: "#491532",
                                              textSize: "30px",
                                          })}
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
      }
    </div>
  )
}