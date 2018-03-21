import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

const modalData = (data) => (
 
    {
      name: `${data.name}`,
      image: `${data.volumeI}`,
      price: data.saleInfo.saleability == 'FOR_SALE' ? `${data.saleInfo.listPrice.amount}` : 'Sin Stock',
      id: `${data.id}`,
      description: `${data.volumeInfo.description}`
    }

  )


export default modalData;
