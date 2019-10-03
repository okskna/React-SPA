import React, { Component } from 'react';
import { NavLink, Route } from "react-router-dom";

import SideBar from './SideBar';
import BoardList from './BoardList';
import Posts from './Posts';

// import { post } from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selBoardId: null,
        };
    }

    render() {
        console.log("App rendering...");
        console.log(this.state);

        return (
            <div>
                <Header />
                {/* <Main setfun={ selBoardId => this.setState({selBoardId})} /> */}
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
            selPostId: null,
        };
    }

    render() {
        return (
            <div>
                <SideBar
                    onSelectBoard={selBoardId => this.setState({ selBoardId })} />
                <Route exact path={'/boardList'} render={() => <div>Main Banner</div>} />
                <Route exact path={'/board/:boardid'} render={
                    (props) => <BoardList {...props} selBoardId={this.state.selBoardId} onSelectPost={selPostId => this.setState({ selPostId })} />
                } />
                <Route path={'/board/:boardid/post'} render={
                    (props) => <Posts {...props} selBoardId={this.state.selBoardId} selPostId={this.state.selPostId} />
                } />
                {/* {
                    this.state.userPage === null ?
                        <div> Main Banner </div>
                        : (
                            this.state.selPostId === null ?
                                <BoardList selBoardId={this.state.selBoardId} onSelectPost={selPostId => this.setState({ selPostId })} />
                                : <Posts selBoardId={this.state.selBoardId} selPostId={this.state.selPostId} />
                        )
                } */}

                <div className="clear" />
            </div>
        )
    }
}

// q1. How to get 'this.state' from App component to Main component?
//      1-1. <Main myProps={this.state} />
//      1-2. Make a class component not function component , and use Main.state
// q2. How to operate onSelectBoard?


// const Contents = () => { return (
//     <div className="bodyarea">
//         <Route exact path="/main" component={AboutUs} />
//         <Route exact path="/boardList" component={PostBase} />

//         {    // 게시판 목록 라우팅
//             this.state['board1'] ? (
//             [...Array(4)].map((x, i) => {
//                 i++;
//                 let path = "/post/board/b0" + i;
//                 return (
//                     <Route key={i*100} exact path={path} render={ 
//                         (props) => <PostList {...props} post={this.state['board' + i]} board={i} deletepost={this.deletePost}/> 
//                     } />
//                 );
//             // })
//             })) : ''
//         }

//         {   // 게시글 라우팅
//             this.state['board1'] ? (
//             [...Array(4)].map((x, i) => {
//                 i++;
//                 return this.state['board' + i].map((item)=>{
//                     let j = item.id*1;
//                     let myPath = "/postList/board" + i + "/" + j;
//                     return (
//                         <Route key={i*100 + j} path={myPath} render={ 
//                             (props) => <Post {...props} post={item}/>
//                         } />
//                     );
//                 });
//             // })
//             })) : ''
//         }


//         {   // 게시판 글쓰기 라우팅
//             this.state['board1'] ? (
//             [...Array(4)].map((x, i) => {
//                 i++;
//                 let path = "/post/board" + i + '/new';
//                 return (
//                     <Route key={i*1} path={path} render={ 
//                         (props) => <AddPost {...props} post={this.addPost} board={i}/> 
//                     } />
//                 );
//             // })
//             })) : ''
//         }

//         <Route path="/photo" component={Photo} />
//         <Route path="/login" component={Login} />
//     </div>
// )}

const Footer = () => {
    return (
        <div className="footer">
            cdngmn014@gmail.com
    </div>
    )
}

export default App;






/*
    callApi = async () => {
        const response = await fetch('/main');
        console.log('res: ', response);
        const body = await response.json();
        console.log('body: ', body);
        return body;
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

            // const formData = new FormData();
            // formData.append('title', conElement.title.value);
            // formData.append('ip', conElement.ip.value);
            // formData.append('datee', conElement.date.value);
            // formData.append('writer', conElement.writer.value);
            // formData.append('contents', conElement.contents.value);

            // const url = '/api/articles';
            // const config = {
            //     headers: {
            //         'content-type': 'multipart/form-data'
            //     }
            // }

            // post(url, formData, config);

            conElement.title.value= "";
            conElement.date.value= "";
            conElement.ip.value= "";
            conElement.writer.value= "";
            conElement.contents.value= "";
        }
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
*/