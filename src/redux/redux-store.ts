import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {userReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"


let rootReduser =combineReducers({
    dialogsReducer,
    profileReducer,
    userReducer,
    authReducer

} )

export type AppStateType =ReturnType<typeof rootReduser>

let store = createStore(rootReduser,applyMiddleware(thunkMiddleWare))

export  default store