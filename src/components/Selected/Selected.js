import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addToCart } from '../../dux/reducer'
import NavBar from '../NavBar/NavBar'
import './Selected.css'


class Selected extends Component {
  constructor() {
    super()
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    axios.get(`/api/selectproduct/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data)
        this.setState({ product: res.data[0] })
      })
  }

  addToCartHandler = () => {
    axios.post('/api/addcart/' + this.state.product.id).then(response => {
      console.log(response.data)
      this.props.addToCart(response.data)
    })
  }

  render() {
    return (
      <div className='Select'>
        <NavBar />
        <div className='Container'>
          <img src={this.state.product.image} alt="ProdImg" className='ProdImage'/>
          <h3>{this.state.product.name}</h3>
          <p>Price ${this.state.product.price}.99</p>
          <p>{this.state.product.description}</p>
        </div>
        <button onClick={() => { this.addToCartHandler() }}className='AddBTN'>Add to Cart</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, { addToCart })(Selected)