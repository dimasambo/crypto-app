import {Dropdown, Menu, Space} from "antd";
import account from "../../../media/account.png";
import {DownOutlined} from "@ant-design/icons";
import React, {FC} from "react";
import lightAccount from "../../../media/AccountDropdownLight.png";
import logout from "../../../media/logout.png";
import s from './SiderAccount.module.scss'

type PropsType = {
    onClick: (e: any) => void
}

const dropdownAccount = (
    <Menu>
        <Menu.Item>
            <div className={s.menuDropdownItem + ' ' + s.selected}>
                <div className={s.menuDropdownItemImg}>
                    <img src={lightAccount}/>
                </div>
                <div>
                    <span>My account</span>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className={s.menuDropdownItem}>
                <div className={s.menuDropdownItemImg}>
                    <img src={logout}/>
                </div>
                <div>
                    <span>Logout</span>
                </div>
            </div>
        </Menu.Item>
    </Menu>
);

export const SiderAccount: FC<PropsType> = ({onClick}) => {
    return <div className={s.siderAccount}>
        <div className={""}>
            <Dropdown overlay={dropdownAccount} trigger={["click"]}>
                <a onClick={onClick}>
                    <Space>
                        <div className={s.menuDropdownItemActive}>
                            <div className={s.menuDropdownItemImgActive}>
                                <img src={account}/>
                            </div>
                            <div className={s.accountDropdownTextBox}>
                                <div className={s.accountDropdownName}>
                                    Debra Holt
                                </div>
                                <div className={s.accountDropdownEmail}>
                                    debra.holt@example.com
                                </div>
                            </div>
                        </div>
                        <DownOutlined/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    </div>;
}