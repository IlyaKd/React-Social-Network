import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../redux/redux-store';

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapPropsType);

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>

        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(
        mapStateToPropsForRedirect, {})
    (RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

// export const withAuthRedirect = (WrappedComponent: React.ComponentType<WCP>) => {

//     class RedirectComponent extends React.Component {
//         render() {
//             if (!this.props.isAuth) return <Redirect to='/login' />

//             return <WrappedComponent {...this.props} />
//         }
//     }

//     let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

//     return ConnectedAuthRedirectComponent;
// }