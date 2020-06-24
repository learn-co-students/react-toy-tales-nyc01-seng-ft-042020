import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = (evt) => {
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then((deleteToy) => {
      this.props.deleteToyFromArray(this.props.toy.id)
    })
  }

  handleClick = (evt) => {
    let updatedLikesNumber = this.props.toy.likes + 1

    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: updatedLikesNumber
      })
    })
    .then(resp => resp.json())
    .then((updatedToyObj) => {
      this.props.updateToyFromArray(updatedToyObj)
    })
  }

  render() {
    let {name, image, likes} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleClick}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
