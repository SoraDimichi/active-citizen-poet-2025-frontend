import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Events from './Events';
import CreateEvent from './CreateEvent';
import Event from './Event';

import api from '../utils/api';

function App() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    api.getInitialEvents().then((initialEvents) => {
      setEvents(initialEvents);
    }).catch((err) => new Error(`Ошибка: ${err}`));
  }, []);

  return (
    <div className="page">
      <Header />
      <main className="content">

        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/events">
            <Events events={events} />
          </Route>
          <Route path="/events/:id">
            <Event events={events} />
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