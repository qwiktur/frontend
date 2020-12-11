import AuthenticationProvider from './context-providers/authentication-provider';
import React from 'react';
import { BackOfficeUserContainer } from './back-office/page-user-backoffice/back-office-user-container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DataManagementContainer } from './back-office/page-data-management/data-management-container';
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
          <Route exact path="/backoffice/data-management">
            <Navbar />
            <DataManagementContainer />
          </Route>
          <Route exact path="/backoffice/users">
            <Navbar />
            <BackOfficeUserContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthenticationProvider>
  )
}

export default App;
