import React, { Component } from 'react';
/*import { Col, Button } from 'react-bootstrap';
import { Hidden } from 'react-grid-system';
import booksData from './../books/booksData';
import search from './../search/search';
import './sidebar.css';*/

let url = `https://www.googleapis.com/books/v1/volumes?q=`;

class eliminar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      categoryData: []
    }

    this.handleAuthor = this.handleAuthor.bind(this);
  }

  handleAuthor(category) {
    fetch(`${url}${category}`, {
      method: 'get'
    })
      .then(data => data.json())
      .then(category_data => {
        console.log(category_data, 'desde category');
        const data = booksData(category_data);
        this.setState({ categoryData: data });
        this.props.onUpdateBooksData(data);
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div  className="sidebarBox">
        <Hidden xs sm>
          <Col xs={10} md={10}>
            <div className="authors separation">
              <h4>Autores</h4>
              <Button bsStyle="link" className="sidebarParragraph" data="Haruki Mukarami" value="Haruki Mukarami" onClick={() => this.handleAuthor('Haruki Mukarami')}>Haruki Murakami</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="JRR Tolkien" value="JRR Tolkien" onClick={() => this.handleAuthor('JRR Tolkien')}>J.R.R. Tolkien</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Stephen King" value="Stephen King" onClick={() => this.handleAuthor('Stephen King')}>Stephen King</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Anne Rice" value="Anne Rice" onClick={() => this.handleAuthor('Anne Rice')}>Anne Rice</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Ernest Hemingway" value="Ernest Hemingway" onClick={() => this.handleAuthor('Ernest Hemingway')}>Ernest Hemingway</Button>
            </div>
            <div className="moreCategories separation">
              <h4> Más Categorias</h4>
              <Button bsStyle="link" className="sidebarParragraph" data="Religión" value="Religión" onClick={() => this.handleAuthor('Religión')}>Religión</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Salud" value="Salud" onClick={() => this.handleAuthor('Salud')}>Salud</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Poesía" value="Poesía" onClick={() => this.handleAuthor('Poesía')}>Poesía</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Diccionarios" value="Diccionarios" onClick={() => this.handleAuthor('Diccionarios')}>Diccionarios</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Humor" value="Humor" onClick={() => this.handleAuthor('Humor')}>Humor</Button>
            </div>
            <div className="bestSelling separation">
              <h4> Más Vendidos</h4>
              <Button bsStyle="link" className="sidebarParragraph" data="Call me by your name" value="Call me by your name" onClick={() => this.handleAuthor('Call me by your name')}>Call me by your name</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Harry Potter" value="Harry Potter" onClick={() => this.handleAuthor('Harry Potter')}>Harry Potter</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Game Of Thrones" value="Game Of Thrones" onClick={() => this.handleAuthor('Game Of Thrones')}>Game Of Thrones</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Divergente" value="Divergente" onClick={() => this.handleAuthor('Divergente')}>Divergente</Button>
              <Button bsStyle="link" className="sidebarParragraph" data="Lego" value="Lego" onClick={() => this.handleAuthor('Lego')}>Lego</Button>
            </div>
          </Col>
        </Hidden>
      </div>
    );
  }
}

export default eliminar;