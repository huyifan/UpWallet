/**
 * Created by hugo on 2017/9/21.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'
export default class LineView extends Component {
    constructor() {
        super()
        this.state = {}

    }

    static defaultProps = {
        text: '',
        src: '',
        textView: '',
        hasLineView: false,
        imageView: null,
        textView: null,
        leftImgView: null,
        rightView:null,
        rightText:'',
        hasArrow:false,
    }


    render() {

        let leftImg = this.props.leftImgView ? this.props.leftImgView :
            <img className="item-img" src={this.props.src}/>


        let textView = this.props.textView ? this.props.textView :
            <p className="item-text">{this.props.text}</p>

        let hasArrow=this.props.hasArrow?<img className="item-img-right" src={require('../../image/ic_arrow.png')}/>:null



        let rightTextView =this.props.rightText? <p className="item-text-right">{this.props.rightText}</p>:null

        let rightView=this.props.rightView?this.props.rightView:(hasArrow?hasArrow:rightTextView)

        return (
            <Link>
                <div className="view-line-div">
                    {leftImg}
                    {textView}
                    {rightView}
                </div>
            </Link>
        )
    }
}