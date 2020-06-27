import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    toyData: data,
    display: false
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addNewToy = (toy) => {
    let toyWithLike = {...toy, likes: 0}
    let copyOfToys = [...this.state.toyData, toyWithLike]
    this.setState({
      toyData: copyOfToys
    })
  }

  donateToy = (toyId) => {
    console.log(toyId)
    let copyOfToys = this.state.toyData.filter((toy) => {
      return toy.id !== toyId
    })

    this.setState({
      toyData: copyOfToys
    })
    //filter out from the toyData array the toy that is passed in here 
    //from the CLICK on the "donate" button -> capturing its id
    //change state to the filtered array 
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer 
          toyData={this.state.toyData}
          donateToy={this.donateToy}/>
      </>
    );
  }

}

export default App;
