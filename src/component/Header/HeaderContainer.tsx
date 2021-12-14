import React from "react";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {LogOutThunkCreator} from "../../redux/auth-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {PathParamsType} from "../Profile/ProfileContainer";
import {setProfileInfo} from "../../redux/profile-reducer";

// type
type mapStateToPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type mapDispatchToProps = {
    setProfileInfo: (setProfileInfo: any) => void
    LogOutThunkCreator: () => void
}
type HeaderContainerProps = mapStateToPropsType & mapDispatchToProps & RouteComponentProps<PathParamsType>


class HeaderContainer extends React.Component<HeaderContainerProps> {



    render() {
        return (
            <Header email={this.props.email} id={this.props.id} login={this.props.login} isAuth={this.props.isAuth}
                    LogOutThunkCreator={this.props.LogOutThunkCreator}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({

    id: state.authReducer.id,
    email: state.authReducer.email,
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth

})
export default connect(mapStateToProps, {
    setProfileInfo, LogOutThunkCreator

})(withRouter(HeaderContainer));