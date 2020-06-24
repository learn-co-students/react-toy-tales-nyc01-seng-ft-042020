import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys:[]
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }
  componentDidMount=()=>{
    fetch('http://localhost:3000/toys')
    .then(r=>r.json())
    .then(data=>this.setState({toys:data}))
  }
  addNewToy=(toy)=>{
    fetch('http://localhost:3000/toys',{
      method:'POST',
      headers:{
        "content-type":"application/json",
        accept:"application/json"
      },
      body:JSON.stringify(toy)
    })
    .then(r=>r.json())
    .then(data=>{
      const newToys=[...this.state.toys,data]
      this.setState({
        toys:newToys
      })
    })
  }
  incrementLikes=(toy)=>{
    fetch(`http://localhost:3000/toys/${toy.id}`,{
      method:'PATCH',
      headers:{
        "content-type":"application/json",
        accept:"application/json"
      },
      body:JSON.stringify({
        likes:toy.likes+1
      })
    }).then(r=>{
      const newToys=this.state.toys.map(toyCheck=>{
        const newToy={...toyCheck}
        if(toyCheck===toy){
          newToy.likes +=1
        }
        return newToy
      })
      this.setState({
        toys:newToys
      })
    })
  }
  donateToy=(id)=>{
    fetch(`http://localhost:3000/toys/${id}`,{
      method:'DELETE',
    }).then(r=>{
      const newToys = this.state.toys.filter(toy=>
        toy.id!==id
      )
      this.setState({toys:newToys})
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
        <ToyContainer incrementLikes={this.incrementLikes} donateToy={this.donateToy} toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
