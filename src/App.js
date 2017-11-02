import React, {Component} from 'react';
import {Button, Icon} from 'antd-mobile';
import './App.css';
import {BottomBar} from "./js/component/BottomBar";
import {TitleBar} from "./js/component/TitleBar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TitleBar/>
                <BottomBar/>

            </div>
        );
    }
}

export default App;
