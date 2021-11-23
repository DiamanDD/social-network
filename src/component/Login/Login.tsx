import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {LoginThunkCreator, setUserData} from "../../redux/auth-reducer";
import {Input} from "../../Common/FormControl/FormControl";
import {requaired} from "../../Common/FormControl/validator";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type LoginFormDataType={
    login:string,
    password:string,
    rememberMe:boolean
}

export const LoginForm :React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type={"text"} name={"login"} component={Input} validate={[requaired]} /></div>
            <div><Field type={"password"} name={"password"} component={Input} validate={[requaired]}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember</div>
            <div>
                <button>отправить</button>
            </div>
            <div>{props.error}</div>
        </form>)
}

const ContactForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)



type logintype={
    setUserData:(id:number,login:string,email:string,isAyth:boolean)=>void
    LoginThunkCreator:(login: string, password: string, rememberme: boolean, captcha: boolean)=>void
    isAuth:boolean
}


export const Login = (props:logintype )=> {

    const onSubmit=(formData:LoginFormDataType)=>{

        props.LoginThunkCreator(formData.login,formData.password,formData.rememberMe=false,true)

    }
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Необходимо авторизоваться</h1>

            <ContactForm onSubmit={onSubmit}/>
        </div>
    )

}

type mstpType={
    isAuth:boolean
}
const mstp=(state: AppStateType):mstpType=>{
    return{
        isAuth:state.authReducer.isAyth
    }

}


export const LoginContainer=connect(mstp,{
    setUserData,
    LoginThunkCreator

})(Login)





