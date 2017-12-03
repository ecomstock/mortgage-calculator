import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const Form = props =>
  <form>
    Purchase Price<br />
    <input 
      type="number"
      step="any" 
      onChange={props.handlePurchaseInput}
      value={props.purchasePrice}
    />
    <br />
    <br />
    Down Payment<br />
    <input 
      type="number"
      step="any"
      onChange={props.handleDownPaymentInput}
      value={props.downPayment}
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
      step="any" 
      onChange={props.handleInterestInput}
      value={props.interest}
    />%
    <br />
    <br />
    Loan Term<br />
    <input 
      type="number" 
      onChange={props.handleTermInput}
      value={props.term}
    /> years
    <br />
    <br />
    Payment<br />
    ${props.payment} per month
    <br />
    <br />
    <Button onClick={props.handleFormReset}>
      Reset
    </Button>
  </form>

Form.propTypes = {
  purchasePrice: PropTypes.number.isRequired,
  handlePurchaseInput: PropTypes.func.isRequired,
  
  downPayment: PropTypes.number.isRequired,
  handleDownPaymentInput: PropTypes.func.isRequired,
  selectedRadio: PropTypes.string.isRequired,
  handleDownPaymentRadio: PropTypes.func.isRequired,
  
  principal: PropTypes.string.isRequired,

  interest: PropTypes.number.isRequired,
  handleInterestInput: PropTypes.func.isRequired,

  term: PropTypes.number.isRequired,
  handleTermInput: PropTypes.func.isRequired,

  payment: PropTypes.number.isRequired,

  handleFormReset: PropTypes.func.isRequired
}

export default Form