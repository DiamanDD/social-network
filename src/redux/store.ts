// import {storeType} from "../types/type";
// import {profileReducer} from "./profile-reducer";
// import {dialogsReducer} from "./dialogs-reducer";
//
// export const store:storeType={
//     _state:{
//         profilePage: {
//             profile: [
//                 {id: 1, userName: "Ivan"},
//                 {id: 2, userName: "Ivan2"},
//                 {id: 3, userName: "Ivan3"}
//             ],
//
//             message: [
//                 {id: 1, message: "hallo1"},
//                 {id: 2, message: "hallo2"},
//                 {id: 3, message: "hallo3"}
//             ],
//             newMessage:"8",
//
//
//         },
//
//         posts: [
//             {id: 1, message: "Привет я Маша", likesCount: 12},
//             {id: 2, message: "ПИВЕТ Привет", likesCount: 15},
//             {id: 3, message: "куку", likesCount: 18},
//             {id: 4, message: "ПИВЕТ Привет", likesCount: 15},
//             {id: 5, message: "куку", likesCount: 18},
//             {id: 6, message: "ПИВЕТ Привет", likesCount: 15},
//             {id: 7, message: "куку", likesCount: 18}
//         ],
//         newPost: ""
//     },
//     _rerenderEntireThree(){
//         console.log("rerender")
//     },
//     subscribe(observe:()=>void){
//         this._rerenderEntireThree=observe
//     },
//     getState(){
//         return this._state
//     },
//     dispatch(action){
//         this._state.profilePage =  profileReducer(this._state.profilePage,action)
//         // this._sta=dialogsReducer(this._state,action)
//         this._rerenderEntireThree()
//     }
//
// }

export default 1