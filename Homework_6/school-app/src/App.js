import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Groups from './Components/groups/Groups';
import Students from './Components/students/Students';
// import Modal from './Components/modal/Modal'

function App() {
  return (
  <Router>
    <div className="header">
      <span>
      <Link to="/students" className='header-link'>Students</Link></span>
      <span><Link to="/groups" className='header-link'>Groups</Link></span>
    </div>
    <div className="content">
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/students">
          <Students />
        </Route>
        <Route path="/groups">
          <Groups />
        </Route>
        {/* <Route path="/students/new">
          <Modal />
        </Route> */}
      </Switch>
      </div>
  </Router>
  );
  }  

export default App;
