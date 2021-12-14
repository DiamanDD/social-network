import {ActionsType} from "../types/type";
import {UserPropsType} from "../component/Users/UserContainer";
import {UserAPI} from "../Api/Api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

// type
export type initialStateType = {
    users: UserPropsType[]
    totalUserCount: number
    countUsers: number
    currentPAge: number
    isFetching: boolean
    toggleFollowing: toggleFollowingType[]

}
type toggleFollowingType = string

export type getUserThunkCreatorAT = ThunkAction<void, AppStateType, unknown, ActionsType>
export type getStatusThunkCreatorAT = ThunkAction<void, AppStateType, unknown, ActionsType>
export type updStatusThunkCreatorAT = ThunkAction<void, AppStateType, unknown, ActionsType>
// state
const initialState: initialStateType = {
    users: [],
    totalUserCount: 0,
    countUsers: 25,
    currentPAge: 1,
    isFetching: false,
    toggleFollowing: [],

}

// action
export const setFollowStatus = (userId: string) => ({
    type: "SOCIAL_NETWORK/USER_REDUCER/FOLLOW",
    id: userId
} as const)
export const setUnfollowStatus = (userId: string) => {
    return {
        type: "SOCIAL_NETWORK/USER_REDUCER/UNFOLLOW",
        id: userId
    } as const
}
export const setUsers = (users: UserPropsType[]) => ({
    type: "SOCIAL_NETWORK/USER_REDUCER/SETUSERS",
    users
} as const)
export const setTotalUserCount = (totalCount: number) => ({
    type: "SOCIAL_NETWORK/USER_REDUCER/SETUSERTOTALCOUNTS",
    totalCount,
} as const)
export const setSelectedPage = (selectedPAge: number) => ({
    type: "SOCIAL_NETWORK/USER_REDUCER/SELECTEDPAGE",
    selectedPAge,
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: "SOCIAL_NETWORK/USER_REDUCER/TOGGLE_IS_FETCHING",
    isFetching
} as const)
export const setToggleFollowing = (userID: string, isFetching: boolean) => ({
    type: "SOCIAL_NETWORK/USER_REDUCER/TOGGLE_IS_FOLLOW",
    isFetching,
    userID
} as const)
// function
export const FollowingUnfollow = async (dispatch: Dispatch, UserId: string, apiMethod: (UserId: string) => any, actionCreator: any) => {
    dispatch(setToggleFollowing(UserId, true))
    const data = await apiMethod(UserId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(UserId))
    }
    dispatch(setToggleFollowing(UserId, false))
}

// Thunk

export const getUserThunkCreator = (countUsers: number, selectedPAge: number): getUserThunkCreatorAT => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await UserAPI.GetUsers(countUsers, selectedPAge)
    dispatch(setUsers((data.items)))
    dispatch(setTotalUserCount(data.totalCount))
    dispatch(toggleIsFetching(false))
}
export const SelectPageThunkCreator = (page: number, countUsers: number): getUserThunkCreatorAT => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setSelectedPage(page))
    const data = await UserAPI.GetUsers(countUsers, page)
    dispatch(setUsers((data.items)))
    dispatch(toggleIsFetching(false))

}
export const setToggleFollowingThunkCreator = (UserId: string): getUserThunkCreatorAT => async (dispatch) => {
    FollowingUnfollow(dispatch, UserId, UserAPI.UnFollowUser, setUnfollowStatus)

}
export const setToggleUnfollowingThunkCreator = (UserId: string): getUserThunkCreatorAT => async (dispatch) => {
    FollowingUnfollow(dispatch, UserId, UserAPI.FollowUsr, setFollowStatus)
}

// reducser

export const userReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SOCIAL_NETWORK/USER_REDUCER/FOLLOW": {
            return {
                ...state, users: [...state.users.map((us) => (us.id === action.id ? {...us, followed: true} : us))]
            }
        }
        case "SOCIAL_NETWORK/USER_REDUCER/UNFOLLOW": {
            return {
                ...state,
                users: [...state.users.map((us) => (us.id === action.id ? {...us, followed: false} : us))]
            }
        }
        case "SOCIAL_NETWORK/USER_REDUCER/SETUSERS":
            return {...state, users: action.users}
        case "SOCIAL_NETWORK/USER_REDUCER/SETUSERTOTALCOUNTS":
            return {
                ...state, totalUserCount: action.totalCount
            }
        case "SOCIAL_NETWORK/USER_REDUCER/SELECTEDPAGE":
            return {
                ...state, currentPAge: action.selectedPAge
            }
        case "SOCIAL_NETWORK/USER_REDUCER/TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "SOCIAL_NETWORK/USER_REDUCER/TOGGLE_IS_FOLLOW":
            return {
                ...state, toggleFollowing: action.isFetching
                    ? [...state.toggleFollowing, action.userID]
                    : state.toggleFollowing.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

