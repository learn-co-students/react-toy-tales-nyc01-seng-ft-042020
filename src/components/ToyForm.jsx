import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
    name: "",
    image: "" 
  } 

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  } 

  handleSubmit = (e) => {
    e.preventDefault() 
    this.props.addNewToy({
      name: e.target.name.value, 
      image: e.target.image.value, 
      likes: 0
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e)=> this.handleSubmit(e)} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={(e)=> this.handleFormChange(e)} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={(e)=> this.handleFormChange(e)} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
