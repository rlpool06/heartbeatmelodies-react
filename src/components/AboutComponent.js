import React, { Component } from 'react';
import { Jumbotron, Card, CardBody, Row, Col, Container } from 'reactstrap';
import Carousel from './CarouselComponent.js';

class About extends Component {
    render() {
        return(
        
        <React.Fragment>
            <div className="bgImg">
                <Jumbotron fluid>
                        <div className="d-flex justify-content-center mt-auto">
                            <img src="fwdlogos/Heartbeat Melodies WHT.png" alt="Heartbeat Melodies" width= "50%" />
                        </div>
                </Jumbotron>

                <Container>
                    <Card className="card-body-background2">
                        <CardBody>
                            <Row>
                                <Col lg={6}>
                                    <h3>Our Story</h3>
                                    <p>The story of Heartbeat Melodies begins with a gift.  In 2018, my wife and I were awaiting the arrival of our baby girl.  This was to be our first child so everything we could find to commemorate this new season found it's way into our shopping cart.  Baby gadgets, toys, cute clothes, photo albums, everything started piling up as we celebrated this new baby girl.</p> 
                                    <p>Knowing my wife's desire to capture the excitement of pregnancy, I wanted to make something truly unique.  I started thinking through some of the most memorable moments we had experienced and hearing our daughter’s heartbeat for the first time was truly unforgettable.  Using my background in recording and music production, I decided to take an audio clip of my daughter’s heartbeat and create a short song as a gift for my wife.</p>
                                </Col>
                                <Col lg={6}>
                                    <img src='./img/ourstory.jpg' alt="Our story" className="img-fluid" />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col>
                                    <p>Of course, after both of us listened together, we were in tears.  A few weeks later, she played the song at her baby shower and it evoked the same reaction from everyone in the room.  Soon after, we started getting asked by friends if I did this for anyone else.  I started writing more songs for friends, and even a song for our niece.  Through writing these songs, the idea for Heartbeat Melodies was born.</p>
                                    <p>I’ve always had a passion for creating and playing music.  I also believe music has the capability of reminding us of special moments in our lives, taking us back to those emotions, feelings, and memories.  Through Heartbeat Melodies,   I hope to provide a unique experience for expecting parents that captures the joy and excitement of new life.</p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <Card className="card-body-background2 mt-5" >
                        <CardBody className="text-center justify-content-center">
                            <h2 className="row-content">Testimonials</h2>
                            <p>See what people are saying about us!</p>
                        </CardBody>
                    </Card>

                    <Carousel />

                    
                </Container>

                
            </div>
        </React.Fragment>


                
            
        
        );
    };
}

export default About;