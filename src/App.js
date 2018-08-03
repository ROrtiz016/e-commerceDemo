import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Selected from './components/Selected/Selected'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path = '/' component={Home}  />
          <Route path = '/Products' component={Products}/>
          <Route path = '/cart' component={Cart}/>
          <Route path = '/Selected/:id' component={Selected}/>
       </Switch>
      </HashRouter>
    );
  }
}

export default App;
