import React, {Component} from 'react';
import './App.scss';
import {HashRouter, Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";

import "antd/dist/antd.css";
import {Layout, Menu} from 'antd';
import {OrdersPage} from "./components/OrdersPage/OrdersPage";
import dashboard from './media/dashboard.png'
import orders from './media/orders.png'
import balances from './media/balances.png'
import withdrawal from './media/withdrawal.png'
import companySettings from './media/companySettings.png'
import support from './media/support.png'
import {CollapseButton} from "./components/Sider/CollapseButton/CollapseButton";
import {SiderHeader} from "./components/Sider/SiderHeader/SiderHeader";
import {SiderCompany} from "./components/Sider/SiderCompany/SiderCompany";
import {SiderAccount} from "./components/Sider/SiderAccount/SiderAccount";

const {Content, Footer, Sider} = Layout;

const items = [
    {
        label: <Link to='#'>
            <div className={'menuSidebarItem'}>
                <div className={'menuSidebarImageBox'}><img src={dashboard}/></div>
                <div className={'menuSidebarTextBox'}>Dashboard</div>
            </div>
        </Link>,
        key: 'item-1'
    },
    {
        label: <Link to='/orders'>
            <div className={'menuSidebarItem active'}>
                <div className={'menuSidebarImageBox'}><img src={orders}/></div>
                <div className={'menuSidebarTextBox'}>Orders</div>
            </div>
        </Link>,
        key: 'item-2'
    },
    {
        label: <Link to='#'>
            <div className={'menuSidebarItem'}>
                <div className={'menuSidebarImageBox'}><img src={balances}/></div>
                <div className={'menuSidebarTextBox'}>Balances</div>
            </div>
        </Link>,
        key: 'item-3'
    },
    {
        label: <Link to='#'>
            <div className={'menuSidebarItem'}>
                <div className={'menuSidebarImageBox'}><img src={withdrawal}/></div>
                <div className={'menuSidebarTextBox'}>Withdrawal</div>
            </div>
        </Link>,
        key: 'item-4'
    },
    {
        label: <Link to='#'>
            <div className={'menuSidebarItem'}>
                <div className={'menuSidebarImageBox'}><img src={companySettings}/></div>
                <div className={'menuSidebarTextBox'}>Company settings</div>
            </div>
        </Link>,
        key: 'item-5'
    },
    {
        label: <Link to='#'>
            <div className={'menuSidebarItem'}>
                <div className={'menuSidebarImageBox'}><img src={support}/></div>
                <div className={'menuSidebarTextBox'}>Support</div>
            </div>
        </Link>,
        key: 'item-6'
    }
];

class App extends Component {

    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    toggleClass = () => {
        const el = document.getElementsByClassName('ant-layout-sider-zero-width-trigger')[0]

        if (el) {
            if (el.classList.contains('antZeroWidthTriggerDontCollapsed')) {
                el.classList.remove('antZeroWidthTriggerDontCollapsed')
            } else {
                el.classList.add('antZeroWidthTriggerDontCollapsed')
            }
        }
    }

    onCollapseClick = () => {
        setTimeout(() => {
            const sidebar = document.getElementsByClassName('ant-layout-sider-children')[0]
            if (sidebar.classList.contains('collapsedSidebarInsides')) {
                sidebar.classList.remove('collapsedSidebarInsides')
            } else {
                sidebar.classList.add('collapsedSidebarInsides')
            }
        }, 40)
    }

    render() {
        return ( /*<div>*/
            <Layout className={'layoutMain'}>
                <CollapseButton collapsed={this.state.collapsed} onClick={() => {
                    this.toggle()
                    this.onCollapseClick()
                }}/>
                <Sider
                    className={this.state.collapsed ? 'siderAntd hidden' : 'siderAntd'}
                    theme="light"
                >
                    <SiderHeader/>
                    <SiderCompany onClick={e => e.preventDefault()}/>
                    <div>
                        <p className={'menuTitle'}>Menu</p>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            items={items}
                            className={'menuAntd'}
                        >
                        </Menu>
                    </div>
                    <SiderAccount onClick={e => e.preventDefault()}/>
                </Sider>
                <Layout>
                    <Content style={{margin: '0 16px'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <Switch>
                                <Route exact path='/'
                                       render={() => <Redirect to={"/orders"}/>}/>
                                <Route path='/orders'>
                                    <OrdersPage/>
                                </Route>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}></Footer>
                </Layout>
            </Layout>
        );
    }
}

const AppContainer = compose<React.ComponentType>(withRouter)(App);

const CryptoApp: React.FC = () => {
    return <HashRouter>
        {/*<Provider store={}>*/}
        <AppContainer/>
        {/*</Provider>*/}
    </HashRouter>
}

export default CryptoApp;