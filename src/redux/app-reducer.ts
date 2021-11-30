import {AuthMeThunkCreator} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {ActionsType} from "../types/type";


const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS";


export type initializeSuccessAT={
    type: typeof INITIALIZE_SUCCESS,


}

export const initializeSuccess = ():initializeSuccessAT => ({
    type: INITIALIZE_SUCCESS,

} as const)
type initialStateType=typeof initialState

const initialState = {
    initialaze:false
}


export type initialazedThunkCreatorAT = ThunkAction<void, AppStateType, unknown, ActionsType>
export const initialazedThunkCreator = ():initialazedThunkCreatorAT => {

    return (dispatch) => {

             let promise= dispatch(AuthMeThunkCreator())

                // @ts-ignore

                 promise.then(()=>{
                     // @ts-ignore
                     dispatch(initializeSuccess())
                 })

    }
}


export const appReducer = (state: initialStateType = initialState, action: initializeSuccessAT ): initialStateType => {

    switch (action.type) {

        case INITIALIZE_SUCCESS: {

            let copy={
                ...state, initialaze: true
            }

            return {...copy}

        }
        default:
            return state
    }
}