import React from 'react';


import './App.css';
import Timer from './components/timer'
import Case from './components/case'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0,
      background: 'card bg-dark text-white',
      text: '',
      head: 'Welcome! Press Enter In Box To Start'
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
    // console.log('clear')
    clearInterval(this.setTimer)
  }

  changedBg = (val) => {

    if(val === 'f'){
      this.setState({
        head: `Your Score: 3 Case in ${this.state.counter} Second` 
      })
    }else if (val) {
      this.setState({
        background: 'card bg-success text-dark',
        text: 'Great!!!'
      })
    }else {
      this.setState({
        background: 'card bg-danger text-dark',
        text: 'Wrong!!!'
      })
    }
  }


  render () {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center mb-5">
          <h1 className="display-4">{this.state.head}</h1>
        </div>
        <div className="row justify-content-center">
          <Timer 
            counter={this.state.counter}
            background={this.state.background}
            txt ={this.state.text}/>
          <Case 
            timer={this.clickButton}
            clear={this.clearButton}
            background={this.changedBg}/>
        </div> 
      </div>
    )
  }

}


export default App;
