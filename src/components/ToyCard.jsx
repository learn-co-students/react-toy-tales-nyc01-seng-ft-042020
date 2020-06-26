import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = (e) => {
    // console.log('delete clicked', e.target.value)
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then((removeToy) => {
      this.props.deleteToy(this.props.toy.id)
    })
  }

  handleLike = (e) => {
    let updatedLikes = this.props.toy.likes + 1
    // console.log(updatedLikes)
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: updatedLikes
      })
    })
    .then(res => res.json())
    .then((updatedToy) => {
      this.props.updatedToyArray(updatedToy)
    })
  }

  render() {
    const {toy} = this.props 
    return (
      <div className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
