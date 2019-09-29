import React, { Component } from 'react';
import {
    Route,
    NavLink
} from "react-router-dom";

import AboutUs from './AboutUs';
import Post from './Post';
import PostBase from './PostBase';
import PostSide from './PostSide';
import AddPost from './AddPost';
import Photo from './Photo';
import PhotoSide from './PhotoSide';
import Login from './Login';

// import Article from "./articletest.json";
import PostList from './PostList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

        // console.log(this.state);
    }

    componentDidMount() {
        this.callApi()
        .then(res => {
            console.log(res);
            return this.setState(res);
        }).catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/articles');
        console.log('res: ', response);
        const body = await response.json();
        console.log('body: ', body);
        return body;
    }
        
    componentDidUpdate() {
        // console.log("did update state: ", this.state);
    }

    addPost = (conElement, board) => {
        let curBoard = String("board" + board);
        let boardArray = this.state[curBoard];        

        if (conElement.title.value !== "") {
            boardArray.unshift ({
                "id": String(Date.now()),
                "title": conElement.title.value,
                "writer": conElement.writer.value,
                "date": conElement.date.value,
                "ip": conElement.ip.value,
                "contents": conElement.contents.value,
            });
            
            // console.log("center: ", boardArray);
            this.setState ({
                [curBoard]: boardArray
            });
            conElement.title.value= "";
            conElement.date.value= "";
            conElement.ip.value= "";
            conElement.writer.value= "";
            conElement.contents.value= "";
        }

        this.forceUpdate(); // render update
    }


    deletePost = (key, board) => {
        let curBoard = String("board" + board);
        let filteredItems = this.state[curBoard].filter((list) => {
            return (list.id !== key);
        });

        // console.log(filteredItems);
        // console.log(curBoard);

        this.setState ({
            [curBoard]: filteredItems
        });
        this.forceUpdate(); // render update

        // console.log(this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveData(this.state);
    }

    render() {
        const title = "React Board";
        console.log("App rendering...");
        console.log(this.state);

        return (
            <div>
            <ul className="header">
                <h2>{title}</h2>
                <li><NavLink exact to="/">{"소개"}</NavLink></li>
                <li><NavLink to="/post">{"게시판"}</NavLink></li>
                <li><NavLink to="/photo">{"사진"}</NavLink></li>
                <li><NavLink to="/login">{"로그인"}</NavLink></li>
            </ul>
            <div className="main">
                <div className="sidebar">
                    <Route path="/post" component={PostSide} />
                    <Route path="/photo" component={PhotoSide} /> 
                </div>
                <div className="bodyarea">
                    <Route exact path="/" component={AboutUs} />
                    <Route exact path="/post" component={PostBase} />
                    
                    {    // 게시판 목록 라우팅
                        this.state['board1'] ? (
                        [...Array(4)].map((x, i) => {
                            i++;
                            let path = "/post/board" + i;
                            return (
                                <Route key={i*100} exact path={path} render={ 
                                    (props) => <PostList {...props} post={this.state['board' + i]} board={i} deletepost={this.deletePost}/> 
                                } />
                            );
                        // })
                        })) : ''
                    }

                    {   // 게시글 라우팅
                        this.state['board1'] ? (
                        [...Array(4)].map((x, i) => {
                            i++;
                            return this.state['board' + i].map((item)=>{
                                let j = item.id*1;
                                let myPath = "/post/board" + i + "/" + j;
                                return (
                                    <Route key={i*100 + j} path={myPath} render={ 
                                        (props) => <Post {...props} post={item}/>
                                    } />
                                );
                            });
                        // })
                        })) : ''
                    }


                    {   // 게시판 글쓰기 라우팅
                        this.state['board1'] ? (
                        [...Array(4)].map((x, i) => {
                            i++;
                            let path = "/post/board" + i + '/new';
                            return (
                                <Route key={i*1} path={path} render={ 
                                    (props) => <AddPost {...props} post={this.addPost} board={i}/> 
                                } />
                            );
                        // })
                        })) : ''
                    }

                    <Route path="/photo" component={Photo} />
                    <Route path="/login" component={Login} />
                </div>
                <div className="clear"></div>
            </div>
            <div className="footer">
                cdngmn014@gmail.com
            </div>
            </div>

        );
    }
}

export default App;