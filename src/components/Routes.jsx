import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ContainerApp from './ContainerApp';
import Characters from '../pages/Characters';
import CharacterInfo from '../pages/CharacterInfo';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <ContainerApp>
          <Route exact path="/" component={Characters}/>
          <Route exact path="/character/:id/info" component={CharacterInfo}/>
        </ContainerApp>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;