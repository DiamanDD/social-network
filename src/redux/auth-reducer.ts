import {setUserDataAT} from "../types/type";
import {getUserThunkCreatorAT} from "./users-reducer";
import {autorizedApi, UserAPI} from "../Api/Api";
import {setProfileInfo} from "./profile-reducer";
import axios from "axios";
import {Redirect} from "react-router-dom";


const SET_USER_DATA = "SET_USER_DATA";


export const setUserData = (id: number | null, login: string | null, email: string | null,isAyth:boolean) => ({
    type: SET_USER_DATA,
    id,
    login,
    email,
    isAyth
} as const)


const initialState: AuthInitialStateType = {
    id: null,
    email: null,
    login: null,
    isAyth: false
}

export type AuthInitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAyth: boolean
}

export const AuthMeThunkCreator = (UserId: string): getUserThunkCreatorAT => {

    return (dispatch) => {
        UserAPI.AuthMe().then(data => {
            if (data.resultCode === 0) {
                const {
                    id, login, email
                } = data.data
                dispatch(setUserData(id, login, email,true));



                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${String(id)}`).then(response => {
                    if (response.data) {
                        dispatch(setProfileInfo(response.data))
                    }
                })
            }
        })
    }

}

export const LoginThunkCreator = (login: string, password: string, rememberme: boolean, captcha: boolean): getUserThunkCreatorAT => {

    return (dispatch) => {
        console.log("")
        autorizedApi.login(login, password, rememberme = false, captcha = true)
            .then((data) => {
                console.log(data,data.data.resultCode)
                if (data.data.resultCode === 0) {
                    console.log(data.data.data.userId)
                    dispatch(AuthMeThunkCreator(data.data.data.userId))
                }
            })
    }
}
export const LogOutThunkCreator = (): getUserThunkCreatorAT => {

    return (dispatch) => {
        console.log("")
        autorizedApi.ulogOut()
            .then((data) => {

                if (data.data.resultCode === 0) {

                    dispatch(setUserData(null, null, null,false));
                }
            })
    }
}

export const authReducer = (state: AuthInitialStateType = initialState, action: setUserDataAT): AuthInitialStateType => {

    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action, isAyth: action.isAyth
            }
        }
        default:
            return state
    }
}