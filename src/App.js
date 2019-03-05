import React from 'react';


import './App.css';
import Timer from './components/timer'
import Case from './components/case'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  clickButton = (event) => {
    this.setTimer = setInterval(() => {
      this.setState(
        {counter: this.state.counter + 1}
      )
    }, 1000);
  }

  clearButton = (event) => {
    console.log('clear')
    clearInterval(this.setTimer)
  }

  render () {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <Timer 
            clickButton={this.clickButton} 
            counter={this.state.counter} 
            clear={this.clearButton}/>
          <Case/>
        </div>  
      </div>
    )
  }

}


export default App;
