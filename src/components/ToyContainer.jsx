import React from 'react';
import ToyCard from './ToyCard';


const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map(toy=>
        <ToyCard incrementLikes={props.incrementLikes}donateToy={props.donateToy} toy={toy} key={toy.id}/>
      )}
    </div>
  );
}

export default ToyContainer;
