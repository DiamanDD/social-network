import React, {FC} from "react";
import {UserPropsType} from "./UserContainer";
import {User} from "./User/User";
import {Paginator} from "../../Common/Paginator/Paginator";

type usersApiType = {
    selectedPAge: number
    totalUserCount: number
    countUsers: number
    users: UserPropsType[]
    selectPage: (p: number) => void
    setFollowStatus: (id: string) => void
    setUnfollowStatus: (id: string) => void
    toggleFollowing: string[]
    setToggleFollowing: (userId: string, isFetching: boolean) => void
    setToggleFollowingThunkCreator: any
    setToggleUnfollowingThunkCreator: any

}
export const Users: FC<usersApiType> = ({users, ...props}: usersApiType) => {

    return (
        <div>
            <div>
                <Paginator countUsers={props.countUsers} selectedPAge={props.selectedPAge}
                           totalUserCount={props.totalUserCount} selectPage={props.selectPage}/>
                <User
                    users={users}
                    toggleFollowing={props.toggleFollowing}
                    setToggleFollowingThunkCreator={props.setToggleFollowingThunkCreator}
                    setToggleUnfollowingThunkCreator={props.setToggleUnfollowingThunkCreator}
                />
            </div>


        </div>
    )

}

