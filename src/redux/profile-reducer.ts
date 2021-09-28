import {ActionsType, MessageType} from "../types/type";
import {UserAPI} from "../Api/Api";
import {getUserThunkCreatorAT} from "./users-reducer";

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SET_PROFILE_INFO = "SET_PROFILE_INFO"

export const onChangeHangler = (updMessage: string) => ({
    type: UPDATE_MESSAGE,
    updMessage: updMessage
} as const)
export const setProfileInfo = (profileinfo: any) => ({
    type: SET_PROFILE_INFO,
    profileinfo

} as const)

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
        newMessage: "5",
    },
    profiliInfo: null
}

type InitialStateType = typeof initialState


export const addNewMessage = () => ({type: ADD_MESSAGE} as const)
export const setProfileInfoThunkCreator=(UserId:string):getUserThunkCreatorAT=>{

    return        (dispatch)=>{

        UserAPI.GetUser(UserId)
            .then(data => {
                if (data) {
                    dispatch(setProfileInfo(data))
                }
            })
    }

}
export const profileReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        case UPDATE_MESSAGE: {
            debugger
            return {
                ...state,
                dialogsPage: {
                    ...state.dialogsPage,
                    newMessage: action.updMessage,
                }
            }
        }
        case ADD_MESSAGE: {
            let stateCopy = {
                ...state,
                dialogsPage: {
                    ...state.dialogsPage,
                    newMessage: state.dialogsPage.newMessage
                }
            }
            const newMessagePost: MessageType = {
                id: new Date().getTime(),
                message: stateCopy.dialogsPage.newMessage

            }


            if (stateCopy.dialogsPage.newMessage) {
                stateCopy = {
                    ...state,
                    dialogsPage: {
                        ...state.dialogsPage, message: [...state.dialogsPage.message, newMessagePost]
                    }
                }
                stateCopy.dialogsPage.newMessage = ""

            }

            return stateCopy
        }
        case SET_PROFILE_INFO:

            return {
                ...state, profiliInfo: action.profileinfo
            }
        default:
            return state
    }
}
