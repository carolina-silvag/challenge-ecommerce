import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

const booksData = (data) => (
  data.items.map(item => (
    {
      title: `${item.volumeInfo.title}`,
      author: `${item.volumeInfo.authors}`,
      image: `${item.volumeInfo.imageLinks.thumbnail}`,
      price: item.saleInfo.saleability == 'FOR_SALE' ? `${item.saleInfo.listPrice.amount}` : 'Sin Stock',
      id: `${item.id}`,
      http: `${item.selfLink}`
    }
  ))
)

export default booksData;