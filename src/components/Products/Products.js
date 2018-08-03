import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './Products.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    axios.get('/api/products').then(res => {
      this.setState({ products: res.data })
    })
  }


  render() {
    let products = this.state.products.map((el) => {
      return (
        <div key={el.id}>
          <div>
            <Link to={`/Selected/${el.id}`}><img src={el.image} alt="product"  className='ProdImage'/></Link>
          </div>
          <div>
            <h3>{el.name}</h3>
            <p>${el.price}.99</p>
          </div>
        </div>
      )
    }
  )


    return (
      <div className='ProductsComp'>
        <NavBar />
        <div className='Products'>{products}</div>
      </div>
    )
  }
}