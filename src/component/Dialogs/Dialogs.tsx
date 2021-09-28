import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogsItems/DialogItems";
import {MessageType, ProfileType} from "../../types/type";
import {Redirect} from "react-router-dom";


type PropsType = {
    onChangeHangler: (body: string) => void
    addNewMessage: () => void
    profile: ProfileType[]
    message: MessageType[]
    newMessage: string
    isAuth: boolean
}

export const Dialogs = (props: PropsType) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>

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

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
                        <textarea onChange={onChangeHandler} value={props.newMessage}>{}</textarea>
                    </div>
                    <div>
                        <button onClick={addNewMessage}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
