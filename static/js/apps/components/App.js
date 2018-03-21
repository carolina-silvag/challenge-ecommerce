import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Navbar from '../components/navbar/navbar';
import Body from '../components/body/body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleCarritoData = this.handleCarritoData.bind(this);
  }

  handleCarritoData(booleano)
  {
    console.log('estoy en app', booleano)
    this.child.openCarrito(booleano)
  }

  render() {
    return (
      <div className="App">
        <Navbar onUpdateCarritoData = {this.handleCarritoData}  />
        <Grid>
          <Row className="">
            <Col xs={12} md={12}>   
              <div>
                <Body ref={(ref) => { this.child = ref; }} />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;