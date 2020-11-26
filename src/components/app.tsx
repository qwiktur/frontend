import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticationProvider from './context-providers/authentication-provider';
import { HomePage } from './home-page/home-page';
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
        </Switch>
      </BrowserRouter>
    </AuthenticationProvider>
  )
}

export default App;
