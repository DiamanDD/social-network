import {ActionsType, PostsType} from "../types/type";

const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

export const addPost = () => ({type: ADD_POST} as const)
export const UpdPost = (newtext: string) => ({
    type: UPDATE_POST,
    updText: newtext
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
type initialStateType=typeof initialState

export const dialogsReducer = (state = initialState, action: ActionsType):initialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    newPost: state.profilePage.newPost
                }
            }
            const newpost: PostsType = {
                id: new Date().getTime(),
                message: state.profilePage.newPost,
                likesCount: 0
            }
            if (stateCopy.profilePage.newPost) {
                let stateCopy = {
                    ...state,
                    profilePage: {
                        ...state.profilePage,
                        posts: [newpost, ...state.profilePage.posts
                        ]
                    }
                }

                stateCopy.profilePage.newPost = ""
                return stateCopy
            }
            return stateCopy
        }
        case UPDATE_POST: {
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    newPost:action.updText
                }
            }
        }
        default:
            return state

    }
}