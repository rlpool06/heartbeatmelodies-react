import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Order from './OrderComponent';
import Services from './ServicesComponent';
import About from './AboutComponent'

class Main extends Component {

    render() {

        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default Main