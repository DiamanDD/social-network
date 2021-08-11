import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogsItems/DialogItems";
import {profilePageTypeElevents} from "../../types/type";



type PropsType={
    profilePage:profilePageTypeElevents
}


export const Dialogs= (props:PropsType) => {




    let dialogsElements = props.profilePage.profile.map((user, index) => {

        return(

            <DialogItems
                userName={user.userName}
                id={user.id}
                route={user.id}/>
    )

})
    let messagesElements = props.profilePage.message.map((message, index) => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
                {messagesElements}

            </div>
        </div>
    )
}