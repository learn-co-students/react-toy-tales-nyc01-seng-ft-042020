import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
   let toysArr = props.toys.map((toyObj) => {
    return (
    <ToyCard
    toy={toyObj}
    key={toyObj.id}
    updateLikedToys={props.updateLikedToys}
    deleteToy={props.deleteToy}
    />
    )
  })

return (
  <div id="toy-collection">
    {toysArr}
  </div>

)


}

export default ToyContainer;
