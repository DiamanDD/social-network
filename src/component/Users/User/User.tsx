import {NavLink} from "react-router-dom";
import logo from "../../assets/img/logo.png";
import style from "../UsersС.module.css";
import React from "react";
import {UserPropsType} from "../UserContainer";

type LocalUserPropsType = {
    users: UserPropsType[]
    toggleFollowing: string[]
    setToggleFollowingThunkCreator: any
    setToggleUnfollowingThunkCreator: any
}
export const User = ({
                         users,
                         toggleFollowing,
                         setToggleFollowingThunkCreator,
                         setToggleUnfollowingThunkCreator,
                         ...props
                     }: LocalUserPropsType) => {
    return (
        <>
            {
                users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                             < img src={u.photos.large !== null ? u.photos.large : logo} alt={"icon"}
                                   className={style.logo}/>
                        </NavLink>
                       </div>
                    {
                        u.followed ?
                            <button disabled={toggleFollowing.some(id => id === u.id)} onClick={() => {
                                setToggleFollowingThunkCreator(u.id)
                            }
                            }>Unfollow</button>

                            : <button disabled={toggleFollowing.some(id => id === u.id)} onClick={
                                () => {
                                    setToggleUnfollowingThunkCreator(u.id)
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
        </>)
}