import eLogo from "../../../media/eLogo.png";
import xLeftLogo from "../../../media/xLeftLogo.png";
import xRightLogo from "../../../media/xRightLogo.png";
import bLogo from "../../../media/bLogo.png";
import iLogo from "../../../media/iLogo.png";
import React, {FC} from "react";
import s from './SiderHeader.module.scss'

export const SiderHeader: FC = ({}) => {
    return <div className={s.siderHeader}>
        <div className={s.siderHeaderBottom}>
            <img src={eLogo}/>
            <img src={xLeftLogo}/>
        </div>
        <div className={s.siderHeaderTop}>
            <img src={xRightLogo}/>
            <img src={bLogo}/>
            <img src={iLogo}/>
        </div>
    </div>;
}