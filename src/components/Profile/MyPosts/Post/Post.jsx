import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://avatarfiles.alphacoders.com/280/thumb-280560.png' />
            {props.message}
            <div>
                <span>like</span>
                {props.likeCount}
            </div>
        </div>
    );
}

export default Post;