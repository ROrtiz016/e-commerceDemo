import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default class Home extends Component {

  render() {
    return (
      <div className='App'>
        <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Condensed" rel="stylesheet" />
        <div className='title'>
          <div className='icon'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQAn4kP1C1CBh4a2jTPZTaybTXDYDZr1KF6HgGdVlIkgDygMR" alt="icon" className='logo' />
          </div>
          <div className='StoreName'>
            <h1>Sun Coast</h1>
          </div>
        </div>
        <div className='Body'>
          <div className='BackImg'>
            <img src='https://wallpapercave.com/wp/wp2366358.jpg' alt="back"
              className='backImg' />
          </div>
          <div className='Enter'>
            <h2>#SEEWHATSOUTTHERE</h2>
            <div className='shop'>
              <Link to='/Products'><h1>SHOP</h1></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}