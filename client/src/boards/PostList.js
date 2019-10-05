import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boards: null,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.boardId !== this.props.boardId) {
            this.getBoardData();
        }
    }

    componentDidMount() {
        this.getBoardData();
    }

    getBoardData = () => {
        // console.log('selBoardId:', this.props.selBoardId);
        // fetch('/getBoard/' + this.props.selBoardId)
        let boardId = this.props.boardId;
        fetch('/getBoard/' + boardId)
            .then(HttpRequestObject => HttpRequestObject.json()) //jw, 변수의 시작은 소문자 (H->h)
            // .then(jsonObject => this.setState({ boards: jsonObject, }))
            .then(jsonObject => {
                console.log(jsonObject);
                this.setState({ boards: jsonObject, });
            })
            .catch(err => console.log(err));
    }

    render() {
        let boardId = this.props.boardId;

        const renderBoard = 
            (this.state.boards !== null && this.state.boards.posts.length > 0) ? //jw, indentation
                this.state.boards.posts.map((item, i) => {
                    let path = '/getBoard/' + boardId + '/post/' + item.postId;
                    return (
                        <li>
                            <NavLink key={i * 100} to={path}>
                                {item.postTitle}
                            </NavLink> <br></br>
                            {item.postDate} {item.postWriter}
                        </li>
                    )
                }) :
                <li>No post Loaded</li>
                ;
        return <ul className='bodyarea'>{renderBoard}</ul>;
    }
}

export default PostList;