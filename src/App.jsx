import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className='App'>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
