import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div>
      <header>
        <h1>Les Échos du Pacifique</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
