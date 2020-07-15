import React from 'react';
import { Skeleton } from '@material-ui/lab';

import '../assets/styles/components/LoadingCharacters.css';

function LoadingCharactersList(){
  return (
    Array(20).fill().map((item, index) => {
      return (
        <a className="loading" key={index}>
          <Skeleton className="loading-skeleton" variant="rect" animation="wave" width={"100%"} height={"100%"}/>
        </a>
      );
    })
  );
}

function LoadingCharacterInfo(){
  return (
    <React.Fragment>
      <div className="loading" >
        <Skeleton className="loading-skeleton" variant="rect" animation="wave" width={"100%"} height={"100%"}/>
      </div>
      <div>
        <Skeleton className="loading-skeleton" variant="text" animation="wave"/>
        <Skeleton className="loading-skeleton" variant="text" animation="wave"/>
        <Skeleton className="loading-skeleton" variant="text" animation="wave"/>
        <Skeleton className="loading-skeleton" variant="text" animation="wave"/>
        <Skeleton className="loading-skeleton" variant="text" animation="wave"/>
      </div>
    </React.Fragment>
  );
}

function LoadingCharacters({list}){
  return (
    <React.Fragment>
      {
        (list)
          ? LoadingCharactersList()
          : LoadingCharacterInfo()
      }
    </React.Fragment>
  );
}

export default LoadingCharacters;