import style from "../../component/Users/UsersС.module.css";
import React from "react";

type PaginatorPropsType = {
    totalUserCount: number
    selectPage: (p: number) => void
    selectedPAge: number
    countUsers: number
}
export const Paginator = ({...props}: PaginatorPropsType) => {

    let countPage = [];
    for (let i = 1; i <= Math.ceil(props.totalUserCount / props.countUsers); i++) {
        countPage.push(i)
    }
    return (
        <div>
            {
                countPage.map(p =>
                    <span onClick={() => props.selectPage(p)}
                          key={p} className={props.selectedPAge === p ? style.selectPage : ""}>{p} |</span>
                )
            }
        </div>
    )
}