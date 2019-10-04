import React, { Component } from 'react';
import { NavLink, Route, Switch } from "react-router-dom";

import SideBar from './boards/SideBar';
import Board from './boards/Board';
// import NewPost from './boards/NewPost';

// import { post } from 'axios';

class App extends Component {
    render() {
        console.log("App rendering...");
        console.log(this.state);

        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

const Header = () => {
    return (
        <ul className="header">
            <h2>{"React Board"}</h2>
            <li><NavLink exact to="/main">{"소개"}</NavLink></li>
            <li><NavLink to="/boardList">{"게시판"}</NavLink></li>
            <li><NavLink to="/photoList">{"사진"}</NavLink></li>
            <li><NavLink to="/login">{"로그인"}</NavLink></li>
        </ul>
    )
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selBoardId: null,
            // selPostId: null,
        };
    }

    render() {
        return (
            <div>
                <SideBar
                    onSelectBoard={selBoardId => this.setState({ selBoardId })} />
                <RoutedMainContents />
                <div className="clear" />
            </div>
        )
    }
}

const RoutedMainContents = () => {
    return (
        <div>
            <Switch>
                <Route
                    path={'/getBoard/:boardId/post/:postId'}    // if postId is null -> <PostList>
                    // elif -> <Post>
                    render={(props) =>
                        <Board
                            {...props}
                        />
                    }
                />
                <Route
                    path={'/getBoard/:boardId'}
                    render={(props) =>
                        <Board
                            {...props}
                        />
                    }
                />
            </Switch>

            {/* server api: [post] /post/, {....} -> node.js */}
            {/* <Route
                path={'/writePost/:boardId'}
                render={(props) =>
                    <NewPost
                        {...props}
                    />
                }
            /> */}


            {
                //     {/*server api : [put] /post {...} */ } -> node.js
                //     < Route 
                //         path={'/editPost/:boardId/:postId'}
                // render={(props) =>
                //     <EditPost
                //         {...props}
                //     // selBoardId={this.state.selBoardId} 
                //     />
                // }
                // />
            }
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            cdngmn014@gmail.com
        </div>
    )
}

export default App;