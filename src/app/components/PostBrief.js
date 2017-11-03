import React from 'react'
import { Header, Button } from 'semantic-ui-react'

const PostBrief = ({title, text}) => {
    return (
        <div>
            <Header as='h3' style={{fontSize: '2em'}}>{title}</Header>
            <p style={{fontSize: '1.33em'}}>
                {text}
            </p>
            <Button as='a' size='large'>Read More</Button>
        </div>
    )
};

export default PostBrief