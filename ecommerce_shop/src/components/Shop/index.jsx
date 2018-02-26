import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom'

import Snowboards from './Snowboards'
import Skis from './Skis'


const skiList = [
  {
    name: 'Mantra',
    brand: 'Volkl',
    price: 700,
    picture: '/imgs/Mantra.png',
    type: 'Freestyle Ski'
  }, {
    name: 'Aura',
    brand: 'Volkl',
    price: 850,
    picture: '/imgs/Aura.png',
    type: 'Freestyle Ski'
  }, {
    name: 'Katana',
    brand: 'Volkl',
    price: 1000,
    picture: '/imgs/Katana.png',
    type: 'Freestyle Ski'
  }, {
    name: 'Confession',
    brand: 'Volkl',
    price: 1150,
    picture: '/imgs/Confession.png',
    type: 'Freestyle Ski'
  }

]

const snowboardList = [
  {
    name: 'Cadence',
    brand: 'Burton',
    price: 550,
    picture: '/imgs/Cadence.png',
    type: 'Freestyle Snowboard'
  }, {
    name: 'Element',
    brand: 'Burton',
    price: 700,
    picture: '/imgs/Element.png',
    type: 'Freestyle Snowboard'
  }, {
    name: 'Formula',
    brand: 'Burton',
    price: 850,
    picture: '/imgs/Formula.png',
    type: 'Freestyle Snowboard'
  }, {
    name: 'Relapse',
    brand: 'Burton',
    price: 1000,
    picture: '/imgs/Relapse.png',
    type: 'Freestyle Snowboard'
  }

]


export default class Shop extends Component {

  
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
    }
  }
  

  render() {
    //console.log(skiList) WERKS, no props or state cause its hard coded i guess
    return (
      <div>
        <h4>Hi {this.props.name}, welcome to the Shop</h4>
        <div>
          <h3> Choose your poison: </h3>
          <h4><Link to='/shop/skis'>Skis</Link> &nbsp;
          <Link to='/shop/snowboards'>Snowboards</Link></h4>

        </div>
        <hr />

        <Switch>
          <div className="App">

            <Switch>
              <Route exact path="/shop/snowboards" render={() => {
                return <Snowboards snowboardList={snowboardList}
                  addItem={this.props.addItem}
                />
              }} />
              <Route path="/shop/skis" render={() => {
                return <Skis skiList={skiList}
                  addItem={this.props.addItem}
                />
              }} />

            </Switch>
          </div>
        </Switch>

      </div>


    );
  }
}


