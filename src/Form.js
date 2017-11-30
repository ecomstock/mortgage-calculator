import React from 'react'
import PropTypes from 'prop-types'

const Form = props =>
  <form>
    Purchase Amount<br />
    $<input 
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
    <input 
      type="radio"
      value="percent"
      checked={props.selectedRadio === "percent"}
      onChange={props.handleDownPaymentRadio}
    />percent
    <input 
      type="radio"
      value="dollars"
      checked={props.selectedRadio === "dollars"}
      onChange={props.handleDownPaymentRadio}
    />dollars
    <br />
    <br />
    Principal<br />
    ${props.principal}
    <br />
    <br />
    Interest Rate (APR)<br />
    <input 
      type="number" 
      onChange={props.handleInterestInput}
    />%
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
    <br />
    <br />
    <button onClick={props.handleFormReset}>
      Reset
    </button>
  </form>

Form.propTypes = {
  handlePurchaseInput: PropTypes.func.isRequired,
  handleDownPaymentInput: PropTypes.func.isRequired,
  principal: PropTypes.number.isRequired,
  handleInterestInput: PropTypes.func.isRequired,
  handleTermInput: PropTypes.func.isRequired,
  payment: PropTypes.number.isRequired,
  downPaymentPercent: PropTypes.bool.isRequired,
  downPaymentDollars: PropTypes.bool.isRequired,
  selectedRadio: PropTypes.string.isRequired,
  handleDownPaymentRadio: PropTypes.func.isRequired,
  handleFormReset: PropTypes.func.isRequired
}

export default Form