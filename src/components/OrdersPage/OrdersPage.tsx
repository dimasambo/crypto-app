import React, {FC, useState} from "react";
import s from "./OrdersPage.module.scss"
import {Orders} from "./Orders/Orders";
import {Search} from "./Search/Search";
import {DatePeriod} from "./DatePeriod/DatePeriod";
import {Filter} from "./Filter/Filter";
import {OrderType} from "../../types/types";
import {orders} from "../../testData";

export const OrdersPage: FC = ({}) => {
    const [searchedOrders, setSearchedOrders] = useState<Array<OrderType>>(orders)

    return <div className={s.ordersPageWrapper}>
        <div className={s.ordersHeaderWrapper}>
            <div className={s.ordersTitleBox}>
                <p>Orders</p>
            </div>
            <div className={s.ordersHeaderMultipleBlock}>
                <Search orders={orders} setSearchedOrders={setSearchedOrders}/>
                <DatePeriod />
                <Filter />
            </div>
        </div>
        <div>
            <Orders orders={searchedOrders} />
        </div>
    </div>
}