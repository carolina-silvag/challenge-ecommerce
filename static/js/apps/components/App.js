import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Navbar from '../components/navbar/navbar';
import Home from '../components/home/home';
import ModalCompra from '../components/modal/modal';

class App extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      productData: {}
    };
    this.handleProductData = this.handleProductData.bind(this)
  }

  handleProductData(data) {
    console.log('estoy en el padre app', data)
    this.setState({ productData: data });
    this.child.openModalCompra();
  }


  
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Grid>
          <Row className="">
            <Col xs={12} md={12}>   
              <div>
                <Home onUpdateProductData={this.handleProductData}/>
                <ModalCompra data={this.state.productData} ref={(ref) => { this.child = ref; }}/>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;