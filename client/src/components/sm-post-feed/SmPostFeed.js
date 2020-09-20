import React, {Component} from 'react';
import './SmPostFeed.css';
import SmPost from "../sm-feed/SmPost";

class SmPostFeed extends Component {
    constructor(props) {
        super(props);
    }

    __handleDeletePost(event, postId) {
        console.log('__handleDeletePost', event, postId)
    }

    render() {
        let postList = this.props.posts.map(post => <SmPost key={"sm-post-" + post.id}
                                                            post={post}
                                                            currentUser={this.props.currentUser}
                                                            handleDelete={this.__handleDeletePost}
                                                            users={this.props.users}></SmPost>);

        return (
            <div className={"sm-post-feed"}>
                {postList}
            </div>
        );
    }
}

export default SmPostFeed;
