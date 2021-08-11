import React from "react";

import "./App.css";
import {Header} from "./component/Header/Header";
import {NavBar} from "./component/NavBar/NavBar";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";

import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./component/News/News";
import {Musics} from "./component/Musics/Musics";
import {Settings} from "./component/Settings/Settings";
import {StateType} from "./types/type";


const App: React.FC<StateType> = (state) => {

    const {_state, dispatch} = state.store

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>

                    <Route path={"/profile"}
                           render={() => <Profile
                               posts={_state.posts}
                               dispatch={dispatch.bind(state.store)}
                               newPost={_state.newPost}

                           />}/>
                    <Route path={"/dialogs"} render={() => <Dialogs
                        profilePage={_state.profilePage} dispatch={dispatch.bind(state.store)}/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/musics"} component={Musics}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
