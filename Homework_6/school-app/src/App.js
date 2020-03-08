import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import Groups from './Components/groups/Groups';
import Students from './Components/students/Students';

function App() {
  return (
  <Router>
    <div className="header">
      <span><Link to="/students" className='header-link'>Students</Link></span>
      <span><Link to="/groups" className='header-link'>Groups</Link></span>
    </div>
    <div className="content">
      <Switch>
        <Route path="/students">
          <Students />
        </Route>
        <Route path="/groups">
          <Groups />
        </Route>
        <Route path='*'>
          <Redirect to='/students' />
        </Route>
      </Switch>
      </div>
  </Router>
  );
  }  

export default App;
