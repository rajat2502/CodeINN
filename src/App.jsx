import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Home from 'components/Home';
import Signup from 'components/Signup';
import Login from 'components/Login';
import Dashboard from 'components/Dashboard';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
