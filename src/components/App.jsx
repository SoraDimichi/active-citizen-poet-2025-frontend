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
          <Route exact path="/" component={Dashboard} />
          <Route path="/events" component={Events} />
          <Route path="/create-event" component={CreateEvent} />
        </Switch>

      </main>
      <Footer />

    </div>
  );
}

export default App;
