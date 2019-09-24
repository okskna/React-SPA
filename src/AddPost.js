import React, { Component } from 'react';

class AddPost extends Component {
    add = (object, board) => {
        this.props.post(object, board);
    }

    render() { 
        let conTitle,
            conDate,
            conWriter,
            conContents,
            conIp;
        let addObject = {
            "title": conTitle,
            "date": conDate,
            "ip": conIp,
            "writer": conWriter,
            "contents": conContents,
        };
        return (
            <div>
                <h2>글쓰기</h2>

                <form onSubmit={(e)=> {
                    e.preventDefault();
                    return this.add(addObject, this.props.board);
                    }} >
                    <input ref={(a) => {
                        addObject.title = a;
                        return this._inputElement = a;
                    }}
                        placeholder="Write Title" name="title"></input>
                    <input ref={(a) => {
                        addObject.date = a;
                        return this._inputElement = a;
                    }}
                        placeholder="Write Date" name="date"></input>
                    <input ref={(a) => {
                        addObject.ip = a;
                        return this._inputElement = a;
                    }}
                        placeholder="Write ip" name="ip"></input>
                    <input ref={(a) => {
                        addObject.writer = a;
                        return this._inputElement = a;
                    }}
                        placeholder="Write your name" name="writer"></input>
                    <input ref={(a) => {
                        addObject.contents = a;
                        return this._inputElement = a;
                    }}
                        placeholder="contents" name="contents"></input>

                    <button type="submit">제출</button>
                </form>
            </div>
        );
    }

}

export default AddPost;