import {AddPostType, PostsType, storeType, UpdPostType} from "../types/type";
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

export const store:storeType={
    _state:{
        profilePage: {
            profile: [
                {id: 1, userName: "Ivan"},
                {id: 2, userName: "Ivan2"},
                {id: 3, userName: "Ivan3"}
            ],

            message: [
                {id: 1, message: "hallo1"},
                {id: 2, message: "hallo2"},
                {id: 3, message: "hallo3"}
            ]


        },

        posts: [
            {id: 1, message: "Привет я Маша", likesCount: 12},
            {id: 2, message: "ПИВЕТ Привет", likesCount: 15},
            {id: 3, message: "куку", likesCount: 18},
            {id: 4, message: "ПИВЕТ Привет", likesCount: 15},
            {id: 5, message: "куку", likesCount: 18},
            {id: 6, message: "ПИВЕТ Привет", likesCount: 15},
            {id: 7, message: "куку", likesCount: 18}
        ],
        newPost: ""
    },
    _rerenderEntireThree(){
        console.log("rerender")
    },
    subscribe(observe:()=>void){
        this._rerenderEntireThree=observe
    },
    getState(){
        return this._state
    },
    dispatch(action){

        switch (action.type) {
            case "ADD_POST":
                const newpost: PostsType = {
                    id: new Date().getTime(),
                    message: this._state.newPost,
                    likesCount: 0
                }
                if (this._state.newPost) {
                    this._state.posts.push(newpost)
                    this._rerenderEntireThree()
                    this._state.newPost = ""
                }
                break
            case "UPDATE_POST":
                this._state.newPost = action.updText
                this._rerenderEntireThree()
                break
        }
    }

}


export const addPostActionCreator=()=>({type: ADD_POST} as const)


export const UpdPostActionCreator=(newtext:string)=>({
        type: UPDATE_POST,
        updText: (newtext)
    } as const)

