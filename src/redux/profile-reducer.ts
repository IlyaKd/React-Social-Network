import { PostType, ProfileType, PhotosType } from './../types/types';
import { FormAction, stopSubmit } from 'redux-form';
import { profileAPI } from '../api/profile-api';
import { InferActionsTypes, BaseThunkType } from './redux-store';
// import { usersAPI, profileAPI } from '../api/api';

// const ADD_POST = 'SN/PROFILE/ADD-POST';
// const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE';
// const SET_STATUS = 'SN/PROFILE/SET_STATUS';
// const DELETE_POST = 'SN/PROFILE/DELETE_POST';
// const SAVE_PHOTO_SUCCESS = 'SN/PROFILE/SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It is my first post', likesCount: 11 }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/PROFILE/ADD-POST': {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'SN/PROFILE/SET_STATUS': {
            return {
                ...state,
                status: action.status,
            };
        }
        case 'SN/PROFILE/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case 'SN/PROFILE/DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)  
            }
        }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }
}

// type AddPostActionCreatorType = {
//     type: typeof ADD_POST
//     newPostText: string
// }
// export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType  => ({ type: ADD_POST, newPostText });

// type SetUserProfileType = {
//     type: typeof SET_USER_PROFILE
//     profile: ProfileType
// }
// export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile: profile});

// type SetStatusType = {
//     type: typeof SET_STATUS
//     status: string
// }
// export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});

// type DeletePostType = {
//     type: typeof DELETE_POST
//     postId: number
// }
// export const deletePost = (postId: number): DeletePostType => ({ type: DELETE_POST, postId })

// type SavePhotoSuccessType = {
//     type: typeof SAVE_PHOTO_SUCCESS
//     photos: PhotosType
// }
// export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const actions = {
    addPostActionCreator: (newPostText: string) => ({ type: 'SN/PROFILE/ADD-POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({ type: 'SN/PROFILE/DELETE_POST', postId } as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    // let response = await usersAPI.getProfile(userId); 
    // dispatch(setUserProfile(response.data));
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
};

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    // let response = await profileAPI.getStatus(userId);
    // dispatch(setStatus(response.data));
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    // let response = await profileAPI.updateStatus(status);
    // if (response.data.resultCode === 0) {
    //     dispatch(setStatus(status));
    // }
    try {
        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    } catch(error) {
        //
    }
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    // let response = await profileAPI.savePhoto(file);
    // if (response.data.resultCode === 0) {
    //     dispatch(savePhotoSuccess(response.data.data.photos));
    // }
    let data = await profileAPI.savePhoto(file);

    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    let userId = getState().auth.userId;
    // let response = await profileAPI.saveProfile(profile);
    // if (response.data.resultCode === 0) {
    //     dispatch(getUserProfile(userId));
    // } else {
    //     dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
    //     return Promise.reject(response.data.messages[0]);
    // }
    let data = await profileAPI.saveProfile(profile);
    
    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
};

export default profileReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>