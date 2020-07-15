import React from 'react';

import '../assets/styles/components/CharactersList.css';
import Character from './Character';

function CharactersList({children, NameClass}){
 return (
    <div className={NameClass}>
      {children}
    </div>
  );
}

export default CharactersList;