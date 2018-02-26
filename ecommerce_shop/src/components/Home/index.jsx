import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
    }
  }

  //TRACKING USER INPUT ON SCREEN FOR NAME
  contentUpdater = (event) => {
    //event.preventDefault()
    this.setState({
      name: event.target.value
    })
  }

  render() {
    // change to State to have a live feed updater on screen
    let name = this.props.name
    return (

      <div>
        <h2>Home</h2>
        <p>Hi {name}, welcome to the Snowsports store!</p>
        {/* ref={self => this.form = self} */}
        <form  
              onSubmit={(event) => { this.props.addName(event, this.state.name) }}
              >
          
          <input type="text" placeholder="Enter your name"
                  onChange={(event) => { this.contentUpdater(event) }}
                  
            />
          <button type="submit"
                  //onClick={() => { this.props.addName(this.state.name) }}
                  >Submit</button>
          
        </form>
      </div>

    );
  }
}


