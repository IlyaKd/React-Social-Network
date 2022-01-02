const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return { 
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;