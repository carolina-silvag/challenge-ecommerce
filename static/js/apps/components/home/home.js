import React, { Component } from 'react';
import Data from '../../../../../data/mock'
import { Grid, Col, Row, Thumbnail, Button } from 'react-bootstrap';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      product: []
    };

    this.handleShow = this.handleShow.bind(this);
  }

  handleShow(product) {
    console.log('product', product)
    this.setState({product: product})
    this.props.onUpdateProductData(product);    
      
  }

  renderItem(data) {
    return data.catalog.map(product=>{
      return (<Col xs={4} md={2} id={product.name}>
              <Thumbnail src={product.imageURL} alt="">
                <h3 className="text-center">{product.name}</h3>
                <p className="text-center">{product.currency} {product.price}</p>
                <Row className="text-center">
                  <Col xs={12} md={6}>
                    <Button className="btn-default"><i className="heart fas fa-heart fa-2x"></i></Button>
                  </Col>
                  <Col xs={12} md={6}>
                    <Button className="btn-default" onClick={() => this.handleShow(product)}><i className="shopping fas fa-shopping-cart fa-2x"></i></Button>
                  </Col>
                </Row>
              </Thumbnail>
            </Col>)
    })
  }

  render() {
    return( 
      <div >
        <Grid>
          <Row>
            {this.renderItem(Data)}
          </Row>
        </Grid>;
      </div>
      )
    }
  }

export default home;