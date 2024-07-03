import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="not-found-section">
      <div className='container'>
        <h2>Oops! We can't find the page you're looking for</h2>
        <p>You tried to request a page that doesn't exist. If you believe this to be in error, let us know <Link className='text-decoration-none found-404-link' to={'/'}> on the forums</Link>.</p>
      </div>
    </div>
  )
}
