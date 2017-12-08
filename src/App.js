import React, { Component } from 'react';
import Form from './Form';
import './App.css';
import Card, { CardHeader } from 'material-ui/Card';

class App extends Component {

  state = {
    purchasePrice: "",
    downPayment: "",
    selectedRadio: "percent",
    principal: "0.00",
    interest: "",
    term: "",
    payment: "0.00"
  }

  componentDidUpdate = () => {

    if(
      this.state.payment != 0 &&
        (
          this.state.purchasePrice === "" || 
          this.state.interest === "" || 
          this.state.term === ""
        )
      ){ this.setState({ payment: "0.00" } )
    }

    if(
      this.state.selectedRadio === "percent" &&
        (
          this.state.principal !== (this.state.purchasePrice * (1 - (this.state.downPayment / 100))).toFixed(2)
        )
      ){
        this.setState({
          principal: (this.state.purchasePrice * (1 - (this.state.downPayment / 100))).toFixed(2)
      })
    }

    if(
        this.state.selectedRadio === "dollars" &&
        this.state.principal !== (this.state.purchasePrice - this.state.downPayment).toFixed(2)
      ){
        this.setState({
          principal: ((this.state.purchasePrice - this.state.downPayment).toFixed(2))
        })
      }

    if(
        this.state.payment !== 
          (
            this.state.principal * 
            (this.state.interest/1200  * Math.pow((1 + this.state.interest/1200), this.state.term * 12)) / 
            (Math.pow((1 + this.state.interest/1200), this.state.term * 12) - 1)).toFixed(2)
        && this.state.purchasePrice !== "" 
        && this.state.interest !== "" 
        && this.state.term !== ""
      ){
        this.setState({
          payment: 
            (
              this.state.principal * 
              (this.state.interest/1200 * Math.pow((1 + this.state.interest/1200), this.state.term * 12)) / 
              (Math.pow((1 + this.state.interest/1200), this.state.term * 12) - 1)).toFixed(2)
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
    this.setState({ interest: event.target.value })

  handleTermInput = event =>
    this.setState({ term: event.target.value })

  handleFormReset = (event) => {
    event.preventDefault()
    this.setState({
      purchasePrice: "",
      downPayment: "",
      principal: "0.00",
      selectedRadio: "percent",
      interest: "",
      term: "",
      payment: "0.00"
    })
  }

  render() {

    return (
      <div>
        <Card raised className="card">
          <CardHeader classes={{"title": "card-header-title", "root": "card-header"}} title="Mortgage Calculator" />
          <div>
            <Form
              purchasePrice={this.state.purchasePrice}
              handlePurchaseInput={this.handlePurchaseInput}

              downPayment={this.state.downPayment}
              handleDownPaymentInput={this.handleDownPaymentInput}
              selectedRadio={this.state.selectedRadio}
              handleDownPaymentRadio={this.handleDownPaymentRadio}
              
              principal={this.state.principal}

              interest={this.state.interest}
              handleInterestInput={this.handleInterestInput}

              term={this.state.term}
              handleTermInput={this.handleTermInput}
              
              payment={this.state.payment}
              
              handleFormReset={this.handleFormReset}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default App;