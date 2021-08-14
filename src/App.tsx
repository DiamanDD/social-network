import React from "react";
import "./App.css";
import {Header} from "./component/Header/Header";
import {NavBar} from "./component/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./component/News/News";
import {Musics} from "./component/Musics/Musics";
import {Settings} from "./component/Settings/Settings";
import {AppStateType} from "./types/type";
import {DialogsContainer} from "./component/Dialogs/DialogsContainer";
import {ProfileContainer} from "./component/Profile/ProfileContainer";


const App: React.FC<AppStateType> = (state) => {

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <ProfileContainer store={state.store1} />}/>
                    <Route
                        path={"/dialogs"}
                        render={() => <DialogsContainer store={state.store1}
                    />}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/musics"} component={Musics}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
