import {ActionsType, MessageType} from "../types/type";

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";


export const UpdMessageActionCreator = (updMessage: string) => ({
    type: UPDATE_MESSAGE,
    updMessage: updMessage
} as const)


const initialState = {
    dialogsPage: {
        profile: [
            {id: 1, userName: "Ivan"},
            {id: 2, userName: "Ivan2"},
            {id: 3, userName: "Ivan3"}
        ],

        message: [
            {id: 1, message: "hallo2222221"},
            {id: 2, message: "hallo2"},
            {id: 3, message: "hallo3"}
        ],
        newMessage: "5",
    }
}
export const addNEwMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const profileReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {

        case UPDATE_MESSAGE:
            state.dialogsPage.newMessage = action.updMessage

            return state
        case ADD_MESSAGE:
            const newMessagePost: MessageType = {
                id: new Date().getTime(),
                message: state.dialogsPage.newMessage

            }
            if (state.dialogsPage.newMessage) {
                state.dialogsPage.message.push(newMessagePost)

                state.dialogsPage.newMessage = ""
            }
            return state
        default:
            return state
    }
}
