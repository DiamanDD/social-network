import React, {ChangeEvent} from "react";
type ProfileInfoType = {
    profiliInfo: any
    profileStatus: string
    updStatusThunkCreator: (status: string) => void

}
export class ProfileInfo extends React.Component<ProfileInfoType> {
    state = {
        editMode: false,
        status: this.props.profileStatus
    }
    activateEditeMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditeMode = () => {

        this.setState({

            editMode: false
        })
        this.props.updStatusThunkCreator(this.state.status)
    }
    changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileInfoType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                status: this.props.profileStatus
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    <img alt={`${this.props.profiliInfo.fullName}`}
                         src={`${this.props.profiliInfo.photos.large}`}/>
                </div>
                <div>
                    <div>
                        {this.props.profiliInfo.aboutMe}
                    </div>
                    <div>
                        {this.props.profiliInfo.fullName}
                    </div>
                    {!this.state.editMode
                        ? <div onDoubleClick={this.activateEditeMode}>{this.props.profileStatus || "----"}</div>
                        : <input
                            onChange={this.changeStatus}
                            onBlur={this.deactivateEditeMode.bind(this)}
                            autoFocus={true}
                            value={this.state.status}/>}

                </div>
            </>
        )
    }
}