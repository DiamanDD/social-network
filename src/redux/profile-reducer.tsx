import {ActionsType, MessageType, profilePageTypeElevents} from "../types/type";

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";


export const UpdMessageActionCreator=(updMessage:string)=>({
    type: UPDATE_MESSAGE,
    updMessage:updMessage
} as const)

export const addNEwMessageActionCreator=()=>({type: ADD_MESSAGE} as const)
export const profileReducer = (state: profilePageTypeElevents, action: ActionsType) => {

    switch (action.type) {

        case UPDATE_MESSAGE:
            state.newMessage = action.updMessage

            return state
        case ADD_MESSAGE:
            const newMessagePost: MessageType = {
                id: new Date().getTime(),
                message: state.newMessage

            }
            if (state.newMessage) {
                state.message.push(newMessagePost)

                state.newMessage = ""
            }
            return state
        default:
            return state
    }
}
