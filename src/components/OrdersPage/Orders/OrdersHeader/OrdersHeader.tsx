import {FC} from "react";
import {SortBlock} from "./SortBlock/SortBlock";
import s from "./OrdersHeader.module.scss"

export const OrdersHeader: FC = ({}) => {
    return <thead>
        <tr>
            <th className={s.sortedTh}>
                <div className={s.tableHeadItem}>
                    <span>Amount</span>
                    <SortBlock />
                </div>
            </th>
            <th className={s.sortedTh}>
                <div className={s.tableHeadItem}>
                    <span>Value in USD</span>
                    <SortBlock />
                </div>
            </th>
            <th className={s.sortedTh}>
                <div className={s.tableHeadItem}>
                    <span>Date</span>
                    <SortBlock />
                </div>
            </th>
            <th className={s.invoiceTh}>
                <div className={s.tableHeadItem}>
                    <span>Invoice</span>
                </div>
            </th>
            <th className={s.clientTh}>
                <div className={s.tableHeadItem}>
                    <span>Client</span>
                </div>
            </th>
            <th className={s.networkTh}>
                <div className={s.tableHeadItem}>
                    <span>Network</span>
                </div>
            </th>
            <th className={s.statusTh}>
                <div className={s.tableHeadItem}>
                    <span>status</span>
                </div>
            </th>
        </tr>
    </thead>
}