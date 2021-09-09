// типизация
import {addNEwMessageActionCreator, setProfileInfo, UpdMessageActionCreator} from "../redux/profile-reducer";
import {addPost, UpdPost} from "../redux/dialogs-reducer";
import {
    setFollowStatus,
    setSelectedPage,
    setTotalCountUser,
    setUsers,
    toggleIsFetching,
    setUnfollowStatus
} from "../redux/users-reducer";

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
export type AddPostType = ReturnType<typeof addPost>

export  type UpdPostType = ReturnType<typeof UpdPost>

export  type UpMessageType = ReturnType<typeof UpdMessageActionCreator>

export type AddNewMessageType = ReturnType<typeof addNEwMessageActionCreator>

export type FollowUserHAndler = ReturnType<typeof setFollowStatus>

export type UnFollowUserHAndler = ReturnType<typeof setUnfollowStatus>

export type Setusers = ReturnType<typeof setUsers>
export type setTotalCountUsers = ReturnType<typeof setTotalCountUser>
export type selectedPAgeAT = ReturnType<typeof setSelectedPage>
export type toggleISFetchingAT = ReturnType<typeof toggleIsFetching>
export type setProfileInfoAT = ReturnType<typeof setProfileInfo>


export type ActionsType =
    AddPostType |
    UpdPostType |
    UpMessageType |
    AddNewMessageType |
    FollowUserHAndler |
    UnFollowUserHAndler |
    Setusers |
    setTotalCountUsers |
    selectedPAgeAT|
    toggleISFetchingAT |
    setProfileInfoAT

