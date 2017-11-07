import React from 'react'
import { connect } from "react-redux";
import { Button, Form, Segment } from 'semantic-ui-react'
import { createEvent } from "../../redux/actions/eventActions";

const PostAddForm = ({ dispatch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createEvent({
            text: e.target.text.value
        }));
        e.target.text.value = '';
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.TextArea label='Text' name='text' placeholder='Tell us more about you...'/>
            <Button type='submit'>Add</Button>
        </Form>
    )
};

export default connect()(PostAddForm)