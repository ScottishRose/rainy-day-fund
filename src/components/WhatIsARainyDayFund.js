import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

const WhatIsARainyDayFund = () => {

  return (
    <div id="WhatIsARainyDayFund">
      <h1>What is a Rainy Day Fund?</h1>
      <h3>
        A rainy day fund, a.k.a. an <a href="http://www.investopedia.com/terms/e/emergency_fund.asp" target="_blank">
        emergency fund</a> is a savings account established for one purpose -
        to weather a financial disaster, e.g. the loss of your job,
        unexpected medical expenses, a much-needed car repair, etc.
      </h3>
      <h3>
        If you are
        <a href="https://www.creditdonkey.com/average-american-savings-statistics.html" target="_blank" >
        like many Americans</a>, you are not financially prepared for tough times.
        Without the cushion of an emergency fund, you increase the likelihood of abusing
        credit cards, missing important payments, prematurely tapping retirement accounts and
        eventual bankruptcy.
      </h3>
      <h3>
        Financial planners often recommend having an emergency fund that can cover
        3-6 months of expenses. This can seem like quite a lot, a near impossible goal
        - but knowing the basics of an emergency and what it takes
        to fund one is a solid first step toward better personal finance
        and peace of mind.
     </h3>
     <h3>
        This app has 3 steps.<br/><br/>
        1. Assumptions - Just basic info to get things started.<br/><br/>
        2. Expenses - Listing out your monthly expenses to determine the proper size
        of your emergency fund and get a clear picture of your
        financial obligations.  <br/><br/>
        3. Savings Plan - See how long it would take to fund your emergency fund,
        and experiment with how much you want to save each month to reach your goal.
        <br/><br/>
     </h3>
      <Button className="nav-btn" block>
        <Link className="link" to="assumptions">Input Some Assumptions</Link>
      </Button>
    </div>
  );
};

export default WhatIsARainyDayFund;
