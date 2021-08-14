import {ActionsType, PostsType} from "../types/type";

const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const UpdPostActionCreator = (newtext: string) => ({
    type: UPDATE_POST,
    updText: (newtext)
} as const)

const initialState = {
    profilePage: {
        posts: [
            {id: 1, message: "Привет я Маша", likesCount: 12},
            {id: 2, message: "ПИВЕТ Привет", likesCount: 15},
            {id: 3, message: "куку", likesCount: 18},
            {id: 4, message: "ПИВЕТ Привет", likesCount: 15},
            {id: 5, message: "куку", likesCount: 18},
            {id: 6, message: "ПИВЕТ Привет", likesCount: 15},
            {id: 7, message: "куку", likesCount: 18}
        ],
        newPost: "11111"
    }
}
export const dialogsReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            const newpost: PostsType = {
                id: new Date().getTime(),
                message: state.profilePage.newPost,
                likesCount: 0
            }
            if (state.profilePage.newPost) {
                state.profilePage.posts.push(newpost)
                state.profilePage.newPost = ""
            }
            return state
        case UPDATE_POST:
            state.profilePage.newPost = action.updText

            return state
        default:
            return state

    }
}