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
export const Users: FC<usersApiType> = ({
                                            users,
                                            countUsers,
                                            selectPage,
                                            totalUserCount,
                                            selectedPAge,
                                            toggleFollowing,
                                            setToggleFollowingThunkCreator,
                                            setToggleUnfollowingThunkCreator,
                                            ...props
                                        }: usersApiType) => {

    return (
        <div>
            <div>
                <Paginator countUsers={countUsers} selectedPAge={selectedPAge}
                           totalUserCount={totalUserCount} selectPage={selectPage} portion={25}/>
                {
                    users.map(u => <User
                        key={u.id}
                            u={u}
                            toggleFollowing={toggleFollowing}
                            setToggleFollowingThunkCreator={setToggleFollowingThunkCreator}
                            setToggleUnfollowingThunkCreator={setToggleUnfollowingThunkCreator}
                        />
                    )
                }

            </div>


        </div>
    )

}

