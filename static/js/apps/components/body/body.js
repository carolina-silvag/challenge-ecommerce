import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Home from '../home/home';
import ModalCompra from '../modal/modal';
import PaginaCarrito from '../carritoPagina/carritoPagina';

class Body extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      productData: {},
      addProduct:[],
      verHome:true,
      verPaginaCarrito: false
    };
    this.handleProductData = this.handleProductData.bind(this)
    this.openCarrito = this.openCarrito.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleEliminar = this.handleEliminar.bind(this);
  }

  handleEliminar(id){
    let data = this.state.addProduct.filter(producto=> {
      return producto.id!==id;
    })

    this.setState({addProduct : data});
  }

  handleProductData(data) {
    this.setState({ productData: data });
    this.child.openModalCompra();
  }

  openCarrito(booleano) {
    console.log('estoy en el padre body', booleano)
    this.setState({ verPaginaCarrito: booleano });
  }

  handleAddProduct(data, cantidad) {
    let product = {
      nombre: data.name,
      valor: data.price,
      id: data.id,
      imagen: data.imageURL,
      cantidad: cantidad,
      signo: data.currency,
      precio:data.price * cantidad
    }
    this.state.addProduct.push(product);
    this.setState({addProduct: this.state.addProduct});  
  }

  render() {
    if(this.state.verPaginaCarrito === false){
      return (
        <div>
          <h1 className="text-center">Falabella Shopping Cart</h1>
          <Home onUpdateProductData={this.handleProductData} />
          <ModalCompra onUpdateAddProducClick={this.handleAddProduct} data={this.state.productData} ref={(ref) => { this.child = ref; }}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="text-center">Falabella Shopping Cart</h1>
          <PaginaCarrito data = {this.state.addProduct} onUpdateEliminar={this.handleEliminar}/>
        </div>
      )
    }
  }

}

export default Body;