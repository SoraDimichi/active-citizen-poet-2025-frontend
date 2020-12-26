import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Events from './Events';
import CreateEvent from './CreateEvent';
import Event from './Event';
import PopupSubmitEvent from './PopupSubmitEvent';

import api from '../utils/api';

function App() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    api.getInitialEvents().then((initialEvents) => {
      setEvents(initialEvents);
    }).catch((err) => new Error(`Ошибка: ${err}`));
  }, []);

  const [isSubmitEventPopupOpen, setSubmitEventPopupOpen] = React.useState(false);

  function onSubmitEvent() {
    setSubmitEventPopupOpen(true);
  }

  function handleAddEventSubmit(data) {
    api.postEvent(data)
      .then((newEvent) => {
        setEvents([newEvent, ...events]);
        onSubmitEvent();
      })
      .catch((err) => console.log(err));
  }

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
          <Route path="/event/:id">
            <Event events={events} />
          </Route>
          <Route path="/create-event">
            <CreateEvent onAddEvent={handleAddEventSubmit} />
          </Route>
        </Switch>

      </main>
      <Footer />
      <PopupSubmitEvent isOpen={isSubmitEventPopupOpen} />
    </div>
  );
}

export default App;
