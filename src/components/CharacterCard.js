import React from "react";
import './components.css';

const CharacterCard = props => {
  return (
    <div className='char-card'>
      <h2>{props.info.name}</h2>
      <h3>{props.info.species}</h3>
      <h3>{props.info.origin.name}</h3>
    </div>
  );
}


export default CharacterCard;