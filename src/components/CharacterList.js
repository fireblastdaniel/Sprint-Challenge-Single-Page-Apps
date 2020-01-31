import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import './components.css';

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch( error => {console.log('data not returned', error);} )
    }

    getCharacters();
  }, []);

  useEffect(() => {
    const charList = document.querySelectorAll('.char-card');
    charList.forEach( item => {
      item.innerHTML.indexOf(props.filter) !== -1 ? item.style.display = 'block' : item.style.display = 'none';
    })
    console.log(props.filter)
   }, [props.filter]);

  return (
    <section className="character-list">
      {characters.map( c => (
        <CharacterCard key={c.id} info={c} />
      ))}
    </section>
  );
}

export default CharacterList;