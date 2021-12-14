import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";

type ProfileInfoType = {
    profiliInfo: any
    profileStatus: string
    updStatusThunkCreator: (status: string) => void
}

export const ProfileInfoHook = (props: ProfileInfoType) => {

    // state
    const {profileStatus, profiliInfo, updStatusThunkCreator} = props
    const [state, setState] = useState(false)
    const [status, setstatus] = useState(profileStatus)

    // hooks
    useEffect(() => {
        setstatus(profileStatus)
    }, [profileStatus])


    // function
    const activateEditeMode = () => {
        setState(true)
    }
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setstatus(e.currentTarget.value)
    }
    const deactivateEditeMode = () => {
        setState(false)
        updStatusThunkCreator(status)
    }
    const deactivateEditeModeKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            deactivateEditeMode()
        }
    }

    return (
        <>
            <div>
                <img alt={`${profiliInfo.fullName}`}
                     src={`${profiliInfo.photos.large}`}/>
            </div>
            <div>
                <div>
                    {profiliInfo.aboutMe}
                </div>
                <div>
                    {profiliInfo.fullName}
                </div>
                {!state
                    ? <div onDoubleClick={activateEditeMode}>{props.profileStatus || "--2--"}</div>
                    : <input
                        onChange={changeStatus}
                        onBlur={deactivateEditeMode}
                        onKeyDown={deactivateEditeModeKeyDown}
                        autoFocus={true}
                        value={status}/>}
            </div>
        </>
    )

}