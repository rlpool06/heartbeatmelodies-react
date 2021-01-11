import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Carousel from './CarouselComponent.js';

class About extends Component {
    render() {
        return(
        <div className="bgImg">
            <React.Fragment>
                <Jumbotron fluid>
                        <div className="container-fluid d-flex justify-content-center mt-auto">
                            <img src="fwdlogos/Heartbeat Melodies WHT.png" alt="Heartbeat Melodies" width= "50%" />
                        </div>
                </Jumbotron>

                <Carousel />
            
            </React.Fragment>


                
            
        </div>
        );
    };
}

export default About;