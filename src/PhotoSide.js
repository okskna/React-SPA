import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class PhotoSide extends Component {
    render() {
        return (
            <ul>
                <li><NavLink exact to = "/photo/a">사진 A</NavLink></li>
                <li><NavLink exact to = "/photo/b">사진 B</NavLink></li>
                <li><NavLink exact to = "/photo/c">사진 C</NavLink></li>
            </ul>
        );
    }
}

export default PhotoSide;
