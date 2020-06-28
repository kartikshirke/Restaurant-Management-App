import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Users from './components/Users';
import Burgers from './components/Burgers';
import Nav from './components/Nav';
import Home from './components/Home'
import EmployeesSchedule from './components/EmployeesSchedule';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/employees">
          <EmployeesSchedule />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/burgers">
          <Burgers />
        </Route>
      </Switch>
    </div>
  </Router>
)

export default App;
