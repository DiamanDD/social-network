import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getUserThunkCreator,
    SelectPageThunkCreator,
    setFollowStatus,
    setSelectedPage,
    setToggleFollowing,
    setToggleFollowingThunkCreator,
    setToggleUnfollowingThunkCreator,
    setTotalUserCount,
    setUnfollowStatus,
    setUsers,
    toggleIsFetching
} from "../../redux/users-reducer";

import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../Common/Preloader/Preloader";
import {compose} from "redux";
// types
type mapStateToPropsType = {
    users: UserPropsType[]
    totalUserCount: number,
    countUsers: number
    selectedPAge: number
    isFetching: boolean
    toggleFollowing:string[]
    isAuth:boolean
}
type mapDispatchToProps = {
    setFollowStatus: (id: string) => void
    setUnfollowStatus: (id: string) => void
    setUsers: (users: UserPropsType[]) => void
    setTotalUserCount: (totalCount: number) => void
    setSelectedPage: (selectedPAgeAT: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setToggleFollowing: (userId:string,isFetching:boolean) => void
    getUserThunkCreator: (countUsers: number, selectedPAge: number)=>void
    SelectPageThunkCreator:(page:number,countUsers:number)=>void
    setToggleFollowingThunkCreator:(UserId:string)=>void
    setToggleUnfollowingThunkCreator:(UserId:string)=>void

}
export type UserPropsType = {
    countUsers:number
    selectedPAge:number
    id: string
    photos: any
    followed: boolean
    name: string
    status: string
    countyName: string
    cityName: string
}

export class UsersC extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.countUsers, this.props.selectedPAge)
    }
    selectPage = (page: number) => {
        this.props.SelectPageThunkCreator(page,this.props.countUsers)
    }
    render() {
        return (
            <>
               {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Users
                            users={this.props.users}
                            totalUserCount={this.props.totalUserCount}
                            countUsers={this.props.countUsers}
                            selectedPAge={this.props.selectedPAge}
                            setFollowStatus={this.props.setFollowStatus}
                            setUnfollowStatus={this.props.setUnfollowStatus}
                            selectPage={this.selectPage}
                            setToggleFollowing={this.props.setToggleFollowing}
                            toggleFollowing={this.props.toggleFollowing}
                            setToggleFollowingThunkCreator={this.props.setToggleFollowingThunkCreator}
                            setToggleUnfollowingThunkCreator={this.props.setToggleUnfollowingThunkCreator}
                        />
                }
            </>
        )
    }
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToProps & UserPropsType
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    users: state.userReducer.users,
    totalUserCount: state.userReducer.totalUserCount,
    countUsers: state.userReducer.countUsers,
    selectedPAge: state.userReducer.currentPAge,
    isFetching: state.userReducer.isFetching,
    toggleFollowing:state.userReducer.toggleFollowing,
    isAuth:state.authReducer.isAuth
})

export default compose<React.ComponentType>(connect<mapStateToPropsType,mapDispatchToProps,UserPropsType,AppStateType>(mapStateToProps, {
    setFollowStatus,
    setUnfollowStatus,
    setUsers,
    setTotalUserCount,
    setSelectedPage,
    toggleIsFetching,
    setToggleFollowing,
    getUserThunkCreator,
    SelectPageThunkCreator,
    setToggleFollowingThunkCreator,
    setToggleUnfollowingThunkCreator,

}),
    // withAuthRedirectComponent
)(UsersC)