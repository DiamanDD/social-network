import React from "react";
type ProfileInfoType={

    profiliInfo:any
}

export const ProfileInfo = (props:ProfileInfoType) => {


    return (
        <>
            <div>
                <img alt={`${props.profiliInfo.fullName}`}
                    src={`${props.profiliInfo.photos.large}`}/>
            </div>
            <div>
                <div>
                    {props.profiliInfo.aboutMe}
                </div><div>
                    {props.profiliInfo.fullName}
                </div>

            </div>
        </>
    )
}