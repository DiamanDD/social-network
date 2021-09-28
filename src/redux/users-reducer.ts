import {ActionsType} from "../types/type";
import {UserPropsType} from "../component/Users/UserContainer";
import {UserAPI} from "../Api/Api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS"
const SETTOTALCOUNTUSERS = "SETTOTALCOUNTUSERS"
const SELECTEDPAGE = "SELECTEDPAGE"
const TOGGLE_iS_FETCHING = "TOGGLE_iS_FETCHING"
const TOGGLE_IS_FOLLOW = "TOGGLE_IS_FOLLOW"

const initialState: initialStateType = {
    users: [],
    totalCountUSer: 0,
    countUsers: 25,
    currentPAge: 1,
    isFetching: false,
    toggleFollowing: []

}

export type initialStateType = {
    users: UserPropsType[]
    totalCountUSer: number
    countUsers: number
    currentPAge: number
    isFetching: boolean
    toggleFollowing: toggleFollowingType[]
}
type toggleFollowingType = string

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
export const setToggleFollowing = (userID: string, isFetching: boolean) => ({
    type: TOGGLE_IS_FOLLOW,
    isFetching,
    userID
} as const)

export type getUserThunkCreatorAT = ThunkAction<void, AppStateType, unknown, ActionsType>

export const getUserThunkCreator = (countUsers: number, selectedPAge: number): getUserThunkCreatorAT => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true))

        UserAPI.GetUsers(countUsers, selectedPAge).then(data => {
            dispatch(setUsers((data.items)))
            dispatch(setTotalCountUser(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }

}
export const SelectPageThunkCreator = (page: number, countUsers: number): getUserThunkCreatorAT => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setSelectedPage(page))

        UserAPI.GetUsers(countUsers, page).then(data => {
            dispatch(setUsers((data.items)))
            dispatch(toggleIsFetching(false))


        })
    }

}
export const setToggleFollowingThunkCreator = (UserId: string): getUserThunkCreatorAT => {

    return (dispatch) => {

        dispatch(setToggleFollowing(UserId, true))
        UserAPI.UnFollowUser(UserId)
            .then(data => {
                if (data.resultCode === 0) {

                    dispatch(setUnfollowStatus(UserId))
                }
                dispatch(setToggleFollowing(UserId, false))
            })


    }
}
export const setToggleUnfollowingThunkCreator = (UserId: string): getUserThunkCreatorAT => {

    return (dispatch) => {

        dispatch(setToggleFollowing(UserId,true))
        UserAPI.FollowUsr(UserId).then(data => {
            if (data.resultCode === 0) {
                dispatch(setFollowStatus(UserId))
            }
            dispatch(setToggleFollowing(UserId,false))
        })


    }
}

export const userReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case FOLLOW: {
            debugger
            return {
                ...state, users: [...state.users.map((us) => (us.id === action.id ? {...us, followed: true} : us))]
            }
        }
        case UNFOLLOW: {
            debugger
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
        case TOGGLE_IS_FOLLOW:

            return {
                ...state, toggleFollowing: action.isFetching
                    ? [...state.toggleFollowing, action.userID]
                    : state.toggleFollowing.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

