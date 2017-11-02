/**
 * Created by hugo on 2017/9/21.
 */
import React, { Component } from 'react';
export default class ImageText extends Component{
    constructor(){
        super()
        this.state={

        }

    }

    static defaultProps = {
        text: '',
        imageUrl:'',
        textView:'',
        hasLineView: false,
        imageView:null,
        textView:null,
        itemClick:null
    }


    render(){

        let imageView = this.props.imageView ? this.props.imageView :
            <img  src={this.props.imageUrl}/>


        let textView = this.props.textView ? this.props.textView :
            <div>{this.props.text}</div>

      return(
        <div
            className="boxContainer"
            onClick={this.props.itemClick}
        >
                {imageView}
                {textView}
        </div>
      )
    }
}