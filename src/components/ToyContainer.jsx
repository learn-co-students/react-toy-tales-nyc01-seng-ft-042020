import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  let arrayOfToys = props.toys.map((toyPOJO) => {
    return <ToyCard
      toy={toyPOJO}
      key={toyPOJO.id}
      deleteToy={props.deleteToy}
      updateToy={props.updateToy}
    />
  })
  
  return(
    <div id="toy-collection">
      {arrayOfToys}
    </div>
  );
}

export default ToyContainer;
