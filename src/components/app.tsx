import AuthenticationProvider from './context-providers/authentication-provider';
import React from 'react';
import { BackOfficeUserContainer } from './back-office/page-user-backoffice/back-office-user-container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DataManagementContainer } from './back-office/page-data-management/data-management-container';
import { HomePage } from './home-page/home-page';
import Wrapper from './lobby/wrapper';
import { Navbar } from './navbar/navbar';
import WebsocketProvider from './context-providers/websocket-provider';

const App: React.FC = () => {
  return (
    <AuthenticationProvider>
      <WebsocketProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <HomePage />
            </Route>
            <Route exact path="/backoffice/data-management">
              <Navbar />
              <DataManagementContainer />
            </Route>
            <Route exact path="/backoffice/users">
              <Navbar />
              <BackOfficeUserContainer />
            </Route>
            <Route exact path="/lobby">
              <Wrapper />
            </Route>
          </Switch>
        </BrowserRouter>
      </WebsocketProvider>
    </AuthenticationProvider>
  )
}

export default App;
