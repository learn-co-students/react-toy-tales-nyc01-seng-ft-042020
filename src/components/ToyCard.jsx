import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    likes: this.props.toyData.likes
  }

  handleDonate = (e) => {
    this.props.donateToy(this.props.toyData.id)
  }

  handleLike = (e) => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    let {name, image} = this.props.toyData
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDonate}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
