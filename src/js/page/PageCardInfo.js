/**
 * Created by hugo on 2017/9/15.
 */

import React, {Component} from 'react';
import {Grid,Button} from 'antd-mobile';
import {Flex, WhiteSpace} from 'antd-mobile';
import ImageText from "../component/ImageText";
import {Row, Col} from 'antd'
import LineView from "../component/LineView";
import '../../css/pageAddCard.css';
import {TitleBar} from "../component/TitleBar";



export class PageCardInfo extends Component {

    constructor(props, context) {
        super(props, context);
        this.context.router; // it works
    }

    static contextTypes(){
        router: React.PropTypes.object
    }


    render() {


        return <div className="App">
            <TitleBar
                title="绑定应银行卡"
                hasBack={true}
            />
            <div className="no-card-div">

            </div>


        </div>

    }
}

PageCardInfo.contextTypes = {
    router: Object
}

