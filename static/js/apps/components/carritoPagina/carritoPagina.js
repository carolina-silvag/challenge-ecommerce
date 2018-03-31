import React, { Component } from 'react';
import { Button, ButtonToolbar, Row, Col, ButtonGroup, FormControl } from 'react-bootstrap';

class PaginaCarrito extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cantidad: 0,
      precio: []
    };
    this.handleRestar = this.handleRestar.bind(this);
    this.handleSumar = this.handleSumar.bind(this);
    this.handleEliminar = this.handleEliminar.bind(this);
  }

  handleEliminar(elimino) {
    console.log('me elimino')
    this.props.onUpdateEliminar(elimino);
  }

  handleSumar(cantidad) {
    this.setState({cantidad: cantidad + mas})
  }

  handleRestar(menos, valor, cantidad) {
    this.setState({cantidad: cantidad - menos})
  }

  getPrecioTotal(data) {
    return data.reduce( function(cnt,o){ return cnt + o.precio; }, 0);
  }
  
  renderAddProduct(data) {
    return data.map(product=> {
    return <Row className="bordeProducto">
            <Col md={12} xs={12}>
              <Row>
                <Col md={3} xs={3}>
                  <img src={product.imagen}/>
                </Col>
                <Col md={2} xs={2}>
                  <h4>{product.nombre}</h4>
                  <h5>{product.signo} {product.valor} CLP</h5>
                </Col>
                <Col md={3} xs={3}>
                  <h4>Selecciona Cantidad</h4>
                  <ButtonGroup>
                    <Button className="menos text-center" onClick={() => this.handleRestar(1, product.valor, product.cantidad)}><i className="fas fa-minus"></i></Button>
                    <FormControl className="contador"
                      type="text"
                      value={product.cantidad}
                      onChange={this.handleChange}
                    />
                    <Button className="mas text-center" onClick={() => this.handleSumar(1, product.valor, product.cantidad)}><i className="fas fa-plus"></i></Button>
                  </ButtonGroup>
                </Col>
                <Col md={3} xs={3}>
                  <h4>Total a Pagar</h4>
                  <FormControl className="total"
                      type="text"
                      value={product.precio}
                      onChange={this.handleChange}
                    />
                </Col>
                <Col md={1} xs={1}>
                  <h4>Eliminar</h4>
                  <Button className="text-center" onClick={() => this.handleEliminar(product.id)}><i className="fas fa-trash-alt fa-2x"></i></Button>
                </Col>
              </Row>
            </Col>
          </Row>
     })
  }

  render() {
    const { data } = this.props
    console.log(data, 'carrito pagina de')
    return (
      <div>
        {this.renderAddProduct(data)}
        <Row>
          <Col md={12} xs={12} className="text-right">
            <h4 className="totalPagar">Total A Pagar $</h4>
            <FormControl className="totalPagar"
              type="text"
              value={this.getPrecioTotal(data)}
              onChange={this.handleChange}
            /> 
          </Col>
        </Row>
      </div>
    );
  }
}

export default PaginaCarrito;