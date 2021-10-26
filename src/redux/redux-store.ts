import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {userReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'





let rootReduser =combineReducers({
    dialogsReducer,
    profileReducer,
    userReducer,
    authReducer,
    form: formReducer


} )

export type AppStateType =ReturnType<typeof rootReduser>

let store = createStore(rootReduser,applyMiddleware(thunkMiddleWare))

 export  default store