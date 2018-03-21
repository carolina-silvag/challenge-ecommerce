import React, { Component } from 'react';
import { Col, Grid, Row, FormControl, Button, Modal, ButtonGroup} from 'react-bootstrap';


class PagoModal extends Component {
  /*constructor(props, context) {
    super(props, context);
    this.state= {
      valor:[],
      cantidad:[1]
    }
    this.handleSumar = this.handleSumar.bind(this)
    this.handleRestar = this.handleRestar.bind(this)
  }
  handleSumar(mas) {
    let sum = this.state.cantidad + mas
    this.setState({cantidad : sum})
  }

  handleSumar(menos) {
    let restar = this.state.cantidad + menos
    this.setState({cantidad : restar})
  }*/

  renderProduct(data) {
    return 
      <Row>
        <Col className="text-center" md={12} xs={12}>
          <h4>{data.name}</h4>
        </Col>
      </Row>
      <Row>
      <Col md={6} xs={6} className="text-center">
        <img src={data.imageURL}/>
        <p className="text-center" onChange={this.handleRestar(data.price)}>{data.currency} {data.price} CLP</p>
      </Col>
      <Col md={6} xs={6}>
        <p>Selecciona Cantidad</p>
        <ButtonGroup>
          <Button className="menos text-center" onClick={() => this.handleSumar(1)}><i class="fas fa-minus"></i></Button>
          <FormControl className="contador"
            type="text"
            value={this.state.cantidad}
            placeholder="1"
            onChange={this.handleChangeCantidad}
          />
          <Button className="mas text-center" onClick={() => this.handlePersonaje(1)}><i class="fas fa-plus"></i></Button>
        </ButtonGroup>
        <h4>Total a Pagar</h4>
        <FormControl className="total"
            type="text"
            value={this.state.valor}
            placeholder="250"
            onChange={this.handleChangePrecio}
          />
      </Col>
    </Row>
  };


  render() {
    const { data } = this.props;
    console.log('pagoModal', data)
    return(
      <Row>
          {this.renderProduct(data)}       
      </Row>
      )
    }
  }

export default PagoModal;