import {Profile} from "./Profile";
import {addPost} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {PostsType} from "../../types/type";
import React from "react";
import {
    getStatusThunkCreator,
    setProfileInfo,
    setProfileInfoThunkCreator,
    updStatusThunkCreator
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

export class ProfileCr extends React.Component<PropsType> {
    [x: string]: any;
    componentDidMount() {
        let UserId = this.props.match.params.usID

        if (!UserId) {
            console.log(UserId)
            UserId = String(this.props.userID)

        }
        this.props.setProfileInfoThunkCreator(UserId)
        this.props.getStatusThunkCreator(UserId)
    }
    render() {
        return (
            <Profile
                posts={this.props.posts}
                addPost={this.props.addPost}
                setProfileInfo={this.props.setProfileInfo}
                profiliInfo={this.props.profileIInfo}
                profileStatus={this.props.status}
                updStatusThunkCreator={this.props.updStatusThunkCreator}
            />
        );
    }
}

export type PathParamsType = {
    usID: string,
}
export type mapStateToPropsType = {

    posts: PostsType[]
    // newPost: string
    profileIInfo: profileIInfoType | null
    isAuth: boolean
    AuthId: number | null
    status:string
    userID:number |null

}
type mapDispatchToPropsType = {
    addPost: () => void
    UpdPost: (body: string) => void
    setProfileInfo: (setProfileInfo: any) => void
    setProfileInfoThunkCreator:any
    getStatusThunkCreator: any
    updStatusThunkCreator:any

}
type profileIInfoType = {
    aboutMe: string | null
    contacts: profileIInfoContactType
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: profileIInfoPhotosType
}
type profileIInfoContactType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type profileIInfoPhotosType = {
    small: string | null
    lagre: string | null
}
export type profileType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & profileType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.dialogsReducer.profilePage.posts,
         profileIInfo: state.profileReducer.profiliInfo,
        isAuth: state.authReducer.isAuth,
        AuthId: state.authReducer.id,
        status: state.profileReducer.status,
        userID:state.authReducer.id

    }
}

export default  compose<React.ComponentType>
    (connect(mapStateToProps, {
            addPost,
                     setProfileInfo,
            setProfileInfoThunkCreator,
            getStatusThunkCreator,
            updStatusThunkCreator
        }),
            // withAuthRedirectComponent,
            withRouter
    )(ProfileCr)
