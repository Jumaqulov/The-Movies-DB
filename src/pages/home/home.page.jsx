import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { contentUrl } from '../../repositories/repository';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import trendingMovies from '../../repositories/trendingMovies';
import popularTv from '../../repositories/popularTv';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useSelector, useDispatch } from 'react-redux'
import { addToList } from '../../store/slices/counterSlice';
import { addTvList } from '../../store/slices/counterTvSlices';
import backgroundImg from '../../assets/Svg/weekly-content-backround.svg'
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
}

export default function HomePage() {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const [trending, setTrending] = useState([])
    const [type, setType] = useState('day')
    const [types, setTypes] = useState('tv')
    const [whtPopular, setWhtPopular] = useState([])
    const [loading, setloading] = useState(false)
    const [currendDropMovie, setCurrendDropMovie] = useState(null)
    const [search, setSearch] = useState(null)
    const navigate = useNavigate()
    const [backgroundImage, setBackgroundImage] = useState('');
    async function getTrendingMovie() {
        setloading(true)
        const currentMovies = await trendingMovies.getMovie(type)
        setTrending(currentMovies)
        setloading(false)
    }

    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../assets/BackRoundImg', false, /\.jpg$/));
    async function getWhatpopular() {
        setloading(true)
        const currentMovie = await popularTv.getWhatsPopularMovie(types)
        setWhtPopular(currentMovie)
        setloading(false)
    }
    function searchMovie() {
        navigate(`search/${search}`)
    }

    function showlist(id) {
        setCurrendDropMovie(id)
    }   
    useEffect(() => {
        getTrendingMovie()
        getWhatpopular()
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
    }, [type, types])

    return (
        <>
            <div className="container">
                <div className='content-section' style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="content">
                        <div className="content-title">
                            <h2 className='content-text'>Welcome.</h2>
                            <h3 className='content-text'>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>
                        <div className="search">
                            <input onChange={(val) => { setSearch(val.target.value) }} className='search-input' type="search" placeholder='Search for a movie, tv show, person...... ' />
                            <button className='search-button' onClick={searchMovie}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="trending d-flex align-items-center mt-3">
                    <h2 className='me-3'>Trending</h2>
                    <span className='d-flex span-btn'>
                        <button className={`trending-btn ${type == 'day' && 'active_btn'}`} onClick={() => setType('day')}>
                            <p className='trending-btn-text'>Today</p>
                        </button>
                        <button className={`trending-btn ${type == 'week' && 'active_btn'}`} onClick={() => setType('week')}>
                            <p className='trending-btn-text'>This week</p>
                        </button>
                    </span>
                </div>
                <div className="weekly-items-card px-4 py-2" style={{ backgroundImage: `url(${backgroundImg})` }}>
                    <Carousel responsive={responsive} arrows={false} showDots={true} swipeable={true} className='carousel'>
                        {
                            (loading) ?
                                <div className="spinner">
                                    <div className="spinner-border text-success" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                :
                                trending.map((item, index) => {
                                    return (
                                        <div key={index} className="swiper-card">
                                            <div className="swiper-card-items">
                                                <Link className='text-decoration-none link-carousel' to={`/home-movies/${item.id}`}>
                                                    <img className='carousel-items' src={contentUrl + item.poster_path} alt={item.title} />
                                                    <p className='carousel-item-title'>{item.original_title || item.name}</p>
                                                </Link>
                                                <div className="circle">
                                                    {item.vote_average !== 0 &&
                                                        Math.round(item.vote_average * 10) > 70 ? (
                                                        <CircularProgressbar
                                                            value={Math.round(item.vote_average * 10)}
                                                            text={`${Math.round(item.vote_average * 10)}%`}
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
                                                    ) : item.vote_average !== 0 &&
                                                        Math.round(item.vote_average * 10) > 45 ? (
                                                        <CircularProgressbar
                                                            value={Math.round(item.vote_average * 10)}
                                                            text={`${Math.round(item.vote_average * 10)}%`}
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
                                                            value={Math.round(item.vote_average * 10)}
                                                            text={
                                                                item.vote_average !== 0
                                                                    ? `${Math.round(item.vote_average * 10)}%`
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
                                                <p>{item.release_date || item.first_air_date}</p>
                                            </div>
                                            <div className="swiper-card-icon">
                                                <button className='btn btn-outline-light' onClick={() => showlist(item.id)}><i className="bi bi-three-dots"></i></button>
                                                {
                                                    currendDropMovie === item.id && <ul className='bg-light list-unstyled adding-list'>
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
                                                    </ul>
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </Carousel>
                </div>
                <div className="whats-popular d-flex align-items-center mt-3">
                    <h2 className='me-3'>What's Popular</h2>
                    <span className='d-flex span-btn'>
                        <button className={`trending-btn ${types == 'tv' && 'active_btn'}`} onClick={() => setTypes('tv')}>
                            <p className='trending-btn-text'>On Tv</p>
                        </button>
                        <button className={`trending-btn ${types == 'movie' && 'active_btn'}`} onClick={() => setTypes('movie')}>
                            <p className='trending-btn-text'>In Theaters</p>
                        </button>
                    </span>
                </div>
                <div className="whats-popular-movie-card mt-2">
                    <Carousel responsive={responsive} arrows={false} showDots={true} swipeable={true} className='carousel'>
                        {
                            whtPopular.map((item, index) => {
                                return (
                                    <div key={index} className="swiper-card">
                                        <Link className='text-decoration-none link-carousel' to={`/whats-popular/${item.id}`}>
                                            <img className='carousel-items' src={contentUrl + item.poster_path} alt={item.title} />
                                            <p className='carousel-item-title'>{item.original_title || item.name}</p>
                                        </Link>
                                        <div className="circle">
                                            {item.vote_average !== 0 &&
                                                Math.round(item.vote_average * 10) > 70 ? (
                                                <CircularProgressbar
                                                    value={Math.round(item.vote_average * 10)}
                                                    text={`${Math.round(item.vote_average * 10)}%`}
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
                                            ) : item.vote_average !== 0 &&
                                                Math.round(item.vote_average * 10) > 45 ? (
                                                <CircularProgressbar
                                                    value={Math.round(item.vote_average * 10)}
                                                    text={`${Math.round(item.vote_average * 10)}%`}
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
                                                    value={Math.round(item.vote_average * 10)}
                                                    text={
                                                        item.vote_average !== 0
                                                            ? `${Math.round(item.vote_average * 10)}%`
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
                                        <p>{item.release_date || item.first_air_date}</p>
                                        <div className="swiper-card-icon">
                                            <button className='btn btn-outline-light' onClick={() => showlist(item.id)}><i className="bi bi-three-dots"></i></button>
                                            {
                                                currendDropMovie === item.id && <ul className='bg-light list-unstyled adding-list'>
                                                    <li>
                                                        <button className='btn btn-light w-100' onClick={() => dispatch(addTvList(item.id))}>
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
                                                        <button className='btn btn-light w-100' onClick={() => dispatch(addTvList(item.id))}>
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
                                                        <button className='btn btn-light w-100' onClick={() => dispatch(addTvList(item.id))}>
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
                                                </ul>
                                            }
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </Carousel>
                </div>

            </div>
        </>
    )
}
