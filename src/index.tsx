import reportWebVitals from "./reportWebVitals";


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store, {reduserType} from "./redux/redux-store";



let rerenderEntireThree = (state:reduserType) => {


    ReactDOM.render(
        <React.StrictMode>

            <App store={state} dispatch={store.dispatch.bind(store)} store1={store}/>
        </React.StrictMode>,
        document.getElementById("root")
    );
}
rerenderEntireThree(store.getState())


store.subscribe(()=>{
    let state=store.getState()
    rerenderEntireThree(state)
})


// If you want to start measuring performance i your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
