import { connect } from 'react-redux'
import PostList from "../components/PostList";

const PostListContainer = connect(
    (state) => {
        return {
            posts: [
                {
                    title: 'Test',
                    text: 'Text'
                }
            ]
        }
    }
)(PostList);

export default PostListContainer