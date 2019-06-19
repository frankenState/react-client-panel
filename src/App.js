import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Container from '@material-ui/core/Container';

import ButtonAppBar from './components/layouts/ButtonAppbar';
import Dashboard from './components/layouts/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';

function App() {
  return (
  	<Provider store={store}>
      <Router> 
        <ButtonAppBar/>
        <Container maxWidth="sm">
          <Switch>
            <Route exact path="/" component={ UserIsAuthenticated(Dashboard) } />
            <Route exact path="/client/new" component={ UserIsAuthenticated(AddClient) } />
            <Route exact path="/client/:id" component={ UserIsAuthenticated(ClientDetails) } />
            <Route exact path="/client/edit/:id" component={ UserIsAuthenticated(EditClient) } />
            <Route exact path="/login" component={ UserIsNotAuthenticated(Login) } />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
