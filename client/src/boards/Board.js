import React from 'react';
import PostList from './PostList';
import Post from './Post';

const Board = ({match}) => {
    const params = match.params;
    let boardId = params.boardId;
    let postId = params.postId;

    console.log("boardId: ", boardId);
    console.log("postId: ", postId);
    console.log(match);

    let renderBoard;
    if (postId === undefined) {  // <PostList>
        renderBoard = <PostList boardId={boardId} />
    } else {    // <Post>
        renderBoard = <Post boardId={boardId} postId={postId} />
    }

    return <ul className='bodyarea'>{renderBoard}</ul>;
}

export default Board;