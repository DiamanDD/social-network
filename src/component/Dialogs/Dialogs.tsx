import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogsItems/DialogItems";
import {MessageType, ProfileType} from "../../types/type";
import {AddMessageFormContainer} from "../../Common/MessageForm/AddMessageFormContainer";

type PropsType = {
    onChangeHangler: (body: string) => void
    addNewMessage: (values:string) => void
    profile: ProfileType[]
    message: MessageType[]
    newMessage: string
    isAuth: boolean
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



const  newmessage=(values:any)=>{
    console.log(values.messageBody)
    props.addNewMessage(values.messageBody)
}

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}> {dialogsElements}</div>
                <div className={s.messageItems}>{messagesElements}</div>
                <AddMessageFormContainer onSubmit={newmessage} />
            </div>
        </div>
    )
}



