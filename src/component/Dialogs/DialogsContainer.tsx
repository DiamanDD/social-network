import {addNewMessage} from "../../redux/profile-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {MessageType, ProfileType} from "../../types/type";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type mapStateToPropsType = {
    profile: ProfileType[]
    message: MessageType[]

    isAuth:boolean
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        message: state.profileReducer.dialogsPage.message,
        profile: state.profileReducer.dialogsPage.profile,
        isAuth:state.authReducer.isAuth
    }
}
export  default compose<React.ComponentType>(

    connect(mapStateToProps, {
        addNewMessage,
        // onChangeHangler
    }),
    withAuthRedirectComponent
)(Dialogs);