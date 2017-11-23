import React, { Component } from 'react';
import './App.css';

import Form from './Form'

class App extends Component {
  
  state = {
    principal: "",
    payment: ""
  }

  purchasePrice = 0
  interest = 0
  term = 0

  handlePurchaseInput = event =>
    this.purchasePrice = event.target.value
  
  handleDownPaymentInput = event => {
    this.setState({ principal: this.purchasePrice - event.target.value })
  }

  handleInterestInput = event => {
      this.interest = event.target.value / 1200
      console.log(this.interest + " interest rate");
      console.log(this.state.principal + " principal");
  }

  handleTermInput = event =>
    this.setState({ payment: this.state.principal * (this.interest * Math.pow( (1 + this.interest), (event.target.value * 12) )) / (Math.pow( (1 + this.interest), (event.target.value * 12) ) - 1 ) })

  render() {
    return (
      <div>
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