import React, {Component} from 'react';
import './SmPostFeed.css';
import SmPost from "../sm-feed/SmPost";

class SmPostFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : props.posts,
            users : props.users,
            current_user_id: props.current_user_id
        };
    }

    __handleDeletePost(event, postId) {
        console.log('__handleDeletePost', event, postId)
    }

    render() {

        let postList = this.state.posts.map(post => <SmPost key={post.id} post={post}
                                                            current_user_id={this.state.current_user_id}
                                                            handleDelete={this.__handleDeletePost}
                                                            users={this.state.users}></SmPost>);

        return (
            <div className={"sm-post-feed"}>
                {postList}
            </div>
        );
    }
}

export default SmPostFeed;