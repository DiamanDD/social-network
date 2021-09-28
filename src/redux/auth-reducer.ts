import {setUserDataAT} from "../types/type";
import {getUserThunkCreatorAT} from "./users-reducer";
import {UserAPI} from "../Api/Api";
import {setProfileInfo} from "./profile-reducer";
import axios from "axios";

const SET_USER_DATA = "SET_USER_DATA";


export const setUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    id,
    login,
    email
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

                dispatch(setUserData(id, login, email))
                UserId = String(UserId)

                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + UserId).then(response => {
                    if (response.data) {
                        dispatch(setProfileInfo(response.data))
                    }
                })


            }

        })

    }

}


export const authReducer = (state: AuthInitialStateType = initialState, action: setUserDataAT): AuthInitialStateType => {

    switch (action.type) {

        case SET_USER_DATA: {

            return {
                ...state,
                ...action, isAyth: true

            }
        }
        default:
            return state

    }
}