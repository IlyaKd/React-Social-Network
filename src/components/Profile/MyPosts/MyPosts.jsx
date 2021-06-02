import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount}/>);

    let NewPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } 
                              ref={ NewPostElement } 
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                { postElements }
            </div>   
        </div>
    );
}

export default MyPosts;