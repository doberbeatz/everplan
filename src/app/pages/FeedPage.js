import React from 'react'
import NavbarTop from '../components/NavbarTop'
import PostListContainer from '../containers/PostListContainer'

const FeedPage = () => {
    return (
        <div>
            <NavbarTop/>
            <PostListContainer />
        </div>
    )
};

export default FeedPage