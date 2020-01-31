import React from "react";
import './components.css';

const CharacterCard = props => {
  return (
    <div className='char-card'>
      <h2 className='name'   >{props.info.name}</h2>
      <h3 className='species'>{props.info.species}</h3>
      <h3 className='origin' >{props.info.origin.name}</h3>
    </div>
  );
}


export default CharacterCard;