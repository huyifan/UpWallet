/**
 * Created by hugo on 2017/9/15.
 */
import React, {Component} from 'react';
import {Grid} from 'antd-mobile';
import {Flex, Modal} from 'antd-mobile';
import ImageText from "../component/ImageText";
import LineView from "../component/LineView";
import {Link} from 'react-router'
const source = [{'text': '提现', 'icon': require("../../image/ic_tixian.png")},
    {'text': '充值', 'icon': require("../../image/ic_chongzhi.png")},
    {'text': '银行卡', 'icon': require("../../image/ic_yinhangka.png")}]

const data = Array.from(new Array(3)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));
const alert = Modal.alert;
export class PageService extends Component {

    constructor(props, context) {
        super(props, context);
        this.context.router; // it works
    }
    static contextTypes(){
        router: React.PropTypes.object
    }

    postMessage(){
        window.postMessage("true")
        console.log('I am the postMessage')
    }


    render() {



        return <div >

            <div className="page-server-header">
                {/*余额*/}
                <Flex
                    id="p-service-box-1"
                    direction="column"
                >
                    <Flex.Item>
                        ￥ 0.00
                    </Flex.Item>

                    <Flex.Item className="text-light">
                        钱包余额
                    </Flex.Item>

                </Flex>

                {/*扫码+账单*/}
                <Flex
                    id="p-service-box-2"
                >
                    <Flex.Item>
                        <ImageText
                            text="扫一扫"
                            imageUrl={ require('../../image/ic_scaner.png')}
                            itemClick={this.postMessage.bind(this)}
                        />
                    </Flex.Item>

                    <Flex.Item>
                        <ImageText
                            text="付款码"
                            imageUrl={ require('../../image/ic_qr.png')}

                        />
                    </Flex.Item>

                    <Flex.Item>
                        <ImageText
                            text="账单"
                            imageUrl={ require('../../image/ic_list.png')}
                        />
                    </Flex.Item>
                </Flex>
            </div>

            <div className="body">
                <Grid data={source}
                      columnNum={3}
                      renderItem={dataItem => (
                          <ImageText
                              text={dataItem.text}
                              imageUrl={dataItem.icon}
                          />)
                      }

                      onClick={(el, index)=>{
                          switch(index){
                              case 0:
                                  alert('提示', '你还没有可用于提现的银行卡，请先添加一张银行卡', [
                                      { text: '取消', onPress: () => console.log('cancel') },
                                      { text: '添加银行卡', onPress: () => {this.context.router.push('/addCard')} },
                                  ])
                                  break
                              case 1:

                                  alert('提示', '你还没有可用于提现的银行卡，请先添加一张银行卡', [
                                      { text: '取消', onPress: () => console.log('cancel') },
                                      { text: '添加银行卡', onPress: () =>  this.context.router.push('/addCard') },
                                  ])

                                  break
                              case 2:
                                  this.context.router.push('/addCard')
                                  break
                          }
                        }
                      }
                />


                <img className="guanggao" src={require('../../image/ic_zhangdan.png')}/>

                <div className="bottom">
                    <LineView
                        text="支付密码"
                        src={require('../../image/ic_tixian.png')}
                    />

                    <LineView
                        text="小额免密"
                        src={require('../../image/ic_tixian.png')}
                    />

                </div>
            </div>

        </div>
    }
}

PageService.contextTypes = {
    router: Object
}