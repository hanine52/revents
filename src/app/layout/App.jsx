import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from './events/eventsDashboard/EventDashboard';
import NavBar from './events/nav/NavFlat';

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main' />
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} style={{margin: 20 }}/>
      <Container />

    </>
  );
}

export default App;
