import React/*,{ PureComponent }*/  from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {

    //let postElements = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount}/>);

    let postElements = [...props.posts]
                            .reverse()
                            .map( post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>);

    let NewPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={classes.posts}>
                { postElements }
            </div>   
        </div>
    );
});

/*class MyPosts extends PureComponent {

    /*shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state;
    }

    render() {
        let postElements = this.props.posts.map( post => <Post message={post.message} likeCount={post.likeCount}/>);

        let NewPostElement = React.createRef();

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
        }

        return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost} />
                <div className={classes.posts}>
                    { postElements }
                </div>   
            </div>
        );
    }
}*/

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText'
                       placeholder={'Post message'}
                       component={Textarea}
                       validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;