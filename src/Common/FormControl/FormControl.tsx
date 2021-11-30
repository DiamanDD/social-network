import React from "react";
import style from "./FormControl.module.css";


export const Textarea=({input, meta, ...props}:any)=>{

    return(
       <div >
           <textarea className={meta.error && "style.textareaErorr"} {...props} {...input} value={meta.submitting?"":meta.value  }/>
           <div><span className={style.erorrSpan}>{meta.visited && meta.error}</span></div>
       </div>
    )
}

export const Input=({input, meta, ...props}:any)=>{

    return(
        <div >
            <input className={meta.error && "style.textareaErorr"} {...props} {...input} value={meta.submitting?"":meta.value  }/>
            <div><span className={style.erorrSpan}>{meta.visited && meta.error}</span></div>
        </div>
    )
}
