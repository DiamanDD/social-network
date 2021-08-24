import React from "react";
import {v1} from "uuid";
import {USersPropsType} from "./UserContainer";


export type UserPropsType={
    id: string
    iconUrl:string
    followStatus:boolean
    fullUserName: string
    userStatus:string
    countyName:string
    cityName:string

}

export type UsersPropsType={
    users2:UserPropsType[]
    setfollowStatus:(id:string)=>void
    setUnfollowStatus:(id:string)=>void
    setUsers:(users:UserPropsType[])=>void
}


export const Users = (props:USersPropsType) => {
    console.log(props.user2.length)



    if (props.user2.length === 0) {
        props.setUsers([
            {
                id: v1(),
                iconUrl: "https://im0-tub-ru.yandex.net/i?id=2d1f81252a503d5c311f1fc8eb02c8f7&ref=rim&n=33&w=135&h=135",
                followStatus: true,
                fullUserName: "Ivan к",
                userStatus: "I am Bee",
                countyName: "Россия",
                cityName: "Москва"

            },
            {
                id: v1(),
                iconUrl: "https://im0-tub-ru.yandex.net/i?id=2d1f81252a503d5c311f1fc8eb02c8f7&ref=rim&n=33&w=135&h=135",
                followStatus: false,
                fullUserName: "Ivan е",
                userStatus: "I am Bee",
                countyName: "Россия",
                cityName: "Москва"

            },
            {
                id: v1(),
                iconUrl: "https://im0-tub-ru.yandex.net/i?id=2d1f81252a503d5c311f1fc8eb02c8f7&ref=rim&n=33&w=135&h=135",
                followStatus: true,
                fullUserName: "Ivan н",
                userStatus: "I am Bee",
                countyName: "Россия",
                cityName: "Москва"

            }

        ])
    }

        return (
            <div>
                {props.user2.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.iconUrl} alt={"icon"}/></div>
                    {u.followStatus ?
                        <button onClick={() => props.setUnfollowStatus(u.id)}>Follow</button>
                        :
                        <button onClick={() => props.setfollowStatus(u.id)}>Unfollow</button>

                    }

                </span>
                    <span>
                    <span>
                        <div>{u.fullUserName}</div>
                        <div>{u.userStatus}</div>
                    </span>
                     <span>
                        <div>{u.cityName}</div>
                        <div>{u.countyName}</div>
                    </span>
                </span>
                </div>)

                }

            </div>
        )

    }
