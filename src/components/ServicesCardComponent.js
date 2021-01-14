import React from 'react';
import { Card, CardBody, CardImg, CardTitle, Row, Col } from 'reactstrap';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';

const SERVICES = [
    {
        image: './img/microphone-solid.svg',
        title: 'RECORD THE HEART BEAT',
        caption: `Grab a quick 30-60 second audio recording of your baby's heartbeat. You can do this at your doctor appointment or with an at-home monitor.`,
        id: '0'

    },
    {
        image: './img/paper-plane-regular-solid.svg',
        title: 'SEND IT IN',
        caption: `Fill out our order form and send in your audio sample.  We'll get to work on creating your song!  Once we finish a first draft, we'll send it to you for review and final touches.`,
        id: '1'

    },
    {
        image: './img/music-solid.svg',
        title: 'ENJOY AND SHARE',
        caption: `It's here! It's time to enjoy your song at home, share it with friends, even show it off at your baby shower.`,
        id: '2'

    },
];

const services = SERVICES;

function RenderServicesCard({services}) {

        return (
                <Card>
                    <CardImg width="100%" src={services.image} alt={services.title} />
                    <CardImgOverlay>
                        <CardTitle className="card-title text-center">{services.title}</CardTitle>
                    </CardImgOverlay>
                    <CardBody>
                        <Row>
                            <Col >
                                <p className="card-text text-center">{services.caption}</p>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
        );

}

function ServicesCard(props) {

    const services = props.services.map(service => {
        return (
            <div key={service.id} className="col">
                <RenderServicesCard service={service} />
            </div>
        )
    });
}

export default ServicesCard;