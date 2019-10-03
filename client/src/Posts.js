import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: null,
        };
    }
    
    componentDidUpdate (prevProps) {
        console.log(prevProps.selPostId, this.props.selPostId);
        if (prevProps.selBoardId !== this.props.selBoardId ||
            prevProps.selPostId !== this.props.selPostId) {
        this.fetchTrans();
        }
    }
    
    componentDidMount () {
        this.fetchTrans();
    }

    fetchTrans = () => {
        console.log('selPostId:', this.props.selPostId);
        fetch('/board/' + this.props.selBoardId + '/post/' + this.props.selPostId)
        .then( HttpRequestObject => HttpRequestObject.json())
        .then( jsonObject => this.setState({ posts: jsonObject, }) )
        .catch( err => console.log(err));
    }

    handleClick = () => {
        
    }

    render() {
        if (this.state.posts !== null) {
            // console.log(this.state.posts, this.state.posts.length);
        }
        const renderBoard = (this.state.posts !== null) ? 
            (
                <li>
                    <button onClick={this.handleClick}>prev</button>
                    { this.state.posts.postTitle } <br></br>
                    { this.state.posts.postDate } { this.state.posts.postWriter }
                    { this.state.posts.postContents }
                </li>
            ) :
            <li>No post Loaded</li>
        ;
        return <ul className='bodyarea'>{renderBoard}</ul>;
    }
}

export default Posts;