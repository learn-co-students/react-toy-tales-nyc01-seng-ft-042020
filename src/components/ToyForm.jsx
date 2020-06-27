import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: ""
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
   //this controls the value of the input
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let formData = {
      name: e.target.name.value,
      image: e.target.image.value
    }
    //send form data through a function that is passed from app 
    //with the argument of formData

    this.props.addNewToy(formData)
  }

  render() {
    console.log(this.state.name)
    console.log(this.state.image)
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
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
