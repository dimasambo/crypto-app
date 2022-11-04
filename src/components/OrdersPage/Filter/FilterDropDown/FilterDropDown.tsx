import {FC} from "react";
import s from './FilterDropDown.module.scss'
import {Field, Form, Formik} from "formik";
import {log} from "util";

type InitialValuesType = {
    cryptocurrency: Array<string>
    amountCurrency: string
    amountFrom: string
    amountTo: string
    status: Array<string>
}

export const FilterDropDown: FC = ({}) => {

    const initialValues = {
        amountCurrency: '',
        amountFrom: '',
        amountTo: '',
        cryptocurrency: [],
        status: []
    } as InitialValuesType

    const onFormSubmit = (values: InitialValuesType) => {
        alert(JSON.stringify(values));
    }

    return <div className={s.filterDropDownWrapper}>
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={onFormSubmit}
        >
            <Form className={''}>
                <div className={s.filterHeader}>
                    <span>Filter</span>
                    <button type={'reset'} className={s.resetButton}>Reset</button>
                </div>
                <div className={s.filterBody}>
                    <p>Cryptocurrency</p>
                    <div role="group" aria-labelledby="checkbox-group" className={s.currencyCheckbox}>
                        <label>
                            <Field type="checkbox" name="cryptocurrency" value="BTC"/>
                            <span>BTC</span>
                        </label>
                        <label>
                            <Field type="checkbox" name="cryptocurrency" value="ETH"/>
                            <span>ETH</span>
                        </label>
                        <label>
                            <Field type="checkbox" name="cryptocurrency" value="USDT"/>
                            <span>USDT</span>
                        </label>
                        <label>
                            <Field type="checkbox" name="cryptocurrency" value="UCDT"/>
                            <span>UCDT</span>
                        </label>
                    </div>
                    <p>Amount</p>
                    <div className={s.amountBox}>
                        <Field type={"text"}
                               placeholder={"Search orders"}
                               className={s.input}
                               name={"amountCurrency"}
                        />
                        <Field type={"text"}
                               placeholder={"From"}
                               className={s.input}
                               name={"amountFrom"}
                        />
                        <Field type={"text"}
                               placeholder={"To"}
                               className={s.input}
                               name={"amountTo"}
                        />
                    </div>
                    <p>Status</p>
                    <div role="group" aria-labelledby="checkbox-group" className={s.statusCheckbox}>
                        <label>
                            <Field type="checkbox" name="status" value="Confirmed"/>
                            <span>Confirmed</span>
                        </label>
                        <label>
                            <Field type="checkbox" name="status" value="Time out"/>
                            <span>Time out</span>
                        </label>
                    </div>
                </div>
                <div className={s.filterFooter}>
                    <button type={'submit'}>Apply Filter</button>
                </div>
            </Form>
        </Formik>
    </div>
}