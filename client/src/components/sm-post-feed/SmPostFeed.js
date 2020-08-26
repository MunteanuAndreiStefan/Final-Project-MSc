import React, {Component} from 'react';
import './SmPostFeed.css';
import SmPost from "../sm-feed/SmPost";

class SmPostFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : props.posts,
            users : props.users
        };
    }

    render() {

        let postList = this.state.posts.map(post => <SmPost post={post} users={this.state.users}></SmPost>);

        return (
            <div className={"sm-post-feed"}>
                {postList}
            </div>
        );
    }
}

export default SmPostFeed;
