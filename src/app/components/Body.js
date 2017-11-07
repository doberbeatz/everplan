import React from 'react'
import { Segment, Container } from 'semantic-ui-react'

const Body = ({children}) => {
    return (
        <Segment vertical>
            <Container text>
                {children}
            </Container>
        </Segment>
    )
};

export default Body