import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);

class App extends React.Component<MapPropsType & DispatchPropsType> {

  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occured");
    //console.error(promiseRejectionEvent);
  }

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      // <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Switch>
              <Route exact path='/'
                render={() => <Redirect to={"/profile"} />} />

              <Route path='/dialogs'
                render={() => <SuspendedDialogs />} />

              <Route path='/profile/:userId?'
                render={() => <SuspendedProfile />} />

              <Route path='/users'
                render={() => <UsersContainer pageTitle={"Самураи"} />} />

              <Route path='/login'
                render={() => <LoginPage />} />

              <Route path='*'
                render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
      // </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;