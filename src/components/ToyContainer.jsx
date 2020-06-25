import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toyList.map(toy => 
        <ToyCard key={toy.id} object={toy} removeFromArray={props.removeFromArray} addLikes={props.addLikes}/>
      )}
    </div>
  );
}

export default ToyContainer;

