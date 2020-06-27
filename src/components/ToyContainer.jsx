import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  let renderToyCard = props.toyData.map((toy) => {
    return <ToyCard 
    key={toy.id} 
    toyData={toy}
    donateToy={props.donateToy}/>
    })
  
  return (
    <div id="toy-collection">
      {renderToyCard}
    </div>
  );
}

export default ToyContainer;
