import {FC, useState} from "react";
import s from "./Orders.module.scss"
import {OrdersHeader} from "./OrdersHeader/OrdersHeader";
import {OrdersList} from "./OrdersList/OrdersList";
import {Pagination} from "./Pagination/Pagination";
import {OrderType} from "../../../types/types";

type PropsType = {
    orders: Array<OrderType>
}

export const Orders: FC<PropsType> = ({orders}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(19)

    return <div className={s.ordersWrapper}>
        <table>
            <OrdersHeader/>
            <OrdersList orders={orders}/>
        </table>
        <Pagination ordersCount={orders.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    limit={limit}/>
    </div>
}