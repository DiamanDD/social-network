import {addNewMessage, onChangeHangler} from "../../redux/profile-reducer";
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
    newMessage: string
    isAuth:boolean

}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        message: state.profileReducer.dialogsPage.message,
        newMessage: state.profileReducer.dialogsPage.newMessage,
        profile: state.profileReducer.dialogsPage.profile,
        isAuth:state.authReducer.isAyth
    }
}



//  compose(
//     connect(mapStateToProps, {
//         addNewMessage,
//         onChangeHangler
//
//     }),
//     withAuthRedirectComponent
// )(Dialogs)

// const DialogsContainer = withAuthRedirectComponent(connect(mapStateToProps, {
//     addNewMessage,
//     onChangeHangler
//
// })(Dialogs));
export  default compose<React.ComponentType>(

    connect(mapStateToProps, {
        addNewMessage,
        onChangeHangler

    }),
    withAuthRedirectComponent
)(Dialogs);