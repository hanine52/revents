import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../api/sampleData";

function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  function handleUpdateevent(updatedEvent) {
    setEvents(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );
    selectEvent(null);
  }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10} style={{ padding: 50 }}>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6} style={{ padding: 50 }}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateevent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
export default EventDashboard;
