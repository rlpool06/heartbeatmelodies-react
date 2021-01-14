import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardGroup, CardText } from 'reactstrap';

function RenderCardItem({service}) {
    return (
        <CardGroup>
            <Card>
                <CardImg width="100%" src={service.image} alt={service.title}/>
                <CardBody>
                    <CardTitle>{service.title}</CardTitle>
                    <CardText>{service.caption}</CardText>
                </CardBody>
            </Card>
        </CardGroup>
    )
}

function ServicesCard(props) {
    const process = props.services.map(service => {
        return (
            <div key={service.id} className="col-md-5 m-1">
                <RenderCardItem service={service} />
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                {process}
            </div>
        </div>
        )
    
}

export default ServicesCard;