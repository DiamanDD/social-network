import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {autorizedApi} from "../../Api/Api";

type LoginFormDataType={
    login:string,
    password:string,
    rememberMe:boolean
}

export const LoginForm :React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type={"text"} name={"login"} component={"input"}/></div>
            <div><Field type={"password"} name={"password"} component={"input"}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember</div>
            <div>
                <button>отправить</button>
            </div>
        </form>)
}

const ContactForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)





export const Login = ( )=> {
    const onSubmit=(formData:LoginFormDataType)=>{

        const auth=autorizedApi.login(formData.login,formData.password,false,true)

        auth.then((data)=>{
            if(data.data.resultCode===0){
                console.log("Куку")
            }
            console.log(data)
        })
    }
    return (
        <div>
            <h1>Необходимо авторизоваться</h1>

            <ContactForm onSubmit={onSubmit}/>
        </div>
    )

}






