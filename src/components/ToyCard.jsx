import React, { Component } from 'react';

class ToyCard extends Component {
  handleDonate = (e) => {
    this.props.donateToy(this.props.toy.id) 
  }

  handleLike = (e) => {
    this.props.increaseLikes(this.props.toy)
  }
  
  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={(e) => this.handleLike(e)}>Like {'<3'}</button>
        <button className="del-btn" onClick={(e) => this.handleDonate(e)}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
