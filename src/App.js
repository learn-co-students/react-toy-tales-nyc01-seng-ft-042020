import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
const baseUrl = "http://localhost:3000/toys" 
// import data from './data'


class App extends React.Component{

  state = {
    display: false, 
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  } 

  componentDidMount=()=>{
    fetch(baseUrl) 
      .then(res => res.json()) 
      .then(json => this.setState({toys: json})) 
  } 

  addNewToy=(toy)=> {
    fetch(baseUrl, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(toy) 
    }) 
    .then(res => res.json()) 
    .then(json => {
      const newToys = [...this.state.toys, json] 
      this.setState({
        toys: newToys 
      }) 
    })
  } 

  increaseLikes=(toy)=> {
    fetch(`${baseUrl}/${toy.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json", 
        Accept: "application/json"
      },
      body: JSON.stringify({
        likes: toy.likes+1
      })
    })
    .then(res => {
      const newToys = this.state.toys.map(checkToy => {
        const newToy = {...checkToy} 
        if (checkToy === toy) {
          newToy.likes += 1 
        }
        return newToy 
      })
      this.setState({
        toys: newToys 
      })
    })
  } 

  donateToy=(id)=> {
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      const newToys = this.state.toys.filter(toy => 
        toy.id !== id
      )
      this.setState({toys: newToys}) 
    })
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
        <ToyContainer increaseLikes={this.increaseLikes} donateToy={this.donateToy} toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
