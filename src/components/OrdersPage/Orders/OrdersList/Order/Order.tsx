import {FC} from "react";
import {OrderType} from "../../../../../types/types";
import s from './Order.module.scss'
import btc from '../../../../../media/btc.png'
import eth from '../../../../../media/eth.png'
import usdt from '../../../../../media/USDT.png'


type Props = {
    order: OrderType
}

export const Order: FC<Props> = ({order}) => {
    return <tr className={s.orderItem}>
        <td className={s.orderItemField}>
            <div className={s.orderAmount}>
                <div className={s.orderAmountImg}>
                    <img src={order.coinName === 'BTC' ? btc : (order.coinName === 'ETH' ? eth : usdt)} />
                </div>
                <div className={s.orderAmountName}>
                    <span>{order.coinName}</span>
                </div>
                <div className={s.orderAmountSum}>
                    <span>{order.amount}</span>
                </div>
            </div>
        </td>
        <td className={s.orderItemField}>
            <div className={s.valueInUSD}>{order.valueInUSD}$</div>
        </td>
        <td className={s.orderItemField}>
            <div className={s.date}>{order.date}</div>
        </td>
        <td className={s.orderItemField}>
            <div className={s.invoice}>
                <div className={s.invoiceNumber}>{order.invoiceNumber}</div>
                <div className={s.invoiceContent}>
                    {order.invoiceContent.split('').length > 35
                        ? order.invoiceContent.slice(0, 35) + '...'
                        : order.invoiceContent}
                </div>
            </div>
        </td>
        <td className={s.orderItemField}>
            <div className={s.client}>
                <div className={s.clientName}>{order.clientName}</div>
                <div className={s.clientEmail}>{order.clientEmail}</div>
            </div>
        </td>
        <td className={s.orderItemField}>
            <div className={s.network}>{order.network}</div>
        </td>
        <td className={s.orderItemField}>
            <div className={order.status === 'Confirmed'
                ? s.statusConfirmed + ' ' + s.status
                : s.statusRejected + ' ' + s.status}>
                {order.status}
            </div>
        </td>
    </tr>
}