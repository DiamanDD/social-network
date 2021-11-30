import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {userReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";





let rootReducer =combineReducers({
    dialogsReducer,
    profileReducer,
    userReducer,
    authReducer,
    appReducer,
    form: formReducer


} )

export type AppStateType =ReturnType<typeof rootReducer>

let store = createStore(rootReducer,applyMiddleware(thunkMiddleWare))

 export  default store