import React, { Component } from 'react';


export default class Skis extends Component {
  render() {
    let { skiList } = this.props
    let skiJSX = skiList.map((ski, i) => {
      return <div className="col col-sm-6 col-xs-12" key={i}>
        <img src={ski.picture} alt="displayItem" height="auto" width="400px" />
        <h3 >{ski.name}</h3>
        <h5><em>{ski.brand}</em></h5>
        <span >${ski.price}.00</span>
        <span>&nbsp;<button onClick={() => { this.props.addItem(ski) }}>Buy</button></span>
      </div>
    }
    )

    return (

      <div>
        <div>
          <h2>Skis</h2>
        </div>
        <div className="container">
          <div className="row">
            {skiJSX}
          </div>
        </div>
      </div>

    );
  }
}


// In the product page components, use map or a for-loop to render their array of products 
// as UI elements(boxes, rows, etc.) which display the name, price and picture.Include an 
// Add to Cart button that will add one instance of that item to the Cart array on<Shop>.