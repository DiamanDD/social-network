import {ActionsType, PostsType, StateTypeElement} from "../types/type";

const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const UpdPostActionCreator = (newtext: string) => ({
    type: UPDATE_POST,
    updText: (newtext)
} as const)
export const dialogsReducer = (state: StateTypeElement, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newpost: PostsType = {
                id: new Date().getTime(),
                message: state.newPost,
                likesCount: 0
            }
            if (state.newPost) {
                state.posts.push(newpost)
                state.newPost = ""
            }
            return state
        case UPDATE_POST:
            state.newPost = action.updText

            return state
        default:
            return state

    }
}