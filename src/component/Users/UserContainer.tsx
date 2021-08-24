import {UserPropsType, Users} from "./Users"
import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";


type mapStateToProps = {
    user2: UserPropsType[]

}

type mapDispatchToProps = {
    setfollowStatus: (id: string) => void
    setUnfollowStatus: (id: string) => void
    setUsers: (users: UserPropsType[]) => void

}

export type USersPropsType = mapStateToProps & mapDispatchToProps

const mapStateToProps = (state: AppStateType): mapStateToProps =>({user2: state.userReducer.users})

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {

    return {
        setfollowStatus: (id: string) => {
            dispatch(followAC(id))
        },
        setUnfollowStatus: (id: string) => {
            dispatch(unFollowAC(id))

        },
        setUsers: (users: UserPropsType[]) => {
            dispatch(setUsersAC(users))
        }
    }

}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);