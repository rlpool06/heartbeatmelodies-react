import React, { Component } from 'react';
import { Jumbotron, Container, Card, CardBody, Row, Col } from 'reactstrap';
import OrderForm from './OrderForm.js';

class Order extends Component {
    render() {
        return(
        <React.Fragment>
            <div className="bgImg">
                <Jumbotron fluid>
                        <div className="container-fluid d-flex justify-content-center mt-auto">
                            <img src="fwdlogos/Heartbeat Melodies WHT.png" alt="Heartbeat Melodies" width= "50%" />
                        </div>
                </Jumbotron>

                <Container className="p-5">
                    <Card className="card-body-background2">
                        <CardBody>
                            <Row >
                                <Col className="d-flex justify-content-center">
                                    <h1>How To Order</h1>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <p className="text-center">If you'd like to have a custom Heartbeat Melody created for your child, fill out the form below.  Don't forget to upload your audio file!</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <OrderForm />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    
                    
                </Container>
            </div>
        </React.Fragment>
        );
    };
}

export default Order;