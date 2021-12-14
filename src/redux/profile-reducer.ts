import {ActionsType, MessageType} from "../types/type";
import {profileApi, UserAPI} from "../Api/Api";
import {getStatusThunkCreatorAT, getUserThunkCreatorAT, updStatusThunkCreatorAT} from "./users-reducer";
// type
export type InitialStateType = typeof initialState

// sate
const initialState = {
    dialogsPage: {
        profile: [
            {id: 1, userName: "IvanIvanIvanIvan"},
            {id: 2, userName: "Ivan2"},
            {id: 3, userName: "Ivan3"}
        ],

        message: [
            {id: 1, message: "hallo2222221"},
            {id: 2, message: "hallo2"},
            {id: 3, message: "hallo3"}
        ],
    },
    profiliInfo: null,
    status: "",
}

// action
export const setProfileInfo = (profileinfo: any) => ({
    type: "SOCIAL_NETWORK/PROFILE_REDUCER/SET_PROFILE_INFO",
    profileinfo

} as const)
export const getProfileStatus = (status: any) => ({
    type: "SOCIAL_NETWORK/PROFILE_REDUCER/GET_PROFILE_STATUS",
    status

} as const)
export const setProfileStatus = (status: any) => ({
    type: "SOCIAL_NETWORK/PROFILE_REDUCER/SET_PROFILE_STATUS",
    status

} as const)
export const addNewMessage = (value: string) => ({type: "SOCIAL_NETWORK/PROFILE_REDUCER/ADD_MESSAGE", value} as const)

// thunk
export const setProfileInfoThunkCreator = (UserId: string): getUserThunkCreatorAT => {
    return async (dispatch) => {
        const data = await UserAPI.GetUser(UserId)
        if (data) {
            dispatch(setProfileInfo(data))
        }
    }
}
export const getStatusThunkCreator = (UserId: string): getStatusThunkCreatorAT => {
    return async (dispatch) => {
        const data = await profileApi.getStatus(UserId)
        if (data) {
            dispatch(setProfileStatus(data.data))
        }
    }
}
export const updStatusThunkCreator = (status: string): updStatusThunkCreatorAT => {
    return async (dispatch) => {
        const data = await profileApi.updStatus(status)
        if (data.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }

    }
}

// reducer
export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SOCIAL_NETWORK/PROFILE_REDUCER/SET_PROFILE_STATUS": {

            return {
                ...state, status: action.status
            }
        }
        case "SOCIAL_NETWORK/PROFILE_REDUCER/ADD_MESSAGE": {
            const newMessagePost: MessageType = {
                id: new Date().getTime(),
                message: action.value
            }
            return {
                ...state,
                dialogsPage: {
                    ...state.dialogsPage, message: [...state.dialogsPage.message, newMessagePost]
                }
            }
        }
        case "SOCIAL_NETWORK/PROFILE_REDUCER/SET_PROFILE_INFO":
            return {
                ...state, profiliInfo: action.profileinfo
            }
        default:
            return state
    }
}
