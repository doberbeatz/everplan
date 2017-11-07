import React from 'react'
import {connect} from "react-redux";
import EventBrief from '../components/EventBrief'

const EventList = ({ events }) => {
    return (
        <div>
            {events.map((event) =>
                <EventBrief key={event.id} {...event} />
            )}
        </div>
    )
};

export default connect(
    (state) => ({
        events: state.events
    })
)(EventList)