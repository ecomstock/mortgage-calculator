import React from 'react'
import PropTypes from 'prop-types'

const Form = props =>
  <form>
    Purchase Amount<br />
    <input 
      type="number" 
      onChange={props.handlePurchaseInput}
    />
    <br />
    <br />
    Down Payment<br />
    <input type="number" />
    <br />
    <br />
    Principal<br />
    {props.principal}
    <br />
    <br />
    Interest Rate (APR)<br />
    <input type="number" />
    <br />
    <br />
    Loan Term<br />
    <input type="number" /> Years
    <br />
    <br />
    Payment<br />
    Payment amount goes here...
  </form>

Form.propTypes = {
  handlePurchaseInput: PropTypes.func.isRequired,
  principal: PropTypes.number.isRequired
}

export default Form