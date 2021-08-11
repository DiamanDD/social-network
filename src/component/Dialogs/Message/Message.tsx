import s from "./Message.module.css"
import React from "react";
import { MessageType } from "../../../types/type";


export const Message = (message: MessageType) => {

    return (


        <div className={s.messages}>
            <div key={message.id} className={s.message}>{message.message}</div>

        </div>
    )
}
