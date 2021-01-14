import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Order from './OrderComponent';
import Services from './ServicesComponent';
import About from './AboutComponent'
import { SERVICES } from '../shared/services'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            services: SERVICES
        }
    }

    render() {

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route exact path='/services' render={() => <Services services={this.state.services} /> }/>
                    <Route path='/order' component={Order}/>
                    <Redirect to='home' />
                </Switch>
            </div>
        );
    }
}

export default withRouter (Main);