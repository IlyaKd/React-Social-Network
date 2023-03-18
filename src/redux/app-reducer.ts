import { InferActionsTypes } from './redux-store';
import { getAuthUserData } from './auth-reducer'

// const INITIALIZED_SUCCESS = 'SN/APP/INITIALIZED_SUCCESS'

// export type InitialStateType = {
//     initialized: boolean
// }

// let initialState: InitialStateType  = {
//     initialized: false
// };

let initialState  = {
    initialized: false
};

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

// type InitializedSuccessActionType = {
//     type: typeof INITIALIZED_SUCCESS
// }

// export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            // dispatch(initializedSuccess());
            dispatch(actions.initializedSuccess());
        });
}

export default appReducer;