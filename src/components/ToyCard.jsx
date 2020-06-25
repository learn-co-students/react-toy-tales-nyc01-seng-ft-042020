import React, { Component } from 'react';

class ToyCard extends Component {

  deleteToy = (e) => {
    console.log(this.props.object.id)
    fetch(`http://localhost:3000/toys/${this.props.object.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(toy => {
      console.log(this.props)
      this.props.removeFromArray(this.props.object)
      console.log("object deleted!")
    })
  }

  addLike = (e) => {
    fetch(`http://localhost:3000/toys/${this.props.object.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        likes: this.props.object.likes + 1
        })
      })
    .then(r => r.json())
    .then(toyObject => {
      this.props.addLikes(toyObject)
    })
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.object.name}</h2>
        <img src={this.props.object.image} alt={this.props.object.name} className="toy-avatar" />
        <p>{this.props.object.likes} Likes </p>
        <button className="like-btn" onClick={this.addLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.deleteToy}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;