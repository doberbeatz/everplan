import React from 'react'
import { Feed } from 'semantic-ui-react'

const EventBrief = ({ text }) => {
    return (
        <Feed.Event>
            <Feed.Content>
                <Feed.Summary>
                    <Feed.User>Elliot Fu</Feed.User>
                    <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                    {text}
                </Feed.Extra>
            </Feed.Content>
        </Feed.Event>
    )
};

export default EventBrief