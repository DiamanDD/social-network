import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {userReducer} from "./users-reducer";


let rootReduser =combineReducers({
    dialogsReducer,
    profileReducer,
    userReducer,

} )

export type AppStateType =ReturnType<typeof rootReduser>

let store=createStore(rootReduser)

export  default store