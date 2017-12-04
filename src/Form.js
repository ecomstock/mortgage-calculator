import React from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';

const Form = props =>
  <form>
    <FormControl>
      <InputLabel className="form" htmlFor="purchasePrice">Purchase Price</InputLabel>
      <Input 
        className="form"
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
      <InputLabel className="form" htmlFor="downPayment">Down Payment</InputLabel>
      <Input 
        className="form" 
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
    <div className="form">
      <p>Loan amount</p>
      <p>${props.principal}</p>
    </div>
    <FormControl>
      <InputLabel className="form" htmlFor="interest">Interest Rate (APR)</InputLabel>
      <Input
        className="form" 
        id="interest" 
        type="number"
        step="any" 
        onChange={props.handleInterestInput}
        value={props.interest}
        endAdornment={<InputAdornment position="end">%</InputAdornment>}
      />
    </FormControl>
    <br />
    <br />
    <FormControl>
      <InputLabel className="form" htmlFor="term">Loan term (years)</InputLabel>
      <Input 
        className="form" 
        id="term"
        type="number" 
        onChange={props.handleTermInput}
        value={props.term}
      />
    </FormControl>
    <div className="form">
      <p>Monthly payment</p>
      <p>${props.payment}</p>
    </div>
    <Button raised onClick={props.handleFormReset} className="reset-button" >
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