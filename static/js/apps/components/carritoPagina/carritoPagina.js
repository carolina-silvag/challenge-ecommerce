import React, { Component } from 'react';

class carritoPagina extends Component {
  constructor(props) {
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
  };

  render() {
    return (
      <div className="bookItem">
        { this.renderFavoriteHeart() }
        <img src={this.props.book.images.downsized.url} onClick={() => this.props.onBookSelect(this.props.book)} />
      </div>
    );
  }
}

export default carritoPagina;