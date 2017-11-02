/**
 * Created by hugo on 2017/9/15.
 */

import React, {Component} from 'react';
import {Grid} from 'antd-mobile';
import {Flex, WhiteSpace} from 'antd-mobile';
import ImageText from "../component/ImageText";
import {Row, Col} from 'antd'
import LineView from "../component/LineView";

const source = [{'text': '提现', 'icon': require("../../image/ic_tixian.png")},
    {'text': '充值', 'icon': require("../../image/ic_chongzhi.png")},
    {'text': '银行卡', 'icon': require("../../image/ic_yinhangka.png")}]



export class PageMy extends Component {
    render() {
        return <div className="body">
                <div className="bottom">
                    <LineView
                        text="账户状态"
                        src={require('../../image/ic_zhzt.png')}
                        rightText="正常"

                    />
                    <LineView
                        text="我的余额"
                        src={require('../../image/ic_wdye.png')}
                        rightText="11123.21"
                    />

                    <LineView
                        text="交易记录"
                        src={require('../../image/ic_jyjl.png')}
                        hasArrow={true}
                    />

                </div>
            </div>

    }
}