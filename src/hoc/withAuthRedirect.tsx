import React, {ComponentType} from "react";
import {connect} from "react-redux";

import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

type mstpType={
    isAuth:boolean
}


const mstp=(state:AppStateType):mstpType=>{
    return{
        isAuth:state.authReducer.isAuth
    }

}
export  function withAuthRedirectComponent<T>(Component:ComponentType<T>){

    const RedirectComponent=(props:mstpType)=>{
        let {isAuth,...restProps}=props

        if(!isAuth) return <Redirect to={"/login"}/>
        return <Component  {...restProps as T}/>
    }

    return connect(mstp)(RedirectComponent)
}