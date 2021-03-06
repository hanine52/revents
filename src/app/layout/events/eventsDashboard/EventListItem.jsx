import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from 'react-router-dom';


export default function EventListItem({ event, selectEvent, deleteEvent }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />

            <Item.Content>
              <Item.Header as='a'>{event.title}</Item.Header>
              <Item.Description>{event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' />
          {event.date}
          <Icon name='marker' />
          {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button onClick={() => deleteEvent(event.id)} color='red' floated='right'>
          Delete
        </Button>
        <Button as={Link} to={`/events/${event.id}`} color='teal' floated='right'>
          View
        </Button>
      </Segment>
    </Segment.Group>
  );
}
