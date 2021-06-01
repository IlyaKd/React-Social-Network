import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 1, message: 'It is my first post', likeCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Димыч'},
                {id: 1, name: 'Света'},
                {id: 1, name: 'Олег'},
                {id: 1, name: 'Андрей'},
                {id: 1, name: 'Аня'},
                {id: 1, name: 'Вася'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'How, are you?'}
            ],
            newMessageBody: ''
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}

window.store = store;
export default store;