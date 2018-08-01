import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default class Home extends Component {

  render() {
    return (
      <div className='App'>
        <div>
          <Link to='/Products'>Welcome</Link>
        </div>
      </div>
    )
  }
}