import React from "react";
import styled from 'styled-components';
import './components.css';

const CharacterCard = props => {
  const CharCard = styled.div`
    width: 28%;
    border: 1px solid black;
    border-radius: 8px;
    margin: 1%;
    padding: 1%;
  `;

  return (
    <CharCard>
      <h2 className='name'   >{props.info.name}</h2>
      <h3 className='species'>{props.info.species}</h3>
      <h3 className='origin' >{props.info.origin.name}</h3>
    </CharCard>
  );
}


export default CharacterCard;