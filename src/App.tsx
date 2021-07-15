import React from 'react';

import './App.css';
import {Header} from "./component/Header/Header";
import {NavBar} from "./component/NavBar/NavBar";
import {Profile} from "./component/Profile/Profile";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App;
