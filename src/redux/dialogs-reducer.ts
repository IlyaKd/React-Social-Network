const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Димыч'},
        {id: 1, name: 'Света'},
        {id: 1, name: 'Олег'},
        {id: 1, name: 'Андрей'},
        {id: 1, name: 'Аня'},
        {id: 1, name: 'Вася'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'How, are you?'}
    ] as Array<MessagesType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE, 
    newMessageBody: string
}

export const sendMessageActionCreator = (newMessageBody: string): SendMessageActionCreatorType => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;