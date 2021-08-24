import {Profile} from "./Profile";
import {addPostActionCreator, UpdPostActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {PostsType} from "../../types/type";
import {Dispatch} from "redux";


export type mapStateToPropsType = {

    posts: PostsType[]
    newPost: string
}
type mapDispatchToPropsType = {
    onclickAddPost: () => void
    onChangePostElements: (body: string) => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {


    return {
        posts: state.dialogsReducer.profilePage.posts,
        newPost: state.dialogsReducer.profilePage.newPost

    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        onclickAddPost: () => {
            dispatch(addPostActionCreator())
        },
        onChangePostElements: (body: string) => {
            dispatch(UpdPostActionCreator(body))
        }

    }
}
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
