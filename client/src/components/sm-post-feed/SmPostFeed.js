import React, {Component} from 'react';
import './SmPostFeed.css';
import SmPost from "../sm-post/SmPost";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';

class SmPostFeed extends Component {
    constructor(props) {
        super(props);
        this.posts = [];
        this.state = {
            searchBox: {
                label: 'Search',
                value: ''
            }
        }
    }

    __handleDeletePost(event, postId) {
    }

    _handleSearchFieldChange = (event) => {
        let searchElement = event.target.value;
        let searchBox = this.state.searchBox;
        searchBox.value = searchElement;

        this.setState({
            searchBox: searchBox
        })
    }

    getMappedPosts = () => {
        if (this.posts && this.posts.length === 0 || this.posts.length !== this.props.posts.length) {
            this.posts = this.props.posts.map(post => <SmPost key={"sm-post-" + post.id}
                                                              post={post}
                                                              currentUser={this.props.currentUser}
                                                              handleDelete={this.__handleDeletePost}
                                                              users={this.props.users}></SmPost>)
        }
        let searchElement = this.state.searchBox.value.toLowerCase();
        return this.posts.filter(postDiv => postDiv.props.post.text.toLowerCase().includes(searchElement));
    }

    render() {
        let posts = this.getMappedPosts();
        let postsStats = `${this.props.posts !== undefined ? this.props.posts.length : 0} of ${this.props.totalPostCount} visible.`
        return (
            <div className={"sm-post-feed"}>
                <div className={"sm-line" + " search-element"}>
                    <div id={"search-field"}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <SearchIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label={this.state.searchBox.label}
                                    value={this.state.searchBox.value}
                                    onChange={this._handleSearchFieldChange}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={"sm-posts-statistics"}>
                        {postsStats}
                    </div>
                </div>

                {posts}
            </div>
        );
    }
}

export default SmPostFeed;
