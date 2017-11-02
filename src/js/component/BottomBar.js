/**
 * Created by hugo on 2017/9/15.
 */
import { TabBar, Icon } from 'antd-mobile';
import React, { Component } from 'react';
import {PageService} from "../page/PageService";
import {PageMy} from "../page/PageMy";
export class BottomBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'service',
            hidden: false,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           hidden: !this.state.hidden,
                       });
                   }}
                >
                    点击切换 tab-bar 显示/隐藏
                </a>
            </div>
        );
    }

    render(){
        return <TabBar
            id="tab-bar"
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
        >
            <TabBar.Item
                icon={<div><img className="tab-item-img" src={require('../../image/ic_server_pre.png')}/></div>}
                selectedIcon={<div><img className="tab-item-img"  src={require('../../image/ic_server_nor.png')}/></div>}
                title={<div className="tab-item-text">服务</div>}
                key="服务"
                selected={this.state.selectedTab === 'service'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'service',
                    });
                }}
            >
                <PageService/>
            </TabBar.Item>


            <TabBar.Item
                icon={<div><img className="tab-item-img" src={require('../../image/ic_my_pre.png')}/></div>}
                selectedIcon={<div><img className="tab-item-img"  src={require('../../image/ic_my_nor.png')}/></div>}
                title={<div className="tab-item-text">我的</div>}
                key="我的"
                selected={this.state.selectedTab === 'my'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'my',
                    });
                }}
            >
                <PageMy/>
            </TabBar.Item>
        </TabBar>
    }
}