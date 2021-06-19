import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <nav>
        <header>
          <Link to="/">
            <div className="drum-stick">
              <i className="fas fa-hamburger"></i>
            </div>
          </Link>

          <div className="name">
            <h1>Meal Finder</h1>
          </div>

          <div className="heart">
            <Link to="/favourites"><i className="fas fa-heart"></i></Link>
          </div>
        </header>
      </nav>
    </>
  )
}

export default Navigation
