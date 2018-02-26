import React, { Component } from 'react';



export default class Snowboards extends Component {

  render() {
    let { snowboardList } = this.props
    let snowboardJSX = snowboardList.map((snowboard, i) => {
      return <div className="col col-sm-6 col-xs-12" key={i}>
        <img src={snowboard.picture} alt="displayItem" height="400px" width="auto" />
        <h3 >{snowboard.name}</h3>
        <h5><em>{snowboard.brand}</em></h5>
        <span>${snowboard.price}.00</span>
        <span>&nbsp;<button onClick={() => { this.props.addItem(snowboard) }}>Buy</button></span>
      </div>
    })
    
    return (

      <div>
        <div>
          <h2>Snowoards</h2>
        </div>
        <div>
          {snowboardJSX}
        </div>
      </div>


    );
  }
}


