import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className='nav'>
          <div>
            <div className='icon'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQAn4kP1C1CBh4a2jTPZTaybTXDYDZr1KF6HgGdVlIkgDygMR" alt=""
              className='logo'/>
            </div>
            <div className='storeName2'>
              <h2>Sun Coast</h2>
            </div>
            <div className='HomeNav'>
              <Link to='/'><h3>Home</h3></Link>
            </div>
            <div className='ProductsNav'>
              <Link to='/products'><h3>Products</h3></Link>
            </div>
            <div className='CartNav'>
              <Link to='/cart'><h3>Cart</h3></Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}