import React, { Component } from 'react';
import './App.css';

import Form from './Form'

class App extends Component {
  
  state = {
    principal: ""
  }

  handlePurchaseInput = event =>
    this.setState({ principal: event.target.value })

  render() {
    return (
      <div>
        <header>
          <h1>Mortgage Calculator</h1>
        </header>
        <body>
          <Form 
            handlePurchaseInput={this.handlePurchaseInput}
            principal={this.state.principal} 
          />
        </body>
      </div>
    );
  }
}

export default App;