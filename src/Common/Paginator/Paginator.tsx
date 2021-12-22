import style from "../../component/Users/UsersС.module.css";
import React, {useState} from "react";

type PaginatorPropsType = {
    totalUserCount: number
    selectPage: (p: number) => void
    selectedPAge: number
    countUsers: number
    portion: number
}
export const Paginator = ({...props}: PaginatorPropsType) => {

    // variables
    let countPage = [];
    const pageCount = Math.ceil(props.totalUserCount / props.countUsers)
    for (let i = 1; i <= pageCount; i++) {
        countPage.push(i)
    }


// state
    const [port, setPort] = useState(0)

    // functions
    const nextPortion = () => {
        setPort(port + props.portion)
    }
    const prevPortion = () => {
        setPort(port - props.portion)
    }


    const end = port + (props.portion + 1)

    let countPAge2 = countPage.filter((page) => page < end && page > port)

    return (
        <div>
            {port > 1 && <button onClick={prevPortion}>prev</button>}

            {
                countPAge2.map(p =>
                    <span onClick={() => props.selectPage(p)}
                          key={p} className={props.selectedPAge === p ? style.selectPage : ""}>{p} |</span>
                )
            }
            {port < pageCount - props.portion && <button onClick={nextPortion}>next</button>}
        </div>
    )
}