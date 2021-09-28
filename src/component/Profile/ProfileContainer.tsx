import {Profile} from "./Profile";
import {addPost, UpdPost} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {PostsType} from "../../types/type";
import React from "react";
import {setProfileInfo, setProfileInfoThunkCreator} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

export class ProfileCr extends React.Component<PropsType> {

    componentDidMount() {
        let UserId = this.props.match.params.usID

        if (!UserId) {
            UserId = "2"
        }
        this.props.setProfileInfoThunkCreator(UserId)

    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>

        return (
            <Profile
                posts={this.props.posts}
                newPost={this.props.newPost}
                addPost={this.props.addPost}
                UpdPost={this.props.UpdPost}
                setProfileInfo={this.props.setProfileInfo}
                profiliInfo={this.props.profileIInfo}
            />
        );
    }
}

export type PathParamsType = {
    usID: string,
}


export type mapStateToPropsType = {

    posts: PostsType[]
    newPost: string
    profileIInfo: profileIInfoType | null
    isAuth: boolean
    AuthId: number | null

}


type mapDispatchToPropsType = {
    addPost: () => void
    UpdPost: (body: string) => void
    setProfileInfo: (setProfileInfo: any) => void
    setProfileInfoThunkCreator: any
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
        newPost: state.dialogsReducer.profilePage.newPost,
        profileIInfo: state.profileReducer.profiliInfo,
        isAuth: state.authReducer.isAyth,
        AuthId: state.authReducer.id

    }
}
const WithURLDataContainerComponent = withRouter(ProfileCr)
export const ProfileContainer = connect(mapStateToProps, {
    addPost,
    UpdPost,
    setProfileInfo,
    setProfileInfoThunkCreator
})(WithURLDataContainerComponent);
