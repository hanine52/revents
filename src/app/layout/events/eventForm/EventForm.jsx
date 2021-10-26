import React from "react";
import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";


export default function EventForm({setFormOpen}) {
    return (
        <Segment clearing>
            <Header>Create new event</Header>
            <Form>
                <FormField>
                    <input type='text' placeholder='Event title' />
                </FormField>
                <FormField>
                    <input type='text' placeholder='Category' />
                </FormField>
                <FormField>
                    <input type='text' placeholder='Description' />
                </FormField>
                <FormField>
                    <input type='text' placeholder='City' />
                </FormField>
                <FormField>
                    <input type='text' placeholder='Venue' />
                </FormField>
                <FormField>
                    <input type='date' placeholder='Date' />
                </FormField>

                <Button type='submit' floated='right' positive content='Submit'></Button>
                <Button onClick={() => setFormOpen(false)} type='submit' floated='right' content='Cancel'></Button>
            </Form>
        </Segment>
    )
}