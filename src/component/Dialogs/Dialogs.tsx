import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogsItems/DialogItems";
import {MessageType, ProfileType} from "../../types/type";


type PropsType = {
    onChangeHangler: (body: string) => void
    addNewMessage: () => void
    profile: ProfileType[]
    message: MessageType[]
    newMessage: string
}

export const Dialogs = (props: PropsType) => {

    let dialogsElements = props.profile.map((user) => {

        return (

            <DialogItems key={user.id}
                         userName={user.userName}
                         id={user.id}
                         route={user.id}/>
        )
    })


    let messagesElements = props.message.map((message) =>
        <Message key={message.id} message={message.message}
                 id={message.id}
        />)

    const onChangeHangler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHangler(e.currentTarget.value)
    }
    const addNewMessage = () => {
        props.addNewMessage()
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}> {dialogsElements}</div>
                <div className={s.messageItems}>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onChangeHangler} value={props.newMessage}>{}</textarea>
                    </div>
                    <div>
                        <button onClick={addNewMessage}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

// import React from "react";
// import s from "./Dialogs.module.css"
// import {Message} from "./Message/Message";
// import {DialogItems} from "./DialogsItems/DialogItems";
// import {ActionsType, profilePageTypeElevents} from "../../types/type";
// import {ChangeEvent} from "react";
// import {addNEwMessageActionCreator, UpdMessageActionCreator} from "../../redux/profile-reducer";
// import {reduserTypeAll} from "../../redux/redux-store";
//
//
// type PropsType = {
//     profilePage: profilePageTypeElevents
//     dispatch: (action: ActionsType) => void
//     store:reduserTypeAll
// }
//
// export const Dialogs = (props: PropsType) => {
//     let dialogsElements = props.profilePage.profile.map((user) => {
//
//         return (
//
//             <DialogItems
//                 userName={user.userName}
//                 id={user.id}
//                 route={user.id}/>
//         )
//     })
//     let messagesElements = props.profilePage.message.map(
//         (message) =>
//             <Message message={message.message}
//                      id={message.id}
//             />)
//     const onChangeHangler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         props.dispatch(UpdMessageActionCreator(e.currentTarget.value))
//     }
//     const addNewMessage = () => {
//         props.dispatch(addNEwMessageActionCreator())
//     }
//     return (
//         <div>
//             <div className={s.dialogs}>
//                 <div className={s.dialogsItems}> {dialogsElements}</div>
//                 <div className={s.messageItems}>{messagesElements}</div>
//                 <div>
//                     <div>
//                         <textarea onChange={onChangeHangler}>{props.profilePage.newMessage}</textarea>
//                     </div>
//                     <div>
//                         <button onClick={addNewMessage}>Send</button>
//                     </div>
//                 </div>
//
//             </div>
//         </div>
//     )
// }