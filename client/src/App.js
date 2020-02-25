import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Contact from './pages/contract/Contact';
import NewContact from './pages/newConact/NewContact';

import store from './store';
const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/contatcs/new' component={NewContact}></Route>
          <Route path='/' component={Contact}></Route>
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
