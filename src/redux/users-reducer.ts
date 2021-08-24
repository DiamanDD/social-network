import {ActionsType} from "../types/type";
import {UserPropsType} from "../component/Users/Users";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS"

const initialState: initialStateType = {
    users: []
}

export type initialStateType = {
    users: UserPropsType[]
}
export const followAC = (userId: string) => ({
    type: FOLLOW,
    id: userId
} as const)
export const unFollowAC = (userId: string) => {
    return {

        type: UNFOLLOW,
        id: userId
    } as const
}
export const setUsersAC = (users: UserPropsType[]) => ({
    type: SETUSERS,
    users
} as const)


export const userReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case FOLLOW: {



            return {
                ...state, users: [...state.users.map((us) => (us.id === action.id ? {...us, followStatus: true} : us))]
            }
        }
        case UNFOLLOW: {


            return {
                ...state,
                users: [...state.users.map((us) => (us.id === action.id ? {...us, followStatus: false} : us))]
            }
        }
        case SETUSERS:


            return {...state, users: [...state.users, ...action.users]}


        default:
            return state
    }
}

