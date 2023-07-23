import React from 'react'
import './navbar.css'
import { nav_link } from './navbar.items'
import { Link } from 'react-router-dom';



export default function Navbar() {
  return (
    <div className='nav bg-tmdb'>
        <div className="container px-5">
            <div className="row align-items-center pt-2 justify-content-between">
                <div className="col-md-6">
                    <div className="nav-items">
                        <ul className="list-unstyled d-flex tmdb-ul">
                            <li className='tmdb-li'>
                                <a className='text-end' href="/">
                                    <img className='tmdb-img' src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'} alt="tbdm's logo" />
                                </a>
                            </li>
                            <ul className='list-unstyled text-white d-flex'>
                                {
                                    (nav_link) && nav_link.map((item, index) => {
                                        return(
                                            <li key={index} className="tmdb-li">
                                                <a className='text-decoration-none' href='#'>{item.title}</a>
                                                {
                                                    <ul className='list-unstyled menu'>
                                                        {
                                                            item.children.map((item, index) => {
                                                                return(
                                                                    <li className='drop-down' key={index}>
                                                                        <Link className='text-black text-decoration-none' to={item.path}>{item.title}</Link>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                }
                                            </li>
                                        )
                                    }) 
                                }
                            </ul>  
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <ul className="right-side d-flex align-items-center list-unstyled gap-4 justify-content-end">
                        <li className="right-side-items">
                            <a href="">
                                <i class="bi bi-plus-lg right-side-items-icon"></i>
                            </a>
                        </li>
                        <li className="right-side-items RU-square">
                            <a className='text-decoration-none text-white' href="">EN</a>
                        </li>
                        <li className='right-side-items'>
                            <a href="">
                                <i class="bi bi-bell-fill right-side-items-icon"></i>
                            </a>
                        </li>
                        <li className='right-side-items acc'>
                            <a href={'/added-movies-list'}>
                                <i class="bi bi-person right-side-items-icon accaount"></i>
                            </a>
                        </li>
                        <li className='right-side-items'>
                            <a href="">
                                <i class="bi bi-search right-side-items-icon search-icon-color"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
