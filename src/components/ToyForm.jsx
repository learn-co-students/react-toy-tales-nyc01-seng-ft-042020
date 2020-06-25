import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: ""
  }

  handleInput = (evt)=> {
    this.setState({    
      [evt.target.name] : evt.target.value
    })    
  }

  sumbitToy = (evt) => {
    evt.preventDefault()
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        image: this.state.image
      })
    })
    .then(resp => resp.json())
    .then((newToy) => {
      this.props.addToy(newToy);
    })

  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form"  onSubmit={this.sumbitToy}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.handleInput} value={this.state.name}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"  onChange={this.handleInput} value={this.state.image}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
