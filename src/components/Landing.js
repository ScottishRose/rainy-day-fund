import React from 'react';
import { Link } from 'react-router';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

const Landing = () => {
  return (
    <Grid id="Landing" className="container-fluid">
      <Jumbotron id="landing-jumbotron">
        <h1>Welcome to the Rainy Day Fund App</h1>
        <h6>This is a simple practice app and NOT financial advice.<strong>Illustrative purposes only!</strong></h6>
        <Button className="nav-btn">
          <Link className="link" to="what-is-a-rainy-day-fund">I understand - take me to the app</Link>
        </Button>
      </Jumbotron>
    </Grid>
  );
}

export default Landing;
