import {getUserThunkCreatorAT} from "./users-reducer";
import {autorizedApi, UserAPI} from "../Api/Api";
import {setProfileInfo} from "./profile-reducer";
import axios from "axios";
import {stopSubmit} from "redux-form";

// type
type setUserDataPayloadAT = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}
export type setUserDataAT = {
    type: "SOCIAL_NETWORK/AUTH_REDUCER/SET_USER_DATA",
    payload: setUserDataPayloadAT
}
type initialStateType = typeof initialState

// state
const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

// action
export const setUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setUserDataAT => ({
    type: "SOCIAL_NETWORK/AUTH_REDUCER/SET_USER_DATA",
    payload: {
        id,
        login,
        email,
        isAuth
    }
} as const)


// Thunk
export const AuthMeThunkCreator = (): getUserThunkCreatorAT => {
    return (dispatch) => {
        return (
            UserAPI.AuthMe()
                .then(data => {

                    if (data.resultCode === 0) {
                        const {
                            id, login, email
                        } = data.data
                        dispatch(setUserData(id, login, email, true));
                        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${String(id)}`).then(response => {
                            if (response.data) {
                                dispatch(setProfileInfo(response.data))
                            }
                        })
                    }
                }))
    }

}
export const LoginThunkCreator = (login: string, password: string, rememberme: boolean, captcha: boolean): getUserThunkCreatorAT => {

    return async (dispatch) => {

        const data = await autorizedApi.login(login, password, rememberme = false, captcha = true)
        if (data.data.resultCode === 0) {
            dispatch(AuthMeThunkCreator())
        } else {
            // @ts-ignore
            dispatch(stopSubmit("login", {_error: data.data.messages[0]}))
        }

    }
}
export const LogOutThunkCreator = (): getUserThunkCreatorAT => {
    return async (dispatch) => {
        const data = await autorizedApi.ulogOut()
        if (data.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));

        }
    }
}

// reducer
export const authReducer = (state: initialStateType = initialState, action: setUserDataAT): initialStateType => {
    switch (action.type) {
        case "SOCIAL_NETWORK/AUTH_REDUCER/SET_USER_DATA": {
            const copystate = {
                ...state,
                ...action.payload, isAuth: action.payload.isAuth
            }
            return {
                ...copystate
            }
        }
        default:
            return state
    }
}