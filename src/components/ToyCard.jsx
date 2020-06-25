import React, { Component } from 'react';

class ToyCard extends Component {

  likeHandler = (evt) => {
    let numLikes = this.props.toy.likes + 1
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "PATCH",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        likes: numLikes
      })
    })
      .then(resp => resp.json())
      .then((updatedToy)=> {
        this.props.updateLikedToys(updatedToy)
      })


    }

  delHandler = (evt) => {
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then((delToy)=>{
      this.props.deleteToy(this.props.toy.id)
    })
  }

  render() {
    let {name, image, likes} = this.props.toy
    return (
     
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.likeHandler}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.delHandler}>Donate to GoodWill</button>
      </div>
   
    );
  }

}

export default ToyCard;
