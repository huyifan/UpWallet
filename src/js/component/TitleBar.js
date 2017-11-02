/**
 * Created by hugo on 2017/9/15.
 */
import React, {Component} from 'react';
import {Popover, NavBar, Icon} from 'antd-mobile';
import { browserHistory } from 'react-router'
const Item = Popover.Item;

export class TitleBar extends Component {

    state = {
        visible: false,
        selected: '',
    };

    constructor(props, context) {
        super(props, context);
        this.context.router; // it works
    }
    static contextTypes(){
        router: React.PropTypes.object
    }


    static defaultProps = {
        title: 'UP钱包',
        hasBack: false,
    }
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };

    render() {
        let offsetX = -10; // just for pc demo
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
            offsetX = -26;
        }

        let backView = this.props.hasBack ?
            <div className="back-view">
                <img  className="back-img" src={require('../../image/ic_back.png')}/>
                <div className="back-title" >返回</div>
            </div>
            : null
        return (<div>
            <NavBar
                id="titleBar"
                iconName={false}
                 leftContent={backView}
                 onLeftClick={(e)=>{ browserHistory.goBack()}}
                rightContent={
                    <Popover mask
                             overlayClassName="fortest"
                             overlayStyle={{color: 'currentColor'}}
                             visible={this.state.visible}
                             overlay={[
                                 (<Item key="4" value="scan"
                                        icon={<Icon type={require('../../image/ic_scan.svg')} size="xs"/>}
                                        data-seed="logId">扫一扫</Item>),
                                 (<Item key="5" value="special"
                                        icon={<Icon type={require('../../image/ic_my_qr.svg')} size="xs"/>}
                                        style={{whiteSpace: 'nowrap'}}>我的二维码</Item>),
                                 (<Item key="6" value="button ct"
                                        icon={<Icon type={require('../../image/ic_help.svg')} size="xs"/>}>
                                     <span style={{marginRight: 5}}>帮助</span>
                                 </Item>),
                             ]}
                             align={{
                                 overflow: {adjustY: 0, adjustX: 0},
                                 offset: [offsetX, 15],
                             }}
                             onVisibleChange={this.handleVisibleChange}
                             onSelect={this.onSelect}
                    >
                        <div style={{
                            height: '100%',
                            padding: '0 0.3rem',
                            marginRight: '-0.3rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >
                            <Icon type="ellipsis"/>
                        </div>
                    </Popover>
                }
                style={this.props.barStyle ? this.props.barStyle : barStyle}

            >
                <div className="titleText">{this.props.title}</div>
            </NavBar>
        </div>);
    }
}
let barStyle = {
    backgroundColor: '#1d1f41',
    marginBottom:'-.1rem'
}

TitleBar.contextTypes = {
    router: Object
}

