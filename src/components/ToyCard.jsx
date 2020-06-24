import React, { Component } from 'react';

class ToyCard extends Component {

  handleLike = () => {
    const newLikes = this.props.toy.likes + 1

    const configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        likes: newLikes
      })
    }

    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, configObj)
      .then(resp => resp.json())
      .then(json => this.props.updateToy(json))
  }

  handleDonate = () => {
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, { method: "DELETE" })
      .then(resp => resp.json())
      .then(this.props.deleteToy(this.props.toy.id))
  }

  render() {

    const { name, likes, image } = this.props.toy

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDonate}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
