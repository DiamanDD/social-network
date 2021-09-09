import React from "react";
import preloader from "../../component/assets/img/blank.gif"
export const Preloader=()=>{
    return(
       <div>
           <img src={preloader} alt={"preloader"}/>
       </div>
)
}