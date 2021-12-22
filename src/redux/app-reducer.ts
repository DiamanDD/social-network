import {AuthMeThunkCreator} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {ActionsType} from "../types/type";

// type
export type initializeSuccessAT = {
    type: "SOCIAL_NETWORK/APP_REDUCER/INITIALIZE_SUCCESS",
}
type initialStateType = typeof initialState
export type initialazedThunkCreatorAT = ThunkAction<void, AppStateType, unknown, ActionsType>

// state
const initialState = {
    initialaze: false
}

// action
export const initializeSuccess = (): initializeSuccessAT => ({
    type: "SOCIAL_NETWORK/APP_REDUCER/INITIALIZE_SUCCESS",
} as const)

// Thunk
export const initialazedThunkCreator = () => {
    return (dispatch: any) => {
        let promise = dispatch(AuthMeThunkCreator())
        promise.then(() => {
            dispatch(initializeSuccess())
        })
    }
}


// reduceer
export const appReducer = (state: initialStateType = initialState, action: initializeSuccessAT): initialStateType => {
    switch (action.type) {
        case "SOCIAL_NETWORK/APP_REDUCER/INITIALIZE_SUCCESS": {
            return {
                ...state, initialaze: true
            }
        }
        default:
            return state
    }
}