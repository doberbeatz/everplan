import React from 'react'
import { Segment, Container } from 'semantic-ui-react'
import PostBrief from './PostBrief'

const PostList = ({posts}) => {
    return (
        <Segment vertical>
            <Container text>
                {posts.map((post, index) =>
                    <PostBrief {...post} />
                )}
            </Container>
        </Segment>
    )
};

export default PostList