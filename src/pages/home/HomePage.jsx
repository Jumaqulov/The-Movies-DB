import React, { useState, useEffect } from 'react';
import trendingMovies from '../../repositories/trendingMovies';
import popularTv from '../../repositories/popularTv';
import Media from './Media';
import WhatPopular from './WhatPopular';
import TrendingMovies from './TrendingMovies';

export default function HomePage() {
    const [trending, setTrending] = useState([]);
    const [type, setType] = useState('day');
    const [types, setTypes] = useState('tv');
    const [whtPopular, setWhtPopular] = useState([]);
    const [loadingTrending, setLoadingTrending] = useState(false);
    const [loadingPopular, setLoadingPopular] = useState(false);

    useEffect(() => {
        async function fetchTrendingMovies() {
            setLoadingTrending(true);
            const currentMovies = await trendingMovies.getMovie(type);
            setTrending(currentMovies || []);
            setLoadingTrending(false);
        }

        fetchTrendingMovies();
    }, [type]);

    useEffect(() => {
        async function fetchPopularTv() {
            setLoadingPopular(true);
            const currentMovie = await popularTv.getWhatsPopularMovie(types);
            setWhtPopular(currentMovie || []);
            setLoadingPopular(false);
        }

        fetchPopularTv();
    }, [types]);

    return (
        <div className="container">
            <Media />
            <div className="trending d-flex align-items-center mt-3">
                <h2 className='me-3'>Trending</h2>
                <span className='d-flex span-btn'>
                    <button className={`trending-btn ${type === 'day' && 'active_btn'}`} onClick={() => setType('day')}>
                        <p className='trending-btn-text'>Today</p>
                    </button>
                    <button className={`trending-btn ${type === 'week' && 'active_btn'}`} onClick={() => setType('week')}>
                        <p className='trending-btn-text'>This week</p>
                    </button>
                </span>
            </div>
            <TrendingMovies loading={loadingTrending} trending={trending} />
            <div className="whats-popular d-flex align-items-center mt-3">
                <h2 className='me-3'>What's Popular</h2>
                <span className='d-flex span-btn'>
                    <button className={`trending-btn ${types === 'tv' && 'active_btn'}`} onClick={() => setTypes('tv')}>
                        <p className='trending-btn-text'>On Tv</p>
                    </button>
                    <button className={`trending-btn ${types === 'movie' && 'active_btn'}`} onClick={() => setTypes('movie')}>
                        <p className='trending-btn-text'>In Theaters</p>
                    </button>
                </span>
            </div>
            <WhatPopular loading={loadingPopular} whtPopular={whtPopular} />
        </div>
    );
}