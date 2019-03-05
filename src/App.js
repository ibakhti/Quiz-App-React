import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  // eventHandler (event) {
  //   console.log(this, event)
  // }

  // render () {
  //   return (
  //     <div>
  //       <button onClick={this.eventHandler.bind(this)}>Clik Me</button>
  //     </div>
  //   )
  // }
  clickButton = (event) => {
    setInterval(() => {
      this.setState(
        {number: this.state.number + 1}
      )
    }, 1000)
  }

  background = (num) => {
    if(num % 3 === 0 && num % 5 === 0) {
      return 'card bg-warning text-dark'
    }else if (num % 5 === 0) {
      return 'card bg-success text-white'
    }else if (num % 3 === 0) {
      return 'card bg-light text-dark'
    }else {
      return 'card bg-dark text-white'
    }
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <div className={this.background(this.state.number)}>
            <div className="card-header d-flex justify-content-center mb-5" style={{fontSize: 90}}>{this.state.number}</div>
            <div className="card-body">
              <button className="card-title btn btn-primary" onClick={this.clickButton}>Click Me</button>
            </div>
          </div>
          {/* <button className="btn btn-primary">Clik Me!</button> */}
          </div>
        </div>
      </div>
    )
    
  }
}
export default App;
