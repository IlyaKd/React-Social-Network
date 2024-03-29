import React from 'react';
import classes from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://avatarfiles.alphacoders.com/280/thumb-280560.png' />
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    );
}

export default Post;