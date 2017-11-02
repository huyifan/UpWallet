/**
 * Created by hugo on 2017/9/15.
 */

import React, {Component} from 'react';
import {Button} from 'antd-mobile';

import '../../css/pageAddCard.css';
import {TitleBar} from "../component/TitleBar";
import PwdKeyBoard from "../component/PwdKeyBoard";
export class PageAddCard extends Component {

    constructor(props, context) {
        super(props, context);
        this.context.router; // it works
        this.state = {
            count: 0,
            styleName: 'key-board-invisible',
            hasNum: []
        }
    }

    static contextTypes() {
        router: React.PropTypes.object
    }

    handleAddClick() {

        this.setState({
            styleName: 'animated fadeInUp',
        })
    }

    render() {

        return <div className="App">
            <TitleBar
                title="我的银行卡"
                hasBack={true}
            />

            <div className={"no-card-div"}>
                <img className="blank-img" src={require('../../image/ic_no_card.png')}/>
                <Button className="btn" type="ghost"
                    // onClick={() => this.context.router.push('/cardInfo')}
                        onClick={() => this.handleAddClick()}

                >添加银行卡</Button>
            </div>

            <PwdKeyBoard
                styleName={ this.state.styleName}
            />

        </div>
    }
}

PageAddCard.contextTypes = {
    router: Object
}

