import React from 'react';
import MyPosts, {MapPropsType, DispatchPropsType} from './MyPosts';
import { actions } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: (newPostText) => {
//             dispatch(actions.addPostActionCreator(newPostText));
//         }
//     }
// }

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;