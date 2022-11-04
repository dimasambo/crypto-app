import {FC, useState} from "react";
import s from './Filter.module.scss'
import FilterImg from '../../../media/Filter.png'
import {FilterDropDown} from "./FilterDropDown/FilterDropDown";

export const Filter: FC = ({}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    return <div className={s.filterWrapper}>
        <div className={s.filterButtonWrapper}
             onClick={() => isFilterOpen ? setIsFilterOpen(false) : setIsFilterOpen(true)}>
            <img src={FilterImg}/>
        </div>
        {isFilterOpen &&
            <FilterDropDown/>
        }
    </div>
}