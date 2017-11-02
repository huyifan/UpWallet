/**
 * Created by hugo on 2017/9/15.
 */

import React, {Component} from 'react';
import {Grid} from 'antd-mobile';
import {Flex, WhiteSpace} from 'antd-mobile';
import ImageText from "../component/ImageText";
import {Row, Col} from 'antd'
import LineView from "../component/LineView";
import QrReader from 'react-qr-reader'
import {TitleBar} from "../component/TitleBar";



export class PageScaner extends Component {

    constructor(props){
        super(props)
        this.state = {
            delay: 100,
            result: 'No result',
        }

        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data){
        this.setState({
            result: data,
        })
    }
    handleError(err){
        console.error(err)
    }

    // openImageDialog() {
    //     this.refs.qrReader1.openImageDialog()
    // }

    render() {

        const previewStyle = {
            height: 700,
            width: 620,
            opacity: 0.5,
        }

        return <div className="App">
            <TitleBar
                title="扫一扫"
                hasBack={true}
            />

                <QrReader

                    ref="qrReader1"
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
                {/*<input type="button" value="Submit QR Code" onClick={this.openImageDialog} />*/}
                <p>{this.state.result}</p>

        </div>

    }
}

