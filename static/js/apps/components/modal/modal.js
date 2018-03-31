import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar, Row, Col, ButtonGroup, FormControl } from 'react-bootstrap';
/*import PagoModal from './../pagoModal/pagoModal';*/

class ModalCompra extends Component {
  constructor(props, context) {
    super(props, context);

    this.openModalCompra = this.openModalCompra.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleRestar = this.handleRestar.bind(this);
    this.handleSumar = this.handleSumar.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    /*this.handleChangePrecio = this.handleChangePrecio.bind(this);*/

    this.state = {
      show: false,
      data: [],
      cantidad:1,
      precio: 250
    };
  }

  openModalCompra() {
    this.setState({ show: true, cantidad: 1 });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleSumar(mas) {
    this.setState({cantidad: this.state.cantidad + mas})
  }

  handleRestar(menos) {
    this.setState({cantidad: this.state.cantidad - menos})
  }

  handleAddProduct(data, cantidad, precio) {
    this.props.onUpdateAddProductClick(data, cantidad);
  }

  render() {
    const { data } = this.props;
    return (
      <ButtonToolbar>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <h3>Producto Seleccionado</h3>
          </Modal.Header>
          <Modal.Body>
          <Row>
            <Col className="text-center" md={12} xs={12}>
              <h4>{data.name}</h4>
            </Col>
          </Row>
          <Row>
            <Col md={6} xs={6} className="text-center">
              <img src={data.imageURL}/>
              <p className="text-center">{data.currency} {data.price} CLP</p>
            </Col>
            <Col md={6} xs={6}>
              <p>Selecciona Cantidad</p>
              <ButtonGroup>
                <Button className="menos text-center" onClick={() => this.handleRestar(1)}><i className="fas fa-minus"></i></Button>
                <FormControl className="contador"
                  type="text"
                  value={this.state.cantidad}
                  onChange={this.handleChange}
                />
                <Button className="mas text-center" onClick={() => this.handleSumar(1)}><i className="fas fa-plus"></i></Button>
              </ButtonGroup>
              <h4>Total a Pagar</h4>
              <FormControl className="total"
                  type="text"
                  value={data.price * this.state.cantidad}
                  onChange={this.handleChange}
                />
            </Col>
          </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Seguir Comprando</Button>
            <Button bsStyle="primary" onClick={() => this.handleAddProduct(data, this.state.cantidad)}>Agregar al Carro</Button>
            <Button bsStyle="primary">Pagar</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default ModalCompra;