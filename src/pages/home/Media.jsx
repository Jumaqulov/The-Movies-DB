import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Media() {
    const navigate = useNavigate()
    const [search, setSearch] = useState(null)
    const [backgroundImage, setBackgroundImage] = useState('');

    function searchMovie() {
        navigate(`search/${search}`)
    }

    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../assets/BackRoundImg', false, /\.jpg$/));

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
    }, [])
    return (
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
    )
}