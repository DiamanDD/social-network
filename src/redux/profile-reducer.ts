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
    }
}
export const addNEwMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const profileReducer = (state = initialState, action: ActionsType) => {

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
                console.log(state, stateCopy)

            }
            return stateCopy
        }
        default:
            return state
    }
}
