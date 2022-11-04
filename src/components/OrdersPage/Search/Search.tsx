import {OrderType} from "../../../types/types";
import {FC, useState} from "react";
import {Field, Form, Formik} from "formik";
import s from "./Search.module.scss"

type SearchPropsType = {
    orders: Array<OrderType>
    setSearchedOrders: (orders: Array<OrderType>) => void
}

export const Search: FC<SearchPropsType> = ({orders, setSearchedOrders}) => {

    const [searchedValue, setSearchedValue] = useState('')

    const onFieldChange = (value: string) => {
        setSearchedValue(value)

        setSearchedOrders(orders.filter((order) => {
                return order.coinName.toLowerCase().includes(value.toLowerCase())
            })
        )
    }

    return <div className={s.searchWrapper}>
        <Formik
            enableReinitialize
            initialValues={{value: searchedValue}}
            onSubmit={() => {}}
        >
            <Form className={''}>
                <Field type={"text"}
                       placeholder={"Search orders"}
                       className={s.input}
                       name={"value"}
                       onChange={(e: any) => {onFieldChange(e.target.value)}}
                />
            </Form>
        </Formik>
    </div>
}