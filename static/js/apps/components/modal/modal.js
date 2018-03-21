import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar, Row, Col, ButtonGroup, FormControl } from 'react-bootstrap';
import PagoModal from './../pagoModal/pagoModal';

class ModalCompra extends Component {
  constructor(props, context) {
    super(props, context);

    this.openModalCompra = this.openModalCompra.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      data: []
    };
  }

  openModalCompra() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
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
          <PagoModal data = {data}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Seguir Comprando</Button>
            <Button bsStyle="primary">Pagar</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default ModalCompra;