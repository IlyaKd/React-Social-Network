import React from 'react';
import Dialogs from './Dialogs';
import { actions, /*sendMessageActionCreator*/ } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(Dialogs);

// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: (newMessageBody) => {
//             dispatch(actions.sendMessageActionCreator(newMessageBody));
//         }
//     }
// }

// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect
// )(Dialogs);