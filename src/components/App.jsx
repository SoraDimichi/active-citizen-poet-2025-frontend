import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Events from './Events';
import CreateEvent from './CreateEvent';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">

        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/create-event">
            <CreateEvent />
          </Route>
        </Switch>

      </main>
      <Footer />

    </div>
  );
}

export default App;
