/**
 * Created by hugo on 2017/9/21.
 */
import React, {Component} from 'react';
import {Grid} from 'antd-mobile';
import Perf from 'react-addons-perf'
const  win=window
win.Perf=Perf
const data = Array.from(new Array(12)).map((_var, i) => ({
    text: `${i}`
}))
var arr = []
export default class PwdKeyBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            styleName: props.styleName,
            hasNum: [],
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({styleName: nextProps.styleName});
    }



    shouldComponentUpdate(nextProps, nextState) {

        console.log(nextState.count + "|" + this.state.count+"|"+nextProps.styleName)
        if(nextState.count===this.state.count&&nextProps.styleName!=="animated fadeInUp"){
            return false
        }
        // console.log(nextState.state.hasNum[2] + "|" + this.state.hasNum[2])
        return true

    }

    /**
     * 隐藏支付密码的控件框
     */
    handleCancelInputContainer() {
        arr=[]
        this.setState({
            styleName: 'animated fadeOutDown',
            count:0,
            cell1:'',
            cell2:'',
            cell3:'',
            cell4:'',
            cell5:'',
            cell6:'',
            hasNum:arr
        })
    }


    /**
     *绘制6位秘密输入框
     * @returns {Array}
     */
    renderInputCell() {
        var doms = []
        for (var i = 0; i < 6; i++) {
            doms.push(<div key={i} className="key-board-cell">
                <img style={this.state.hasNum[i] === 'true' ? null : {visibility: 'hidden'}}
                     src={require('../../image/ic_circle.png')}/>
            </div>)
        }
        return doms
    }

    /**
     * 处理宫格的点击事件
     * @param index
     */
    handleItemClick(index) {
        if (index !== 9 && index !== 11) {
            arr[this.state.count] = 'true'
            this.setState({hasNum: arr})

            if (this.state.count !== 6)
                this.setState({
                    count: this.state.count + 1
                })
        } else if (index === 11) {
            arr[this.state.count-1] = 'false'

            this.setState({hasNum: arr})

            if (this.state.count !== 0)
                this.setState({
                    count: this.state.count - 1
                })
        }
    }

    /**
     * 绘制每一个键盘
     * @param dataItem
     * @returns {XML}
     */
    renderKeyboard(dataItem) {
        if (dataItem.text === '9') {
            return <div style={{backgroundColor: '#f7f7f7', height: '100%'}}>

            </div>
        } else if (dataItem.text === '10') {
            return <div style={{textAlign: 'center'}}>
                <p className="key-board-num">0</p>
            </div>
        } else if (dataItem.text === '11') {
            return <div style={{textAlign: 'center', backgroundColor: '#f7f7f7', height: '100%'}}>
                <img className="key-board-ic-back" src={require('../../image/ic_input_back.png')}/>
            </div>
        }

        return <div style={{textAlign: 'center'}}>
            <p className="key-board-num">{parseInt(dataItem.text) + 1}</p>
        </div>
    }


    render() {
        let styleName = this.state.styleName

        return (<div>
                {/*密码控件*/}

                {/*背景层*/}
                <div
                    className={styleName === 'key-board-invisible' ? "key-board-invisible" : styleName + " key-board-bg"}
                    onClick={() => this.handleCancelInputContainer()}
                >
                </div>

                {/*样式层*/}
                <div className={this.state.styleName + " key-board-container"}>
                    <div className="key-board-title">
                        <img style={{display: 'inline'}}
                             src={require('../../image/ic_close.png')}
                             onClick={this.handleCancelInputContainer.bind(this)}/>
                        <p className="key-board-title-center-text" style={{display: 'inline'}}>支付密码</p>
                        <p className="key-board-title-right-text" style={{display: 'inline'}}>忘记密码？</p>
                        <div className="view-line"/>
                    </div>


                    <div className="key-board-input">
                        {this.renderInputCell()}
                    </div>

                    <p className="key-board-center-text">请输入支付密码完成操作</p>

                    <div className="key-board">
                        <Grid
                            data={data}
                            columnNum={3}
                            hasLine={true}
                            renderItem={(dataItem) => this.renderKeyboard(dataItem)}
                            onClick={(el, index) => this.handleItemClick(index)}
                        />
                    </div>

                </div>
            </div>
        )
    }
}