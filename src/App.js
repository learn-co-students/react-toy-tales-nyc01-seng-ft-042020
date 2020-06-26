import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
import data from './data'


class App extends React.Component{

  state = {
    toys: [],
    display: false
  }
  
  componentDidMount() {
    fetch(`http://localhost:3000/toys`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        toys: data
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addToy = (newToy) => {
    let toyList = [...this.state.toys, newToy]
    this.setState({
      toys: toyList 
    })
  }

  deleteToyFromArray = (removeToy) => {
    let copyOfToyList = this.state.toys.filter((toy) => {
      return toy.id !== removeToy
    })
    this.setState({
      toys: copyOfToyList
    })
  }

  likeToy = (updatedToy) => {
    let copyOfToyList = this.state.toys.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })
    this.setState({
      toys: copyOfToyList
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
        <ToyContainer toys={this.state.toys} deleteToyFromArray={this.deleteToyFromArray} likeToy={this.likeToy}/>
      </>
    );
  }

}

export default App;
