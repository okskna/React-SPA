import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BoardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boards: null,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selBoardId !== this.props.selBoardId) {
            this.fetchTrans();
        }
    }

    componentDidMount() {
        this.fetchTrans();
    }

    fetchTrans = () => {
        console.log('selBoardId:', this.props.selBoardId);
        fetch('/board/' + this.props.selBoardId)
            .then(HttpRequestObject => HttpRequestObject.json())
            .then(jsonObject => this.setState({ boards: jsonObject, }))
            .catch(err => console.log(err));
    }

    handleClick = (item) => {
        let postId = item.postId;
        return () => this.props.onSelectPost(postId);
    }

    render() {
        const renderBoard = (this.state.boards !== null && this.state.boards.posts.length > 0) ?
            this.state.boards.posts.map((item, i) => {
                let path = '/board/' + this.state.boards.boardId + '/post/' + item.postId;
                return (
                    <li>
                        <NavLink key={i * 100} onClick={this.handleClick(item)} to={path}>
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

export default BoardList;