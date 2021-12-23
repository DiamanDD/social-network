import React from "react";
import "./App.css";
import {NavBar} from "./component/NavBar/NavBar";
import {Redirect, Route} from "react-router-dom";
import {News} from "./component/News/News";
import {Musics} from "./component/Musics/Musics";
import {Settings} from "./component/Settings/Settings";


import HeaderContainer from "./component/Header/HeaderContainer";
import {LoginContainer} from "./component/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialazedThunkCreator} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./component/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./component/Profile/ProfileContainer'));
const UserContainer = React.lazy(() => import('./component/Users/UserContainer'));


type mapDispatchToProps = {
    initialazedThunkCreator: () => void

}
type mapStateToPropsType = {
    initialaze: boolean
    iaAuth: boolean
}

class App extends React.Component<mapDispatchToProps & mapStateToPropsType> {
    componentDidMount() {
        this.props.initialazedThunkCreator()
    }

    render() {

        if (!this.props.initialaze) {

            return <Preloader/>
        }
        if (!this.props.iaAuth) {
            <Redirect to={"/profile/2"}/>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile/:usID?"}
                           render={withSuspense(ProfileContainer)
                           }/>
                    <Route
                        path={"/dialogs"}
                        render={() => {
                            return (
                                <React.Suspense fallback={<div>...Loading</div>}>
                                    <div>
                                        <DialogsContainer/>
                                    </div>
                                </React.Suspense>
                            )

                        }}/>
                    <Route
                        path={"/users"}
                        render={() => {
                            return (
                                <React.Suspense fallback={<div>...Loading</div>}>
                                    <div>
                                        <UserContainer/>
                                    </div>
                                </React.Suspense>
                            )


                        }}/>
                    <Route
                        path={"/login"}
                        render={() => <LoginContainer/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/musics"} component={Musics}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialaze: state.appReducer.initialaze,
        iaAuth: state.authReducer.isAuth
    }
}
export default compose(
    (connect(mapStateToProps, {initialazedThunkCreator})))
(App);
