import {ActionsType} from "../types/type";
import {UserPropsType} from "../component/Users/UserContainer";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS"
const SETTOTALCOUNTUSERS = "SETTOTALCOUNTUSERS"
const SELECTEDPAGE = "SELECTEDPAGE"
const TOGGLE_iS_FETCHING = "TOGGLE_iS_FETCHING"

const initialState: initialStateType = {
    users: [],
    totalCountUSer: 0,
    countUsers: 25,
    currentPAge: 1,
    isFetching: false

}

export type initialStateType = {
    users: UserPropsType[]
    totalCountUSer: number
    countUsers: number
    currentPAge: number
    isFetching: boolean
}
export const setFollowStatus = (userId: string) => ({
    type: FOLLOW,
    id: userId
} as const)
export const setUnfollowStatus = (userId: string) => {
    return {
        type: UNFOLLOW,
        id: userId
    } as const
}
export const setUsers = (users: UserPropsType[]) => ({
    type: SETUSERS,
    users
} as const)
export const setTotalCountUser = (totalCount: number) => ({
    type: SETTOTALCOUNTUSERS,
    totalCount,

} as const)
export const setSelectedPage = (selectedPAge: number) => ({

    type: SELECTEDPAGE,
    selectedPAge,

} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_iS_FETCHING,
    isFetching
} as const)

export const userReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case FOLLOW: {


            return {
                ...state, users: [...state.users.map((us) => (us.id === action.id ? {...us, followed: true} : us))]
            }
        }
        case UNFOLLOW: {


            return {
                ...state,
                users: [...state.users.map((us) => (us.id === action.id ? {...us, followed: false} : us))]
            }
        }
        case SETUSERS:
            return {...state, users: action.users}
        case SETTOTALCOUNTUSERS:
            return {
                ...state, totalCountUSer: action.totalCount

            }
        case SELECTEDPAGE:
            return {
                ...state, currentPAge: action.selectedPAge
            }
        case TOGGLE_iS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}

