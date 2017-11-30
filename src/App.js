import React, { Component } from 'react';
import './App.css';

import Form from './Form'

class App extends Component {
  
  state = {
    purchasePrice: "",
    downPayment: "",
    selectedRadio: "percent",
    principal: 0,
    interest: "",
    term: "",
    payment: 0
  }

  componentDidUpdate = () => {
    // if (this.state.payment != 0 && this.state.purchasePrice === "" || this.state.interest === "" || this.state.payment === ""){
    //   this.setState({ payment: 0 })
    // }
    if (this.state.selectedRadio === "percent" && (this.state.principal != (this.state.purchasePrice * (1 - (this.state.downPayment / 100))).toFixed(2))) {
      this.setState({
        principal: (this.state.purchasePrice * (1 - (this.state.downPayment / 100))).toFixed(2)
      })
    }
    if (this.state.selectedRadio === "dollars" && this.state.principal != this.state.purchasePrice - this.state.downPayment) {
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

  handleDownPaymentRadio = event =>
    this.setState({ selectedRadio: event.target.value })
  
  handleDownPaymentInput = event => 
    this.setState({ downPayment: event.target.value })

  handleInterestInput = event =>
    this.setState({ interest: event.target.value / 1200 })

  handleTermInput = event =>
    this.setState({ term: event.target.value * 12 })

  handleFormReset = () =>
    this.setState({ 
      purchasePrice: "",
      downPayment: "",
      principal: 0,
      selectedRadio: "percent",
      interest: "",
      term: "",
      payment: 0
    })

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
            handleDownPaymentRadio={this.handleDownPaymentRadio}
            selectedRadio={this.state.selectedRadio}
            handleFormReset={this.handleFormReset}
          />
        </body>
      </div>
    );
  }
}

export default App;