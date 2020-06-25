import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    arrayOfToys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addToyToArray = (toy) => {
    let copyOfArray = [...this.state.arrayOfToys, toy];
    this.setState({
      arrayOfToys: copyOfArray
    })
  }

  removeFromArray = (toy) => {
    let removedToy = this.state.arrayOfToys.filter(toyObject => {
      return toyObject.id !== toy.id
    })
    this.setState({
      arrayOfToys: removedToy
    })
  }

  addLikes = (updatedToy) => {
    let copyList = this.state.arrayOfToys.map(toyObject => {
      if (toyObject.id === updatedToy.id) {
        return updatedToy
      } else {
        return toyObject
      } 
    })

    this.setState({
      arrayOfToys: copyList
    })
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/toys')
    .then(r => r.json())
    .then(fetchedArray => {
      this.setState({
        arrayOfToys: fetchedArray
      })
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToyToArray={this.addToyToArray}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toyList = {this.state.arrayOfToys} removeFromArray={this.removeFromArray} addLikes={this.addLikes}/>
      </>
    );
  }

}

export default App;
