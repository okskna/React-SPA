import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
    constructor(props) {
        super(props);
    }

    delete = (key, board) => {
        //게시판 삭제 기능
        console.log("This is deleteContent method.", key);
        this.props.deletepost(key, board);
    }

    render() {
        let post = this.props.post;
        let board = this.props.board;
        let newUrl = '/post/board' + board + '/new';

        return (
            <div>
                <h2>게시글 리스트</h2>
                {
                    post.map((item)=>{
                        let makeUrl = '/post/board' + board + '/' + item.key;
                        return (
                            <li key={item.key}>
                                <h4>
                                    <Link to={makeUrl}>{item.title}</Link>
                                </h4>
                                <div className="dateIp">
                                    등록일: {item.date} , IP: {item.ip}
                                </div>
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    return this.delete(item.key, board);
                                    }}>삭제</button>
                            </li>
                        );
                    })
                }
                
                <button><Link to={newUrl} className="newPost">글쓰기</Link></button>
            </div>
        );
    }
}

export default PostList;
