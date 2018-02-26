import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {

 //let { match } = this.props
    return (

        <div>
          <h2>Nav</h2>
          <p><small>Get a React Bootstrap navbar or something, will render on each page</small></p>
            <Link to='/'> Home </Link>
            <Link to='/shop'> Shop </Link>
            <Link to='/checkout'> Cart</Link>
            <hr/>
        </div>

    );
  }
}

export default Nav;
