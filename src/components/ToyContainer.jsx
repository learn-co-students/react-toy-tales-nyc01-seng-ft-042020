import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  let arrayOfComponents = props.toys.map((toyPOJO) => {
    return <ToyCard
      deleteToyFromArray={props.deleteToyFromArray}
      updateToyFromArray={props.updateToyFromArray}
      toy={toyPOJO}
      key={toyPOJO.id}
    />
  })

  return(
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      <ul>
        {arrayOfComponents}
      </ul>
    </div>
  );
}

export default ToyContainer;
