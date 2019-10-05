import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: null,
        };
    }

    componentDidMount() {
        this.getPostsData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.boardId !== this.props.boardId ||
            prevProps.postId !== this.props.postId) {
            this.fetchTrans();
        }
    }

    getPostsData = () => {
        let boardId = this.props.boardId;
        let postId = this.props.postId;

        fetch('/getBoard/' + boardId + '/post/' + postId)
            .then(HttpRequestObject => HttpRequestObject.json())
            .then(jsonObject => this.setState({ posts: jsonObject, }))
            .catch(err => console.log(err));
    }

    render() {
        const renderBoard = (this.state.posts !== null) ?
            (
                <div>
                    <h2>{this.state.posts.postTitle}</h2>
                    {this.state.posts.postDate}, {this.state.posts.postWriter} <br />
                    <p>{this.state.posts.postContents}</p>
                    <button>
                        <NavLink exact to={'/getBoard/' + this.props.boardId}>Prev</NavLink>
                    </button>
                </div>
            ) :
            <div>No post Loaded</div>
            ;
        return <div>{renderBoard}</div>;
    }
}

export default Post;
