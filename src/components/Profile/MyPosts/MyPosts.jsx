import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let postElements = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount}/>);

    let NewPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = NewPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } 
                              ref={ NewPostElement } 
                              value={props.NewPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                { postElements }
            </div>   
        </div>
    );
}

export default MyPosts;