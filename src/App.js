import React, { Component } from 'react';
import './App.css';

import Form from './Form'

class App extends Component {
  
  state = {
    purchasePrice: "",
    downPayment: "",
    downPaymentPercent: true,
    principal: 0,
    interest: "",
    term: "",
    payment: 0
  }

  componentDidUpdate = () => {
    if (this.state.downPaymentPercent = true && (this.state.principal != (this.state.purchasePrice * (1 - (this.state.downPayment / 100))).toFixed(2))) {
      this.setState({
        principal: (this.state.purchasePrice * (1 - (this.state.downPayment / 100))).toFixed(2)
      })
    }
    if (this.state.downPaymentDollars = false && this.state.principal != this.state.purchasePrice - this.state.downPayment) {
      this.setState({ 
        principal: this.state.purchasePrice - this.state.downPayment
      })
    }
    if (this.state.payment != (this.state.principal * (this.state.interest * Math.pow((1 + this.state.interest), this.state.term)) / (Math.pow((1 + this.state.interest), this.state.term) - 1)).toFixed(2) && this.state.purchasePrice != "" && this.state.interest != "" && this.state.term != "") {
      this.setState({
        payment: (this.state.principal * (this.state.interest * Math.pow((1 + this.state.interest), this.state.term)) / (Math.pow((1 + this.state.interest), this.state.term) - 1)).toFixed(2)
      })
    }
  }

  handlePurchaseInput = event => 
    this.setState({ purchasePrice: event.target.value })

  handleDownPaymentPercent = () =>
    this.setState({ downPaymentPercent: !this.state.downPaymentPercent })
  
  handleDownPaymentInput = event => 
    this.setState({ downPayment: event.target.value })

  handleInterestInput = event =>
    this.setState({ interest: event.target.value / 1200 })

  handleTermInput = event =>
    this.setState({ term: event.target.value * 12 })

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
            downPaymentPercent={this.state.downPaymentPercent}
            downPaymentDollars={this.state.downPaymentDollars}
            handleDownPaymentPercent={this.handleDownPaymentPercent}
          />
        </body>
      </div>
    );
  }
}

export default App;