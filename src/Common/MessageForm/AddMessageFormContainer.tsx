import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Textarea } from "../FormControl/FormControl";
import style from "./AddMessageFormContainer.module.css"
import {maxLenghtCreator, requaired} from "../FormControl/validator";

const maxLenght = maxLenghtCreator(20)
export const AddMessageForm: React.FC<InjectedFormProps> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.textareaErorr}>
                <Field className={""} component={Textarea} name={"messageBody"} placeholder={"Enter your" +
                "message"} validate={[requaired, maxLenght]}/>

            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormContainer = reduxForm({form: 'message'})(AddMessageForm)