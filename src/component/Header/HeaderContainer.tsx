import React from "react";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {AuthMeThunkCreator} from "../../redux/auth-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {PathParamsType} from "../Profile/ProfileContainer";
import {setProfileInfo} from "../../redux/profile-reducer";

type mapStateToPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAyth: boolean

}
type mapDispatchToProps = {

    setProfileInfo: (setProfileInfo: any) => void
    AuthMeThunkCreator: any

}

type HeaderContainerProps = mapStateToPropsType & mapDispatchToProps & RouteComponentProps<PathParamsType>

class HeaderContainer extends React.Component<HeaderContainerProps> {
    componentDidMount() {

        this.props.AuthMeThunkCreator(this.props.id)

    }

    render() {
        return (
            <Header email={this.props.email} id={this.props.id} login={this.props.login} isAyth={this.props.isAyth}/>
        );
    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    id: state.authReducer.id,
    email: state.authReducer.email,
    login: state.authReducer.login,
    isAyth: state.authReducer.isAyth


})
export default connect(mapStateToProps, {
    setProfileInfo, AuthMeThunkCreator

})(withRouter(HeaderContainer));