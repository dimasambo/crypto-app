import {FC} from "react";
import { DatePicker } from 'antd';
import './DatePeriod.css'
import './DatePeriod.css'

export const DatePeriod: FC = ({}) => {

    const { RangePicker } = DatePicker;

    return <div>
        <RangePicker />
    </div>
}