import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    toyList: [],
    display: false
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then((arrayOfToys) => {
      this.setState({
        toyList: arrayOfToys
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addNewToyToArray = (newToy) => {
    let copyOfToyList = [...this.state.toyList, newToy]
    this.setState({
      toyList: copyOfToyList
    })
  }

  deleteToyFromArray = (deleteToy) => {
    let copyOfToyList = this.state.toyList.filter((toy) => {
      return toy.id !== deleteToy
    })
    this.setState({
      toyList: copyOfToyList
    })
  }

  updateToyFromArray = (updatedToyObj) => {
    let copyOfToyList = this.state.toyList.map((toy) => {
      if(toy.id === updatedToyObj.id){
        return updatedToyObj
      } else {
        return toy
      }
    })
    this.setState({
      toyList: copyOfToyList
    })
  }

  render(){
    const {toyList} = this.state
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm
          addNewToyToArray={this.addNewToyToArray}
          />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          toys={toyList}
          updateToyFromArray={this.updateToyFromArray}
          deleteToyFromArray={this.deleteToyFromArray}
          title="Here are your toys"
        />
      </>
    );
  }

}

export default App;
