import reportWebVitals from "./reportWebVitals";
import {State, subscribe} from "./redux/State";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {StateTypeElement} from "./types/type";



export const  rerenderEntireThree = (State:StateTypeElement) => {
    ReactDOM.render(
        <React.StrictMode>

            <App State={State}/>
        </React.StrictMode>,
        document.getElementById("root")
    );
}
rerenderEntireThree(State)
subscribe(rerenderEntireThree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
