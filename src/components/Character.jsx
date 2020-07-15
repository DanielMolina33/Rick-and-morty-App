import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Character.css';

function Character({characters}){
  return (
    <React.Fragment>
      {
        characters.map(character => {
          return (
            <Link className="character" key={character.id} to={`/character/${character.id}/info`}>
              <img className="character-image" src={character.image} alt={`${character.name} Image`}/>
              <p className="character-name">{character.name}</p>
            </Link>
          )
        })
      }
    </React.Fragment>
  );
}

export default Character;