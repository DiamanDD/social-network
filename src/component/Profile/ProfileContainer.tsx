import {Profile} from "./Profile";
import {addPost, UpdPost} from "../../redux/dialogs-reducer";
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
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export class ProfileCr extends React.Component<PropsType> {
    [x: string]: any;

    componentDidMount() {


        let UserId = this.props.match.params.usID

        if (!UserId) {
            console.log(UserId)
            UserId = "19596"

            console.log(UserId)
        }
        console.log(UserId)
        this.props.setProfileInfoThunkCreator(UserId)
        this.props.getStatusThunkCreator(UserId)



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
    newPost: string
    profileIInfo: profileIInfoType | null
    isAuth: boolean
    AuthId: number | null
    status:string

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
        newPost: state.dialogsReducer.profilePage.newPost,
        profileIInfo: state.profileReducer.profiliInfo,
        isAuth: state.authReducer.isAyth,
        AuthId: state.authReducer.id,
        status: state.profileReducer.status,


    }
}




export default  compose<React.ComponentType>
    (connect(mapStateToProps, {
            addPost,
            UpdPost,
            setProfileInfo,
            setProfileInfoThunkCreator,
            getStatusThunkCreator,
            updStatusThunkCreator

        }),
            withAuthRedirectComponent,
            withRouter
    )(ProfileCr)
