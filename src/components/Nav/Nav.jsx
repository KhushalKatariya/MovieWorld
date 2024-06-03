import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <nav className='navbar'>
        <div>
            <Link to={"/"}>Logo</Link>
        </div>
        <ol>
            <li><Link to='/viewmovie'>Home</Link></li>
            <li><Link to='/addmovie'>Add Movie</Link></li>
            <li><Link to='/viewmovie'>View Movie</Link></li>
        </ol>
    </nav>
  )
}

export default Nav