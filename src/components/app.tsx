import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticationProvider from './context-providers/authentication-provider';
import { HomePage } from './home-page/home-page';
import Wrapper from './lobby/wrapper';
import { Navbar } from './navbar/navbar';

const App: React.FC = () => {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <HomePage />
          </Route>
          <Route exact path="/backoffice">
            <Navbar />
            <HomePage />
          </Route>
          <Route exact path="/lobby">
            <Wrapper />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthenticationProvider>
  )
}

export default App;
