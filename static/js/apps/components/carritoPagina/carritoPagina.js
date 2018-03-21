import React, { Component } from 'react';
import { Button, ButtonToolbar, Row, Col, ButtonGroup, FormControl } from 'react-bootstrap';

class PaginaCarrito extends Component {
  /*constructor(props) {
    super(props);
    this.state = { favorited: this.props.isFavorite };
  }

  favoriteBook() {
    this.setState({ favorited: true });
    this.props.onFavoriteSelect(this.props.book);
  }

  unfavoriteBook() {
    this.setState({ favorited: false });
    this.props.onFavoriteDeselect(this.props.book);
  }

  renderFavoriteHeart = () => {
    if (! this.props.isAuthenticated) {
      return '';
    }

    if (this.state.favorited) {
      return <i className="favorite fa fa-heart" onClick={() => this.unfavoriteBook()} />;
    }

    return <i className="favorite fa fa-heart-o" onClick={() => this.favoriteBook()} />;
  };*/
  renderAddProduct(data) {
    return data.map(product=> {
    return <Row className="bordeProducto">
            <Col md={12} xs={12}>
              <Row>
                <Col md={3} xs={3}>
                  <img src={product.imagen}/>
                </Col>
                <Col md={3} xs={3}>
                  <h4>{product.nombre}</h4>
                  <h5>{product.signo} {product.valor} CLP</h5>
                </Col>
                <Col md={3} xs={3}>
                  <h4>Selecciona Cantidad</h4>
                  <ButtonGroup>
                    <Button className="menos text-center" onClick={() => this.handleRestar(1)}><i className="fas fa-minus"></i></Button>
                    <FormControl className="contador"
                      type="text"
                      value={product.cantidad}
                      onChange={this.handleChange}
                    />
                    <Button className="mas text-center" onClick={() => this.handleSumar(1)}><i className="fas fa-plus"></i></Button>
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
      </div>
    );
  }
}

export default PaginaCarrito;