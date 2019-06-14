import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Container from '@material-ui/core/Container';

import ButtonAppBar from './components/layouts/ButtonAppbar';
import Dashboard from './components/layouts/Dashboard';

function App() {
  return (
  	<Provider store={store}>
      <Router>
        <ButtonAppBar/>
        <Container maxWidth="sm">
          <Switch>
            <Route exect path="/" component={Dashboard} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
