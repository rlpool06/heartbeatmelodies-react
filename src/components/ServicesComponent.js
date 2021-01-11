import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Services extends Component {
    render() {
        return(
            <div className="bgImg">
                <Jumbotron fluid>
                        <div className="container-fluid d-flex justify-content-center mt-auto">
                            <img src="fwdlogos/Heartbeat Melodies WHT.png" alt="Heartbeat Melodies" width= "50%" />
                        </div>
                </Jumbotron>
            </div>
        );
    };
}

export default Services;