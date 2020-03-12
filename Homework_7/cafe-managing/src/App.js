import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Tables from './Components/Tables/Tables';
import Waitstaff from './Components/Waitstaff/Waitstaff';
import Menue from './Components/Menue/Menue';
import Checks from './Components/Checks/Checks';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route path='/tables' component = {Tables} />
          <Route path='/waitstaff' component = {Waitstaff} />
          <Route path='/menue' component = {Menue} />
          <Route path='/checks' component = {Checks} />
          <Route path='*'>
            <Redirect to='/tables' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
