import React from 'react';

import './App.css';
import {Header} from "./component/Header";
import {NavBar} from "./component/NavBar";
import {Profile} from "./component/Profile";


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
