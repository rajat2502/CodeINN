import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Home from 'components/Home';
import Signup from 'components/Signup';
import Login from 'components/Login';
import Dashboard from 'components/Dashboard';
import WebEditor from 'components/WebEditor';
import MarkDownPreviewer from 'components/MarkDownPreviewer';
import ProgramEditor from 'components/ProgramEditor';

function App() {
  // user state
  const [user, setUser] = useState({});

  // get the user from localStorage if logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <div className='App'>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route
            path='/signup'
            exact
            render={(props) => (
              <Signup user={user} setUser={setUser} {...props} />
            )}
          />
          <Route
            path='/login'
            exact
            render={(props) => (
              <Login user={user} setUser={setUser} {...props} />
            )}
          />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/web/new' exact component={WebEditor} />
          <Route path='/mkd/new' exact component={MarkDownPreviewer} />
          <Route path='/programming/new' exact component={ProgramEditor} />
          <Route path='/web/:id' exact component={WebEditor} />
          <Route path='/mkd/:id' exact component={MarkDownPreviewer} />
          <Route path='/programming/:id' exact component={ProgramEditor} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
