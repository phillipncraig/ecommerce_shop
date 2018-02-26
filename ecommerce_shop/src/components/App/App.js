import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import '../../App.css';

import Nav from '../Nav'
import Home from '../Home'
import Shop from '../Shop'
import Cart from '../Cart'

class App extends Component {
  //LOAD LOCAL STORED USER NAME ON PAGE REFRESH, OVERRIDING DEFAULT HARDCODED IN ARRAY ABOVE
  constructor() {
    super()
    this.state = {
      name: "Phill",
      cart: [],
      cartQty: 0
      //fireRedirect: false
      // wats dis??
    }
  }
  componentWillMount() {
    let name = JSON.parse(localStorage.getItem('user'))
    this.setState({
      name
    })
  }

  componentDidMount() {
    // the Cart pulls saved items from a server list. Need to POST on add to cart now to the file
    let promise = axios.get(`http://localhost:8080/checkout`)
    promise.then((response) => {
      this.setState({
        cart: response.data,
      })
    })
  }

  componentDidUpdate() {
    //Save our state to local storage. This will 'autosave' the current
    //state of our Todo application
    //localStorage.setItem('TODO_STATE', JSON.stringify(this.state))

    //Save our cart to the server. Send the cart items in a POST request
    let promise = axios.post('http://localhost:8080/checkout', {
      cart: this.state.cart,
      cartQty: this.state.cartQty
    })
    console.log(this.state.cart)
    promise.then((response) => {
      if (response.data.success) {
        console.log('Cart Saved.')
      }
      })
  }

  // ADD USER TO LOCAL STORAGE
  addName = (event, name) => {
    event.preventDefault()
    localStorage.setItem('user', JSON.stringify(name))
    //Below setstate prevents the name disappearing when submitted, then browsing around other links
    this.setState({
      name
    })
  }

  //ADD ITEM TO CART TO BE MAPPED FOR DISPLAY
  //Cause this is where the change callback function is, should I axios.post here in the app?
  addItem = (item) => {
    this.setState({
      cart: this.state.cart.concat(item),
      cartQty: this.state.cartQty + 1
    })
  }

  clearCart = () => {
    this.setState({
      cart: [],
      cartQty: 0
    })
  }

  //KEEP THAT SHIT CENTERED YO
  render() {
    const styles = {
      body: {
        textAlign: 'center'
      }
    }

    return (
      <Switch>
        <div style={styles.body}>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => {
              return <Home addName={this.addName}
                           name={this.state.name}
              />
            }} />
            <Route path="/shop" render={() => {
              return <Shop name={this.state.name}
                           addItem={this.addItem} />
            }} />
            <Route path="/checkout" render={() => {
              return <Cart cart={this.state.cart}
                           cartQty={this.state.cartQty}
                           clearCart={this.clearCart}
              />
            }} />
          </Switch>
        </div>
      </Switch>
    );
  }
}

export default App;

