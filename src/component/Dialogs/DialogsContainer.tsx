
import {addNEwMessageActionCreator, UpdMessageActionCreator} from "../../redux/profile-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {MessageType, ProfileType} from "../../types/type";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    profile: ProfileType[]
    message: MessageType[]
    newMessage: string

}
type mapDispatchToPropsType = {
    addNewMessage: () => void
    onChangeHangler: (body: string) => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {

        message: state.profileReducer.dialogsPage.message,
        newMessage: state.profileReducer.dialogsPage.newMessage,
        profile: state.profileReducer.dialogsPage.profile


    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        addNewMessage: () => {

            dispatch(addNEwMessageActionCreator())

        },
        onChangeHangler: (body: string) => {

            dispatch(UpdMessageActionCreator(body))
        }

    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);