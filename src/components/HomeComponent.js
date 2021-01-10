import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Home extends Component {
    render() {
        return(
            <div className="bgOverLay">
                <Jumbotron className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <img src="/fwdlogos/Heartbeat Melodies WHT.png" alt="Heartbeat Melodies" width="50%"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <h2 id="tagLine" font-size="2.5vw" >Capturing the joy of new life.</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
    

}

export default Home;