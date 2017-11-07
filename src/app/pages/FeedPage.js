import React from 'react'
import {Divider} from "semantic-ui-react";

import Header from "../components/Header";
import Body from "../components/Body";
import EventAddForm from "../containers/EventAddForm";
import EventList from "../containers/EventList";

const FeedPage = () => {
    return (
        <div>
            <Header/>
            <Body>
                <EventAddForm />
                <Divider horizontal />
                <EventList />
            </Body>
        </div>
    )
};

export default FeedPage