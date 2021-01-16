import React, { Component } from 'react';
import { Jumbotron, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { SERVICES } from '../shared/services';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        }
    }

    render() {
        return(
            <div className="container">
                
            </div>
        )
    }
}



export default Services;