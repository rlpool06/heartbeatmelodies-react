import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Order from './OrderComponent';
import Services from './ServicesComponent';
import About from './AboutComponent'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

    render() {

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/services' component={Services}/>
                    <Route exact path='/order' component={Order}/>
                    <Redirect to='home' />
                </Switch>
            </div>
        );
    }
}

export default withRouter (Main);