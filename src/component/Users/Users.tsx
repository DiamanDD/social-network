import React, {FC} from "react";
import style from "./UsersС.module.css";
import logo from "../assets/img/logo.png";
import {UserPropsType} from "./UserContainer";
import {NavLink} from "react-router-dom";

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
export const Users:FC<usersApiType> = (props: usersApiType) => {
    let countPage = [];
    for (let i = 1; i <= Math.ceil(props.totalUserCount / props.countUsers); i++) {
        countPage.push(i)
    }

    return (
        <div>
            <div>
                {
                    countPage.map(p =>
                        <span onClick={() => props.selectPage(p)}
                              key={p} className={props.selectedPAge === p ? style.selectPage : ""}>{p} |</span>
                    )

                }

            </div>
            {props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                             < img src={u.photos.large !== null ? u.photos.large : logo} alt={"icon"}
                                   className={style.logo}/>
                        </NavLink>
                       </div>
                    {
                        u.followed ?
                            <button disabled={props.toggleFollowing.some(id => id === u.id)} onClick={() => {

                                props.setToggleFollowingThunkCreator(u.id)
                            }
                            }>Unfollow</button>

                            : <button disabled={props.toggleFollowing.some(id => id === u.id)} onClick={
                                () => {
                                    props.setToggleUnfollowingThunkCreator(u.id)
                                }
                            }>Follow</button>}
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                     <span>
                        <div>{"u.cityName"}</div>
                        <div>{"u.countyName"}</div>
                    </span>
                </span>
            </div>)

            }

        </div>
    )

}