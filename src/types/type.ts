// типизация

import {addNEwMessageActionCreator, UpdMessageActionCreator} from "../redux/profile-reducer";
import {addPostActionCreator, UpdPostActionCreator} from "../redux/dialogs-reducer";
import {followAC, setUsersAC, unFollowAC} from "../redux/users-reducer";

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
export type AddPostType=ReturnType<typeof addPostActionCreator>

export  type UpdPostType=ReturnType<typeof UpdPostActionCreator>

export  type UpMessageType=ReturnType<typeof UpdMessageActionCreator>

export type AddNewMessageType=ReturnType<typeof addNEwMessageActionCreator>

export type FollowUserHAndler=ReturnType<typeof followAC>

export type UnFollowUserHAndler=ReturnType<typeof unFollowAC>

export type Setusers=ReturnType<typeof setUsersAC>

export type ActionsType=AddPostType | UpdPostType | UpMessageType | AddNewMessageType |FollowUserHAndler |UnFollowUserHAndler |Setusers
