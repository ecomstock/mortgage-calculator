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
    <input 
      type="number"
      onChange={props.handleDownPaymentInput}
    />
    <br />
    <br />
    Principal<br />
    {props.principal}
    <br />
    <br />
    Interest Rate (APR)<br />
    <input 
      type="number" 
      onChange={props.handleInterestInput}
    />
    <br />
    <br />
    Loan Term<br />
    <input 
      type="number" 
      onChange={props.handleTermInput}
    /> years
    <br />
    <br />
    Payment<br />
    ${props.payment} per month
  </form>

Form.propTypes = {
  handlePurchaseInput: PropTypes.func.isRequired,
  handleDownPaymentInput: PropTypes.func.isRequired,
  principal: PropTypes.number.isRequired,
  handleInterestInput: PropTypes.func.isRequired,
  handleTermInput: PropTypes.func.isRequired,
  payment: PropTypes.number.isRequired
}

export default Form