import React from "react";
import "./App.css";
import {Header} from "./component/Header/Header";
import {NavBar} from "./component/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./component/News/News";
import {Musics} from "./component/Musics/Musics";
import {Settings} from "./component/Settings/Settings";

import {DialogsContainer} from "./component/Dialogs/DialogsContainer";
import {ProfileContainer} from "./component/Profile/ProfileContainer";
import {UserContainer} from "./component/Users/UserContainer";








const App:React.FC = () => {

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <ProfileContainer  />}/>
                    <Route
                        path={"/dialogs"}
                        render={() => <DialogsContainer />}/>
                    <Route
                        path={"/users"}
                        render={() => <UserContainer/>}/>
                    <Route path={"/news"}  component={News}/>
                    <Route path={"/musics"} component={Musics}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
