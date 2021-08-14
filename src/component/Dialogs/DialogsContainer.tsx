import React from "react";
import {addNEwMessageActionCreator, UpdMessageActionCreator} from "../../redux/profile-reducer";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: any

}
export const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState()
    let {message, newMessage, profile} = state.profileReducer.dialogsPage

    const onChangeHangler = (body: string) => {
        props.store.dispatch(UpdMessageActionCreator(body))
    }
    const addNewMessage = () => {
        props.store.dispatch(addNEwMessageActionCreator())
    }


    return (
        <div>
            <Dialogs
                onChangeHangler={onChangeHangler}
                addNewMessage={addNewMessage}
                message={message}
                newMessage={newMessage}
                profile={profile}
            />
        </div>
    )
}