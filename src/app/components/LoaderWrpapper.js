import React from 'react'
import {Dimmer, Loader, Segment} from "semantic-ui-react";

const LoaderWrapper = ({ children }) => {
    return (
        <Segment>
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>

            {children}
        </Segment>
    )
};

export default LoaderWrapper