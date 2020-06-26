import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  let arrayOfComponents = props.toys.map(toy => {
    return <ToyCard toy={toy} key={toy.id} deleteToy={props.deleteToyFromArray} updatedToyArray={props.likeToy}/> 
  })

  return(
    <div id="toy-collection">
      <ul>
        {arrayOfComponents}
      </ul>
    </div>
  )
}

export default ToyContainer;