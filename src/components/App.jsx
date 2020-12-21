import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Events from './Events';
import CreateEvent from './CreateEvent';

import api from '../utils/api';

const [events, setEvents] = React.useState([]);

React.useEffect(() => {
  Promise.all([api.getInitialEvents()]).then(([initialEvents]) => {
    setEvents(initialEvents);
  }).catch((err) => new Error(`Ошибка: ${err}`));
}, []);

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/events">
            <Events events={events} />
          </Route>
          <Route path="/create-event" component={CreateEvent} />
        </Switch>

      </main>
      <Footer />

    </div>
  );
}

export default App;
