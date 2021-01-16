import React, { Component } from 'react';
import { Jumbotron, Card, CardImg, CardBody, CardTitle, CardText, CardDeck, Row, Col } from 'reactstrap';
import { SERVICES } from '../shared/services';
import ReactPlayer from 'react-player';

function RenderCard({item}) {

    return(
        <CardDeck className="mt-5">
            <Card>
                <CardImg top width="100%" src={item.image} alt={item.title} className="card-img-top"/>
                <CardBody className="card-body-background">
                    <CardTitle tag="h5" className="text-center">{item.title}</CardTitle>
                    <CardText className="text-center">{item.caption}</CardText>
                </CardBody>
            </Card>
        </CardDeck>
    )
}

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        }
    }
    
    render() {
        const serviceItem = this.state.services.map(service => {
            return (
                    <Row className="justify-content-center">
                        <Col xs={5}>
                            <RenderCard 
                                item={service}
                                />
                        </Col>
                    </Row>
                )
            });
        return(
            <div className="bgImg">
                <Jumbotron fluid>
                        <div className="d-flex justify-content-center mt-auto">
                            <img src="fwdlogos/Heartbeat Melodies WHT.png" alt="Heartbeat Melodies" width= "50%" />
                        </div>
                </Jumbotron>

                <div className="container mt-3">
                    <Card className="card-body-background2">
                        <CardBody>
                            <Row className="row-content">
                                <Col className="text-center">
                                    <h1>Services</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col  className="text-center">
                                    <h2>How does it work?</h2>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col xs={10}>
                                    <p   className="text-center">Are you looking for a truly unique way to remember the season of expecting a child?  Let us help you!  We take an audio sample of your baby's heartbeat and turn it into a song!</p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <div>
                        {serviceItem}
                    </div>

                    <Card  className="card-body-background2 mt-5">
                        <CardBody>
                            <Row className="row-content2">
                                <Col className="text-center">
                                    <h2>Hear Some Examples</h2>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col className="text-center">
                                    <p>Each one of these songs were written using the unique heartbeat of that child.  Take a listen! </p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    
                    <Row className="mt-5 pb-5">
                        <Col className="d-flex justify-content-center">
                            <ReactPlayer
                                url='https://soundcloud.com/user-851451515-740713123/sets/heartbeat-melodies' />
                        </Col>
                    </Row>

                </div>

            </div>
        )
    }
}



export default Services;