import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Store from './components/Store/Store';
import Detail from './components/Details/Details';
import Checkout from './components/Checkout/Checkout';




export default (
    <Switch>
        <Route exact path="/" component={Store}/>
        <Route path="/details/:id" component={Detail}></Route>
        <Route path="/checkout" component={Checkout}></Route>
    </Switch>
)

