import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./events/eventsDashboard/EventDashboard";
import NavBar from "./events/nav/NavFlat";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main' />
      <EventDashboard
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        selectEvent={handleSelectEvent}
        selectedEvent={selectedEvent}
        style={{ margin: 20 }}
      />
      <Container />
    </>
  );
}

export default App;
