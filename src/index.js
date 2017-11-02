import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PageAddCard} from './js/page/PageAddCard'
import {PageScaner} from './js/page/PageScaner'
import {PageCardInfo} from './js/page/PageCardInfo'
import registerServiceWorker from './registerServiceWorker';
import {Route, Router, hashHistory} from 'react-router'
ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/addCard" component={PageAddCard}/>
            <Route path="/pageScaner" component={PageScaner}/>
            <Route path="/cardInfo" component={PageCardInfo}/>
        </Router>
    ),
    document.getElementById('root'));
registerServiceWorker();
