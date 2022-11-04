import {FC} from "react";
import {Order} from "./Order/Order";
import {OrderType} from "../../../../types/types";

type PropsType = {
    orders: Array<OrderType>
}

export const OrdersList: FC<PropsType> = ({orders}) => {

    return <tbody>
    {
        orders.map(order => <Order key={order.id} order={order}/>)
    }
    </tbody>
}