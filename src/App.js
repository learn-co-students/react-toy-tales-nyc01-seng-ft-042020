import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toyList: []
  }

  addToy = (newToy) => {
    let copyOfList = [...this.state.toyList, newToy]
    this.setState({
    toyList: copyOfList
    })
  }

  handleClick = (newToy) => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  updateLikedToys = (updatedToy) => {
    let copyOfList = this.state.toyList.map((toy) => {
    if(toy.id === updatedToy.id){
      return updatedToy
    } else {
      return toy
    }
  })

    this.setState({
      toyList: copyOfList
    });

}

deleteToy = (passedInToyId)=> {
let copyOfList = this.state.toyList.filter((toy)=>{
  return toy.id !== passedInToyId
})

this.setState({
  toyList: copyOfList
})
}

  //use component did mount to fetch and render component
componentDidMount(){
  let url = "http://localhost:3000/toys"
  fetch(url)
  .then(resp => resp.json())
  .then((toyArray)=> {
    this.setState({
      toyList: toyArray
    });
  });
}

  render(){
    const {toyList} = this.state
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm
          addToy = {this.addToy}
          />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
        toys={toyList}
        updateLikedToys={this.updateLikedToys}
        deleteToy= {this.deleteToy}/>
        
      </>

    );
  }

}

export default App;
