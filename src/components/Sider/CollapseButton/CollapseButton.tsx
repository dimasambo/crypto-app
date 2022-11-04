import arrowRight from "../../../media/Next.png";
import arrowLeft from "../../../media/Prev.png";
import React, {FC} from "react";
import s from './CollapseButton.module.scss'

type PropsType = {
    collapsed: boolean
    onClick: () => void
}

export const CollapseButton: FC<PropsType> = ({ collapsed, onClick }) => {
    return <div className={collapsed ? s.collapseButton + ' ' + s.hidden : s.collapseButton + ' ' + s.shown}
                onClick={onClick}>
        <img src={collapsed ? arrowRight : arrowLeft}/>
    </div>;
}