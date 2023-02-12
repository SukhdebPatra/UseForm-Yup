import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className='nav-link' to='/api'>
                    APi Call
                </Link>
                </li>
                <li>
                  <Link className='nav-link' to='/api2' >Api 2</Link>
                </li>
                <li><Link className='nav-link' to='/table'>Table</Link></li>
                <li>
                  <Link className='nav-link' to='/api3'>Api3</Link>
                </li>
                <li>
                  <Link className='nav-link' to='/todo'>Todo</Link>
                </li>
                <li>
                  <Link className='nav-link' to='/todotwo'>TodoTwo</Link>
                </li>
                <li>
                  <Link className='nav-link' to='/formvalidation'>formvalidation</Link>
                </li>
</ul>
            </div>
        </nav>
    </div>
  )
}
