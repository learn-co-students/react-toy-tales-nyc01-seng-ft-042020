import React, { Component } from 'react';

class ToyForm extends Component {

  state={
    name: "",
    image: ""
  }

  handleInput = (evt) => {
    console.log(evt.target)
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        image: this.state.image
      })
    })
    .then(resp => resp.json())
    .then((newToy) => {
      this.props.addNewToyToArray(newToy)
    })
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter a toy's name..." 
            className="input-text"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br/>
          <input 
            type="text" 
            name="image" 
            placeholder="Enter a toy's image URL..." 
            className="input-text"
            value={this.state.image}
            onChange={this.handleInput}
          />
          <br/>
          <input 
            type="submit" 
            name="submit" 
            value="Create New Toy" 
            className="submit"
          />
        </form>
      </div>
    );
  }

}

export default ToyForm;
