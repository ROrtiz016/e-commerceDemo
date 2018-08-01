import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path = '/' component={Home} exact />
          <Route path = '/products' component={Products} exact />
          <Route path = '/cart' component={Cart} exact />
       </Switch>
      </HashRouter>
    );
  }
}

export default App;
