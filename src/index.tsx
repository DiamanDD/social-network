import reportWebVitals from "./reportWebVitals";
import {store} from "./redux/State";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


let rerenderEntireThree = () => {
    ReactDOM.render(
        <React.StrictMode>

            <App store={store}/>
        </React.StrictMode>,
        document.getElementById("root")
    );
}
rerenderEntireThree()

store.subscribe(rerenderEntireThree)
// If you want to start measuring performance i your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
