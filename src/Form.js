import React from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';

const Form = props =>
  <form>
    <FormControl>
      <InputLabel htmlFor="purchasePrice">Purchase Price</InputLabel>
      <Input 
        id="purchasePrice"
        type="number"
        step="any" 
        onChange={props.handlePurchaseInput}
        value={props.purchasePrice}
      />
    </FormControl>
    <br />
    <br />
    <FormControl>
      <InputLabel htmlFor="downPayment">Down Payment</InputLabel>
      <Input 
        id="downPayment"
        type="number"
        step="any"
        onChange={props.handleDownPaymentInput}
        value={props.downPayment}
      />
    </FormControl>
    <FormControl component="fieldset" required>
      <RadioGroup onChange={props.handleDownPaymentRadio}>
        <FormControlLabel 
          value="percent" 
          control={<Radio checked={props.selectedRadio === "percent"} />} 
          label="Percent" 
        />
        <FormControlLabel 
          value="dollars" 
          control={<Radio checked={props.selectedRadio === "dollars"} />} 
          label="Dollars"  
        />
      </RadioGroup>
    </FormControl>
    {/* <input 
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
    />dollars */}
    <br />
    <br />
    Principal<br />
    ${props.principal}
    <br />
    <br />
    <FormControl>
      <InputLabel htmlFor="interest">Interest Rate (APR)</InputLabel>
      <Input
        id="interest" 
        type="number"
        step="any" 
        onChange={props.handleInterestInput}
        value={props.interest}
      />%
    </FormControl>
    <br />
    <br />
    <FormControl>
      <InputLabel htmlFor="term">Loan Term</InputLabel>
      <Input 
        id="term"
        type="number" 
        onChange={props.handleTermInput}
        value={props.term}
      /> years
    </FormControl>
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