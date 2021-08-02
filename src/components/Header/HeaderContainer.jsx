import React from 'react';
/*import axios from 'axios';*/
import Header from './Header';
import { connect } from 'react-redux';
import { /*setAuthUserData,*/ getAuthUserData } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();

        /*axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })*/
    }
    
    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {/*setAuthUserData,*/ getAuthUserData}) (HeaderContainer);