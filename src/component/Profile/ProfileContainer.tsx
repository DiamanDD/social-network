import {Profile} from "./Profile";
import {addPost, UpdPost} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {PostsType} from "../../types/type";
import React from "react";
import axios from "axios";
import {setProfileInfo} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter } from "react-router-dom";

export class ProfileCr extends React.Component<PropsType> {

    componentDidMount() {

        let UserId = this.props.match.params.usID

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ UserId).then(response => {
            if (response.data) {
                this.props.setProfileInfo(response.data)
            }
        })
    }

    render() {

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

type PathParamsType = {
    usID: string,
}



export type mapStateToPropsType = {

    posts: PostsType[]
    newPost: string
    profileIInfo:profileIInfoType | null
}




    type mapDispatchToPropsType = {
    addPost: () => void
    UpdPost: (body: string) => void
    setProfileInfo: (setProfileInfo: any) => void
}
type profileIInfoType={
    aboutMe:string | null
    contacts:profileIInfoContactType
    lookingForAJob:boolean | null
    lookingForAJobDescription:string | null
    fullName:string | null
    userId:number | null
    photos:profileIInfoPhotosType
}
type profileIInfoContactType={
    facebook:string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink:string | null
}
type profileIInfoPhotosType={
    small:string | null
    lagre:string | null
}


export type profileType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & profileType
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {


    return {
        posts: state.dialogsReducer.profilePage.posts,
        newPost: state.dialogsReducer.profilePage.newPost,
        profileIInfo:state.profileReducer.profiliInfo

    }


}


 const WithURLDataContainerComponent=withRouter(ProfileCr)

export const ProfileContainer = connect(mapStateToProps, {addPost, UpdPost, setProfileInfo})(WithURLDataContainerComponent);
