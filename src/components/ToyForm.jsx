import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: ""
  }

  submitNewToy = () => {
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        image: this.state.image,
        likes: 0
      })
    })
    .then(r => r.json())
    .then(newToy => this.props.addToyToArray(newToy))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      name: e.target.name.value,
      image: e.target.image.value
    }, this.submitNewToy)
    e.target.name.value = ""
    e.target.image.value = ""
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
