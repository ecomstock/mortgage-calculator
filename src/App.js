import React, { Component } from 'react';
import './App.css';

import Form from './Form'

class App extends Component {
  
  state = {
    purchasePrice: 0,
    downPayment: 0,
    principal: 0,
    interest: 0,
    term: 0,
    payment: 0
  }

  componentDidUpdate = () => {
    if (this.state.principal != this.state.purchasePrice - this.state.downPayment) {
      this.setState({ principal: this.state.purchasePrice - this.state.downPayment})
    }
  }

  handlePurchaseInput = event => {
    this.setState({ purchasePrice: event.target.value })
  }
  
  handleDownPaymentInput = event => {
    this.setState({ downPayment: event.target.value })
  }

  handleInterestInput = event => {
    this.setState({ interest: event.target.value / 1200 })
  }

  handleTermInput = event =>
    this.setState({ payment: (this.state.principal * (this.interest * Math.pow( (1 + this.interest), (event.target.value * 12) )) / (Math.pow( (1 + this.interest), (event.target.value * 12) ) - 1 )).toFixed(2) })

  render() {
    return (
      <div className="app">
        <header>
          <h1>Mortgage Calculator</h1>
        </header>
        <body>
          <Form 
            handlePurchaseInput={this.handlePurchaseInput}
            handleDownPaymentInput={this.handleDownPaymentInput}
            principal={this.state.principal} 
            handleInterestInput={this.handleInterestInput}
            handleTermInput={this.handleTermInput}
            payment={this.state.payment}
          />
        </body>
      </div>
    );
  }
}

export default App;