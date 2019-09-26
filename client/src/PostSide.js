import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class PostSide extends Component {
    render() {
        return (
            <ul>
                <h2>게시판</h2>
                <li><NavLink exact to = "/post/board1">게시판 A</NavLink></li>
                <li><NavLink exact to = "/post/board2">게시판 B</NavLink></li>
                <li><NavLink exact to = "/post/board3">게시판 C</NavLink></li>
                <li><NavLink exact to = "/post/board4">게시판 D</NavLink></li>
            </ul>
        );
    }
}

export default PostSide;

