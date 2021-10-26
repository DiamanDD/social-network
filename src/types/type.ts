// типизация
import {
    addNewMessage,
    setProfileInfo,
    onChangeHangler,

    getProfileStatus,
    setProfileStatus
} from "../redux/profile-reducer";
import {addPost, UpdPost} from "../redux/dialogs-reducer";
import {
    setFollowStatus,
    setSelectedPage,
    setToggleFollowing,
    setTotalCountUser,
    setUnfollowStatus,
    setUsers,
    toggleIsFetching
} from "../redux/users-reducer";
import {setUserData} from "../redux/auth-reducer";

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

export  type UpMessageType = ReturnType<typeof onChangeHangler>

export type AddNewMessageType = ReturnType<typeof addNewMessage>

export type FollowUserHAndler = ReturnType<typeof setFollowStatus>

export type UnFollowUserHAndler = ReturnType<typeof setUnfollowStatus>

export type Setusers = ReturnType<typeof setUsers>
export type setTotalCountUsers = ReturnType<typeof setTotalCountUser>
export type selectedPAgeAT = ReturnType<typeof setSelectedPage>
export type toggleISFetchingAT = ReturnType<typeof toggleIsFetching>
export type toggleFollowingAT = ReturnType<typeof setToggleFollowing>
export type setProfileInfoAT = ReturnType<typeof setProfileInfo>
export type getProfileStatusAT = ReturnType<typeof getProfileStatus>
export type setProfileStatusAT = ReturnType<typeof setProfileStatus>
export type setUserDataAT = ReturnType<typeof setUserData>

export type ActionsType =
    AddPostType |
    UpdPostType |
    UpMessageType |
    AddNewMessageType |
    FollowUserHAndler |
    UnFollowUserHAndler|
    Setusers |
    setTotalCountUsers |
    selectedPAgeAT|
    toggleISFetchingAT |
    toggleFollowingAT |
    setProfileInfoAT |
    setUserDataAT |
    getProfileStatusAT |
    setProfileStatusAT



