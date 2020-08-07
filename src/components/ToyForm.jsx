import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
    name: "",
    image: ""
  }

  handleChange = (e) => {
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
    this.setState({
      name: "",
      image: "" 
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.handleSubmit(e)} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={(e) => this.handleChange(e)} type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name}/>
          <br/>
          <input onChange={(e) => this.handleChange(e)} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
