import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    setFollowStatus,
    setSelectedPage,
    setTotalCountUser,
    setUnfollowStatus,
    setUsers,
    toggleIsFetching
} from "../../redux/users-reducer";

import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../Common/Preloader/Preloader";

type mapStateToPropsType = {
    user2: UserPropsType[]
    totalCountUSer: number,
    countUsers: number
    selectedPAge: number
    isFetching: boolean
}
type mapDispatchToProps = {
    setFollowStatus: (id: string) => void
    setUnfollowStatus: (id: string) => void
    setUsers: (users: UserPropsType[]) => void
    setTotalCountUser: (totalCount: number) => void
    setSelectedPage: (selectedPAgeAT: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UserPropsType = {
    id: string
    photos: any
    followed: boolean
    name: string
    status: string
    countyName: string
    cityName: string


}

export class UsersC extends React.Component<USersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsers}&page=${this.props.selectedPAge}`).then(response => {
            this.props.setUsers((response.data.items))
            this.props.setTotalCountUser(response.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    selectPage = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setSelectedPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsers}&page=${p}`).then(response => {
            this.props.setUsers((response.data.items))
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Users
                            user2={this.props.user2}
                            totalCountUSer={this.props.totalCountUSer}
                            countUsers={this.props.countUsers}
                            selectedPAge={this.props.selectedPAge}
                            setfollowStatus={this.props.setFollowStatus}
                            setUnfollowStatus={this.props.setUnfollowStatus}
                            selectPage={this.selectPage}
                        />
                }
            </>
        )
    }
}

export type USersPropsType = mapStateToPropsType & mapDispatchToProps
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    user2: state.userReducer.users,
    totalCountUSer: state.userReducer.totalCountUSer,
    countUsers: state.userReducer.countUsers,
    selectedPAge: state.userReducer.currentPAge,
    isFetching: state.userReducer.isFetching

})
export const UserContainer = connect(mapStateToProps, {
    setFollowStatus,
    setUnfollowStatus,
    setUsers,
    setTotalCountUser,
    setSelectedPage,
    toggleIsFetching
})(UsersC);