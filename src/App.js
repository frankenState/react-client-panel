import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/client/new" component={AddClient} />
            <Route exact path="/client/:id" component={ClientDetails} />
            <Route exact path="/client/edit/:id" component={EditClient} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
