import React, { Component } from 'react';
import { Jumbotron, Card, CardImg, CardBody, CardTitle, CardText, CardDeck, Row, Col } from 'reactstrap';
import { SERVICES } from '../shared/services';

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
                    <div>
                        <RenderCard 
                            item={service}
                            />
                    </div>
                )
            });
        return(
            <div className="bgImg">
                <Jumbotron fluid>
                        <div className="d-flex justify-content-center mt-auto">
                            <img src="fwdlogos/Heartbeat Melodies WHT.png" alt="Heartbeat Melodies" width= "50%" />
                        </div>
                </Jumbotron>

                <div className="container">
                    <Row>
                        <Col md={4}>
                            {serviceItem}
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}



export default Services;