import axios from "axios";


const instatce = axios.create({
    withCredentials: true   ,
    headers: {
        "API-KEY": "8194c176-0220-41f4-bb3a-dc66612b61ce"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    data: {}

})


export const UserAPI={
    GetUsers (countUsers: number = 1, selectedPAge: number = 5)  {
        return (
            instatce.get(`users?count=${countUsers}&page=${selectedPAge}`
            )
                .then(response => response.data)
        )
    },
    GetUser (UserId: string) {
        return (
            instatce.get(`profile/` + UserId).then(response => response.data)
        )
    },
    UnFollowUser  (id: string) {
        return (instatce.delete(`follow/${id}`).then(responce => responce.data)

        )
    },
    FollowUsr  (id: string) {
        return (instatce.post(`follow/${id}`).then(responce => responce.data)

        )
    },
    AuthMe() {
        return (instatce.get(`auth/me`).then(responce => responce.data))

    }


}

// export const GetUsers = (countUsers: number = 1, selectedPAge: number = 5) => {
//     return (
//         instatce.get(`users?count=${countUsers}&page=${selectedPAge}`
//         )
//             .then(response => response.data)
//     )
// }

// export const GetUser = (UserId: string) => {
//     return (
//         instatce.get(`profile/` + UserId).then(response => response.data)
//     )
// }

// export const UnFollowUser = (id: string) => {
//     return (instatce.delete(`follow/${id}`).then(responce => responce.data)
//
//     )
// }


// export const FollowUsr = (id: string) => {
//     return (instatce.post(`follow/${id}`).then(responce => responce.data)
//
//     )
// }
//
// export const AuthMe = () => {
//     return (instatce.get(`auth/me`).then(responce => responce.data))
//
// }