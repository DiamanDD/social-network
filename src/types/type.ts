// типизация

import {addNEwMessageActionCreator, UpdMessageActionCreator} from "../redux/profile-reducer";
import {addPostActionCreator, UpdPostActionCreator} from "../redux/dialogs-reducer";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MessageType = {
    id: number
    message: string
}

export type ProfileType = {
    id: number
    userName: string
}

export type profilePageTypeElevents = {
    profile: ProfileType[]
    message: MessageType[]
    newMessage:string

}


export type StateTypeElement = {
    profilePage: profilePageTypeElevents
    posts: PostsType[]
    newPost:string

}


export type StateType = {
    store: storeType
}

export type AddPostType=ReturnType<typeof addPostActionCreator>

export  type UpdPostType=ReturnType<typeof UpdPostActionCreator>

export  type UpMessageType=ReturnType<typeof UpdMessageActionCreator>

export type AddNewMessageType=ReturnType<typeof addNEwMessageActionCreator>

export type ActionsType=AddPostType | UpdPostType | UpMessageType | AddNewMessageType

export type storeType= {
    _state:StateTypeElement
    subscribe:(observe:()=>void)=>void
    _rerenderEntireThree:()=>void
    getState:()=>StateTypeElement
    dispatch:(action:ActionsType)=>void

}

