import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import responsive from './CarouselSettings';
import backgroundImg from '../../assets/Svg/weekly-content-backround.svg';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from 'react-router-dom';
import { contentUrl } from '../../repositories/repository';
import { addToList } from '../../store/slices/counterSlice';
import { useDispatch } from 'react-redux';

export default function TrendingMovies({ trending, loading }) {
    const dispatch = useDispatch();
    const [currendDropMovie, setCurrendDropMovie] = useState(null);

    function toggleList(id) {
        if (currendDropMovie === id) {
            setCurrendDropMovie(null);
        } else {
            setCurrendDropMovie(id);
        }
    }

    return (
        <div className="weekly-items-card px-4 py-2" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <Carousel responsive={responsive} arrows={false} showDots={true} swipeable={true} className='carousel'>
                {loading ? (
                    [...Array(6)].map((_, index) => (
                        <div key={index} className="swiper-card loading-card">
                            <div className="swiper-card-items loading-card-content">
                                <div className="loading-image"></div>
                                <p className="loading-title"></p>
                                <div className="circle">
                                    <CircularProgressbar value={0} text={"..."} background backgroundPadding={2}
                                        styles={buildStyles({ backgroundColor: "#081c22", textColor: "#fff", pathColor: "#cccccc", trailColor: "#204529", textSize: "30px", })} />
                                </div>
                                <p className="loading-date"></p>
                            </div>
                        </div>
                    ))
                ) : (
                    trending.map((item, index) => (
                        <div key={index} className="swiper-card">
                            <div className="swiper-card-items">
                                <Link className='text-decoration-none link-carousel' to={`/home-movies/${item.id}`}>
                                    <img className='carousel-items' src={contentUrl + item.poster_path} alt={item.title} />
                                    <p className='carousel-item-title'>{item.original_title || item.name}</p>
                                </Link>
                                <div className="circle">
                                    {item.vote_average !== 0 && Math.round(item.vote_average * 10) > 70 ? (
                                        <CircularProgressbar value={Math.round(item.vote_average * 10)} text={`${Math.round(item.vote_average * 10)}%`} background backgroundPadding={2}
                                            styles={buildStyles({ backgroundColor: "#081c22", textColor: "#fff", pathColor: "#21d07a", trailColor: "#204529", textSize: "30px", })} />
                                    ) : item.vote_average !== 0 && Math.round(item.vote_average * 10) > 45 ? (
                                        <CircularProgressbar value={Math.round(item.vote_average * 10)} text={`${Math.round(item.vote_average * 10)}%`} background backgroundPadding={2}
                                            styles={buildStyles({ backgroundColor: "#081c22", textColor: "#fff", pathColor: "#d2d531", trailColor: "#423D0F", textSize: "30px", })}
                                        />
                                    ) : (
                                        <CircularProgressbar backgroundPadding={2} background value={Math.round(item.vote_average * 10)}
                                            text={
                                                item.vote_average !== 0
                                                    ? `${Math.round(item.vote_average * 10)}%`
                                                    : "NR"
                                            }
                                            styles={buildStyles({ backgroundColor: "#081c22", textColor: "#fff", pathColor: "DB2360", trailColor: "#491532", textSize: "30px", })}
                                        />
                                    )}
                                </div>
                                <p>{item.release_date || item.first_air_date}</p>
                            </div>
                            <div className="swiper-card-icon">
                                <button className='btn btn-outline-light' onClick={() => toggleList(item.id)}>
                                    <i className="bi bi-three-dots"></i>
                                </button>
                                {currendDropMovie === item.id && (
                                    <ul className='bg-light list-unstyled adding-list'>
                                        <li>
                                            <button className='btn btn-light w-100' onClick={() => dispatch(addToList(item.id))}>
                                                <div className="row">
                                                    <div className="col-2">
                                                        <i className="bi bi-card-list"></i>
                                                    </div>
                                                    <div className="col-10">
                                                        <span className='text-start'>Add to list</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='btn btn-light w-100' onClick={() => dispatch(addToList(item.id))}>
                                                <div className="row">
                                                    <div className="col-2">
                                                        <i className="bi bi-suit-heart-fill"></i>
                                                    </div>
                                                    <div className="col-9">
                                                        <span className='text-start'>Favorite</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='btn btn-light w-100' onClick={() => dispatch(addToList(item.id))}>
                                                <div className="row">
                                                    <div className="col-2">
                                                        <i className="bi bi-bookmark-fill"></i>
                                                    </div>
                                                    <div className="col-9">
                                                        <span className='text-start'>Watchlist</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>)}
                            </div>
                        </div>
                    ))
                )}
            </Carousel>
        </div>
    );
}