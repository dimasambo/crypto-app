import {FC} from "react";
import s from "./SortBlock.module.scss"

export const SortBlock: FC = ({}) => {
    return <div className={s.sortWrapper}>
        <div>
            <div className={s.sortArrowUp}></div>
        </div>
        <div>
            <div className={s.sortArrowDown}></div>
        </div>
    </div>
}