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

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    {/*<Route path={"/profile"} component={Profile}/>*/}
                    <Route path={"/profile"}
                           render={() => <Profile

                               posts={state.store._state.posts}
                               dispatch={state.store.dispatch.bind(state.store)}
                               newPost={state.store._state.newPost}

                           />}/>
                    <Route path={"/dialogs"} render={() => <Dialogs
                        profilePage={state.store._state.profilePage}/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/musics"} component={Musics}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
