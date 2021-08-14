import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";


let redusers =combineReducers({
    dialogsReducer,
    profileReducer

} )

export type reduserType=ReturnType<typeof redusers>
export type reduserTypeAll=ReturnType<typeof combineReducers>
let store=createStore(redusers)

export  default store