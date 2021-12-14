import React from "react";
import "./App.css";
import {NavBar} from "./component/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./component/News/News";
import {Musics} from "./component/Musics/Musics";
import {Settings} from "./component/Settings/Settings";

import DialogsContainer from "./component/Dialogs/DialogsContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import UserContainer from "./component/Users/UserContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import {LoginContainer} from "./component/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialazedThunkCreator} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./Common/Preloader/Preloader";


type mapDispatchToProps = {
    initialazedThunkCreator:()=>void

}
type mapStateToPropsType={
    initialaze:boolean
    iaAuth:boolean
}
class App extends React.Component<mapDispatchToProps&mapStateToPropsType> {
    componentDidMount() {
        this.props.initialazedThunkCreator()
    }
    render() {
        if (!this.props.initialaze){
           return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className={"app-wrapper-content"}>
                        <Route path={"/profile/:usID?"}
                               render={() => <ProfileContainer/>}/>
                        <Route
                            path={"/dialogs"}
                            render={() => <DialogsContainer/>}/>
                        <Route
                            path={"/users"}
                            render={() => <UserContainer/>}/>
                        <Route
                            path={"/login"}
                            render={() => <LoginContainer/>}/>
                        <Route path={"/news"} component={News}/>
                        <Route path={"/musics"} component={Musics}/>
                        <Route path={"/settings"} component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType=>{
    return {
        initialaze:state.appReducer.initialaze,
        iaAuth:state.authReducer.isAuth
    }
}
export default compose(

    (connect(mapStateToProps, {initialazedThunkCreator})))
    (App);
