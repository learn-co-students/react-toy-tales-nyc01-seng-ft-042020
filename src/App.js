import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  addToy = (newToy) => {
    const updatedArray = [...this.state.toys, newToy]

    this.setState({
      toys: updatedArray
    })
  }

  updateToy = (updatedToy) => {
    const updatedArray = this.state.toys.map((toy) => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })

    this.setState({
      toys: updatedArray
    })
  }

  deleteToy = (deletedToyId) => {
    const updatedArray = this.state.toys.filter((toy) => {return toy.id !== deletedToyId})

    this.setState({
      toys: updatedArray
    })
  }

  componentDidMount() {
    fetch(`http://localhost:3000/toys`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          toys: json
        })
      })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteToy={this.deleteToy} updateToy={this.updateToy}/>
      </>
    );
  }

}

export default App;
