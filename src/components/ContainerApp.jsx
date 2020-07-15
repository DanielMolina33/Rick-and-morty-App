import React from 'react';

import '../assets/styles/components/ContainerApp.css';

import Header from './Header';
import ContainerCharacters from './ContainerCharacters';

function ContainerApp({children}){
  return (
    <div className="containerApp">
      <Header/>

      <ContainerCharacters>
        {children}
      </ContainerCharacters>
    </div>
  );
}

export default ContainerApp;