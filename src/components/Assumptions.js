import React from 'react';
import {Link} from 'react-router';
import { FormGroup, Row, ControlLabel, FormControl, Button, InputGroup} from 'react-bootstrap';
import {formatDollarValues} from '../helpers';

const Assumptions = ({assumptions, handleUpdateIncomeSources, handleUpdateIncome, handleUpdateSavings}) => {
  return (
    <div id="Assumptions">
      <FormGroup id="assumptions-form">
        <Row className="assumption">
          <ControlLabel className="control-label">
            <h4>Which of the following best applies to you?</h4>
          </ControlLabel>
          <FormControl componentClass="select" id="select-income-src" onChange={(e) => {
            handleUpdateIncomeSources(e.target.value);
            }}
          >
            <option value="1" selected>Single, one source of income</option>
            <option value="2">Single, two solid sources of income</option>
            <option value="2">Married, we both have income</option>
            <option value="1">Married, only one of us has income</option>
          </FormControl>
        </Row>

        <Row className="assumption">
          <ControlLabel className="control-label">
            <h4>How much do you earn, <a href="http://www.investopedia.com/terms/a/aftertaxincome.asp" target="_blank">after-tax</a>, a month?</h4>
          </ControlLabel>
          <div className="input-cont">
             <InputGroup.Addon className="dollar-sign">$</InputGroup.Addon>
             <FormControl
               id="income"
               className="dollar-input"
               defaultValue={formatDollarValues(1000)}
               type="text"
               maxLength="7"
               onChange={(e)=>
                  e.target.value = formatDollarValues((e.target.value).replace(",",""))
               }
               onBlur={(e) => {
                  e.preventDefault()
                  handleUpdateIncome(e.target.value)
                }}
             />
           </div>
         </Row>

         <Row className="assumption">
           <ControlLabel className="control-label" >
             <h4>How much do you have in savings that you <u>do not plan to spend</u> any time soon?</h4>
           </ControlLabel>
           <div className="input-cont">
             <InputGroup.Addon className="dollar-sign">$</InputGroup.Addon>
             <FormControl
                id="initialSavings"
                className="dollar-input"
                defaultValue={formatDollarValues(1000)}
                type="text"
                maxLength="7"
                onChange={(e)=>
                  e.target.value = formatDollarValues((e.target.value).replace(",",""))
                }

                onBlue={(e) => {
                  e.preventDefault()
                  handleUpdateSavings(e.target.value)
                }}
             />
           </div>
          </Row>
   </FormGroup>

   <Button className="nav-btn" block>
      <Link className="link" to="expenses">Add Up Your Expenses</Link>
   </Button>
  </div>
  )
}

export default Assumptions;
