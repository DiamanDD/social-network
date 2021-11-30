import {getUserThunkCreatorAT} from "./users-reducer";
import {autorizedApi, UserAPI} from "../Api/Api";
import {setProfileInfo} from "./profile-reducer";
import axios from "axios";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA";

type setUserDataPayloadAT={
    id:number |null,
    login:string |null,
    email:string |null,
    isAuth:boolean
}
export type setUserDataAT={
    type: typeof SET_USER_DATA,
    payload:setUserDataPayloadAT

}

export const setUserData = (id: number | null, login: string | null, email: string | null,isAuth:boolean):setUserDataAT => ({
    type: SET_USER_DATA,
    payload:{
        id,
        login,
        email,
        isAuth
    }
} as const)
type initialStateType=typeof initialState

const initialState = {
    id: null as number |null,
    email: null as string |null,
    login: null as string |null,
    isAuth: false
}

export const AuthMeThunkCreator = (): getUserThunkCreatorAT  => {

    return (dispatch) => {
        return  UserAPI.AuthMe().then(data => {

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

export const LoginThunkCreator = (login: string, password: string, rememberme: boolean, captcha: boolean):getUserThunkCreatorAT => {

    return (dispatch) => {

        autorizedApi.login(login, password, rememberme = false, captcha = true)
            .then((data) => {

                if (data.data.resultCode === 0) {

                    console.log(data.data.data)
                    dispatch(AuthMeThunkCreator())
                }
                else{


                    // @ts-ignore
                    dispatch(stopSubmit("login",{_error:data.data.messages[0]}))
                }
            })
    }
}
export const LogOutThunkCreator = (): getUserThunkCreatorAT => {

    return (dispatch) => {

          autorizedApi.ulogOut()
            .then((data) => {

                if (data.data.resultCode === 0) {

                    dispatch(setUserData(null, null, null,false));
                }
            })
    }
}

export const authReducer = (state: initialStateType = initialState, action: setUserDataAT ): initialStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            const copystate={ ...state,
            ...action.payload, isAuth: action.payload.isAuth}

            return {
                ...copystate
            }
        }
        default:
            return state
    }
}