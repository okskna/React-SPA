import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boardList: [
                //{url:'/board/hobby', name:'Hobby'},
                //{url:'/board2', name:'Work'},
            ],
        }
    }

    componentDidMount() {
        this.getBoardList();
    }

    getBoardList = () => {
        fetch('/boardList')
        .then(httpResultObject => httpResultObject.json())
        .then(jsonObject => {
            console.log(jsonObject);
            return this.setState({ boardList: jsonObject });
        });
    }

    handleClick = (item) => {
        let boardId = item.boardId;
        return () => this.props.onSelectBoard(boardId);
    }

    render() {
        const renderBoardList = this.state.boardList.length > 0 ?
            this.state.boardList.map((item, i) => {
                let path = '/getBoard/' + item.boardId;
                return (
                    <li>
                        <NavLink
                            key={i * 100}
                            onClick={this.handleClick(item)}
                            to={path}>
                            {item.boardName}
                        </NavLink>
                    </li>
                )
            }) 
            : <div>No Board Loaded</div>
        ;

        return (
            <ul className='sidebar'>
                <h2>게시판</h2>
                {renderBoardList}
            </ul>
        );
    }
}

export default SideBar;

