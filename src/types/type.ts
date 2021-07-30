// типизация

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

}


export type StateTypeElement = {
    profilePage: profilePageTypeElevents
    posts: PostsType[]

}


export type StateType = {
    State: StateTypeElement
}
