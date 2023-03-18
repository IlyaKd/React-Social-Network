import { InferActionsTypes } from "./redux-store";

// const SEND_MESSAGE = 'SN/DIALOGS/SEND_MESSAGE';

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

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody;
            return { 
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
};

// type SendMessageActionCreatorType = {
//     type: typeof SEND_MESSAGE, 
//     newMessageBody: string
// }

// export const sendMessageActionCreator = (newMessageBody: string): SendMessageActionCreatorType => ({type: SEND_MESSAGE, newMessageBody});

export const actions = {
    sendMessageActionCreator: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>