import React, { Component } from 'react';

class Post extends Component {

    render() {
        let post = this.props.post;
        console.log("This is Post");
        return (
            <div key={post.key}>
                <h1 className="title">
                    {post.title}
                </h1>
                by {post.writer}
                <div>
                    Posted on <span className="date">{post.date}</span>
                </div>
                <p className="contents">
                    {post.contents}
                </p>
                <div className="ip">
                    IP: [{post.ip}]
                </div>
            </div>
        );
    }
}

export default Post;
