import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    toyList: [],
    display: false
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
    .then(r => r.json())
    .then((toys => {
      this.setState({
        toyList: toys
      })
    }))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }
  
  addNewToy = (newToyInstance) => {
    let updatedArray = [...this.state.toyList, newToyInstance]
    this.setState({
      toyList: updatedArray
    })
  }

  deleteToy = (deletedToyId) => {
    let updatedArray = this.state.toyList.filter((toyPOJO) => {
      if(toyPOJO.id !== deletedToyId){
        return toyPOJO
      }
    })
    this.setState({
      toyList: updatedArray
    })
  }

  updateToy = (updatedToy) => {
    let updatedArray = this.state.toyList.map((toyPOJO) => {
      if(toyPOJO.id === updatedToy.id){
        return updatedToy
      } else {
        return toyPOJO
      }
    })
    this.setState({
      toyList: updatedArray
    })
  }

  renderToyList = () => {
    return this.state.toyList
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm
            addNewToy={this.addNewToy}
          />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          toys={this.renderToyList()}
          deleteToy={this.deleteToy}
          updateToy={this.updateToy}
        />
      </>
    );
  }

}

export default App;
