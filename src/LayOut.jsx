import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './pages/navbar/navbar'
import Footer from './pages/footer/footer'

export default function LayOut() {
    return (
        <Fragment>
            <nav>
                <Navbar />
            </nav>
            <section>
                <Outlet />
            </section>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
}