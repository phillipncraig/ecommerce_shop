import React, { Component } from 'react';

class Cart extends Component {

  render() {

    //CART MAPPING FOR DISPLAY. 
    //Using state as it's updated by the componentDidMount() with our server file of cart stored items
    let cartJSX = this.props.cart.map((item, i) => {
      return <div className="col-12" key={i}>
        <h3 >{item.name}</h3>
        <h5><em>{item.type}</em></h5>
        <span >{item.price}</span>
      </div>
    })

    //TOTAL PRICE REDUCER
    let totalPrice = this.props.cart.reduce((acc, item) => {
      return acc += item.price
    }, 0)

    return (

      <div>
        <h2>Cart</h2>
        <button onClick={() => { this.props.clearCart()}}>Clearcart</button>
        <h4>Total price is:{totalPrice} </h4>
        <div>CartQty is: {this.props.cartQty}</div>
        <div>Cart contains: {cartJSX}</div>
      </div>

    );
  }
}

export default Cart;
