import {ActionsType, PostsType} from "../types/type";


// type
type postType = {
    id: number
    message: string
    likesCount: number
}
type initialStateType = typeof initialState
// state
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
        ] as postType[],
    }
}

// action
export const addPost = (value: string) => ({type: "SOCIAL_NETWORK/DIALOGS_REDUCER/ADD_POST", value} as const)

// reducer
export const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SOCIAL_NETWORK/DIALOGS_REDUCER/ADD_POST": {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.value,
                likesCount: 0
            }
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    posts: [newPost, ...state.profilePage.posts
                    ]
                }
            }
        }
        default:
            return state
    }
}