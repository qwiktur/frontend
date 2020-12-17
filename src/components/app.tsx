import AuthenticationProvider from './context-providers/authentication-provider';
import React from 'react';
import Wrapper from './lobby/wrapper';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DashboardBackOffice } from './back-office/general-dashboard/dashboard';
import { DataManagementContainer } from './back-office/data-management/data-management-container';
import { HomePage } from './home-page/home-page';
import { Navbar } from './navbar/navbar';
import WebsocketProvider from './context-providers/websocket-provider';
import { UserBackOffice } from './back-office/back-office-user/back-office-user-container';

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
              <UserBackOffice />
            </Route>
            <Route exact path="/backoffice/dashboard">
              <Navbar />
              <DashboardBackOffice />
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
