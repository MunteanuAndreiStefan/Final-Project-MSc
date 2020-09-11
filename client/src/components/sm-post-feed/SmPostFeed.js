import React, {Component} from 'react';
import './SmPostFeed.css';
import SmPost from "../sm-feed/SmPost";

class SmPostFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : props.posts,
            users : props.users,
            currentUser: props.currentUser
        };
    }

    __handleDeletePost(event, postId) {
        console.log('__handleDeletePost', event, postId)
    }

    render() {
        let postList = this.props.posts.map(post => <SmPost key={post.id} post={post}
                                                            currentUser={this.state.currentUser}
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
