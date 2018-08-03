import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Cart.css'
import NavBar from '../NavBar/NavBar'
import { addToCart, removeFromCart } from '../../dux/reducer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Cart extends Component {

  componentDidMount() {
    if (this.props.cart.length === 0) {
      axios.get('/api/cart').then(res => this.props.addToCart(res.data))
        .catch(err => console.log(err))
    }
  }

  productPrice(price, qty) {
    return price * qty
  }

  updateQuantity(value, id) {
    axios.put(`/api/addcart/${id}`, {
      quantity: value
    }).then(response => this.props.addToCart(response.data))
      .catch(err => console.log(err))
  }

  delete(id) {
    axios.delete(`/api/cart/${id}`)
      .then(response => { this.props.removeFromCart(response.data) })
      .catch(err => console.log(err))
  }

  calculateTotal() {
    let tempTotal = 0;
    tempTotal = this.props.cart.reduce((acc, el) => {
      return acc + (el.price * el.quantity)
    }, 0)
    this.total = +(tempTotal).toFixed(2);
    return this.total;
  }

  amount() {
    return this.total * 100

  }

  notify = () => toast("Thank you for Shopping with us")

  checkout() {
    axios.delete(`/api/deleteAllCart/`)
      .then(response => { this.props.removeFromCart(response.data) })
      .then(this.notify)
  }

  createListItems() {
    return this.props.cart.map(
      (cart) => {
        console.log(this.props.cart)
        return (
          <div key={Math.random()}>
            <li>
              <img src={cart.image} alt="ProdImg" />
              <h3>{cart.name}</h3>
              <h4>Price ${this.productPrice(cart.price, cart.quantity)}</h4>
              <button onClick={() => this.delete(cart.productid)}>Remove</button>
              <p>Quantity</p>
              <select defaultValue={cart.quantity} onChange={(e) => this.updateQuantity(e.target.value, cart.id)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </li>
          </div>
        )
      }
    )
  }

  render() {
    return (
      <div className='CartFlex'>
        <NavBar />
        <ToastContainer />
        <ul>
          {this.createListItems()}
        </ul>
        <div className='wrap'>
          <h1>Total:{this.calculateTotal()}</h1>
          <button onClick={() => this.checkout()} className='checkout'>Checkout</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart)