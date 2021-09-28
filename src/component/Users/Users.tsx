import React from "react";
import style from "./UsersС.module.css";
import logo from "../assets/img/logo.png";
import {UserPropsType} from "./UserContainer";
import {NavLink} from "react-router-dom";

type usersApiType = {
    selectedPAge: number
    totalCountUSer: number
    countUsers: number
    user2: UserPropsType[]
    selectPage: (p: number) => void
    setfollowStatus: (id: string) => void
    setUnfollowStatus: (id: string) => void
    toggleFollowing: string[]
    setToggleFollowing: (userId: string, isFetching: boolean) => void
    setToggleFollowingThunkCreator: any
    setToggleUnfollowingThunkCreator: any

}
export const Users = (props: usersApiType) => {
    let countPage = [];
    for (let i = 1; i <= Math.ceil(props.totalCountUSer / props.countUsers); i++) {
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
            {props.user2.map(u => <div key={u.id}>

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
                                // debugger
                                props.setToggleFollowingThunkCreator(u.id)
                                // props.setToggleFollowing(u.id,true)
                                // UserAPI.UnFollowUser(u.id)
                                //     .then(data => {
                                //         if (data.resultCode === 0) {
                                //             console.log(data)
                                //             props.setUnfollowStatus(u.id)
                                //         }
                                //         props.setToggleFollowing(u.id,false)
                                //     })
                            }
                            }>Unfollow</button>

                            : <button disabled={props.toggleFollowing.some(id => id === u.id)} onClick={
                                () => {
                                    props.setToggleUnfollowingThunkCreator(u.id)
                                    // props.setToggleFollowing(u.id,true)
                                    // UserAPI.FollowUsr(u.id).then(data => {
                                    //     if (data.resultCode === 0) {
                                    //         props.setfollowStatus(u.id)
                                    //     }
                                    //     props.setToggleFollowing(u.id,false)
                                    // })
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