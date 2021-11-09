import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HomePage from "../../features/Home/HomePage";
import EventDetailedPage from "./events/EventDetailed/EventDetailedPage";
import EventForm from "./events/eventForm/EventForm";
import EventDashboard from "./events/eventsDashboard/EventDashboard";
import NavBar from "./events/nav/NavBar";

function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;

/**      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main' />
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/events' component={EventDashboard}></Route>
      <Route path='/events/:id' component={EventDetailedPage}></Route>
      <Route path='/createEvent' component={EventForm}></Route>

      <Container />
    </>
  ); */
