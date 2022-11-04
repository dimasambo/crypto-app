import {Dropdown, Menu, Space} from "antd";
import elStore from "../../../media/elStore.png";
import {DownOutlined} from "@ant-design/icons";
import React, {FC} from "react";
import birddrib from "../../../media/birddrib.png";
import helth from "../../../media/helth.png";
import plus from "../../../media/plus.png";
import s from './SiderCompany.module.scss'


type PropsType = {
    onClick: (e: any) => void
}

const dropdownMenu = (
    <Menu>
        <Menu.Item>
            <div className={s.menuDropdownItem + ' ' + s.selected}>
                <div className={s.menuDropdownItemImg}>
                    <img src={elStore}/>
                </div>
                <div>
                    <span>El store official</span>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className={s.menuDropdownItem}>
                <div className={s.menuDropdownItemImg}>
                    <img src={birddrib}/>
                </div>
                <div>
                    <span>Birddrib store</span>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className={s.menuDropdownItem}>
                <div className={s.menuDropdownItemImg}>
                    <img src={helth}/>
                </div>
                <div>
                    <span>Helth store</span>
                </div>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className={s.menuDropdownItem}>
                <div className={s.menuDropdownItemImg}>
                    <img src={plus}/>
                </div>
                <div>
                    <span>Create new</span>
                </div>
            </div>
        </Menu.Item>
    </Menu>
);

export const SiderCompany: FC<PropsType> = ({onClick}) => {
    return <div className={s.siderCompany}>
        <p>Company</p>
        <div className={""}>
            <Dropdown overlay={dropdownMenu} trigger={["click"]}>
                <a onClick={onClick}>
                    <Space>
                        <div className={s.menuDropdownItemActive}>
                            <div className={s.menuDropdownItemImgActive}>
                                <img src={elStore}/>
                            </div>
                            <div className={s.menuDropdownItemTextActive}>
                                <span>
                                    {
                                        String("El store official").length < 12
                                            ? String("El store official")
                                            : String("El store official").slice(0, 12) + "..."
                                    }
                                </span>
                            </div>
                        </div>
                        <DownOutlined/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    </div>;
}