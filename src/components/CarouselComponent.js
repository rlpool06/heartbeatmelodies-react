import React from 'react';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';

const TESTIMONIES = [
    {
        src: './img/mcphersons.jpg',
        header: '',
        caption: "We are so thankful for the beautiful song Ryan created with our son’s heartbeat. He captured the prayers we had for Leon’s life using his musical talent and turned it into something we will cherish forever.",
        key: '1'
    },
    {
        src: './img/hootons.jpeg',
        header: '',
        caption: "This song is so special to our family! Ryan asked detailed questions in order to make ours super personalized to our son Miller. Still get emotional listening to it even now as he’s almost a year, remembering hearing it for the first time in such a weird season of waiting for him to arrive. It was seriously a gift, and one we can cherish for a long time!",
        key: '2'
    },
    {
        src: './img/berlangas.JPG',
        header: '',
        caption: "The songs created for our two little girls by Heartbeat Melodies will be cherished for a lifetime, and not just by us, but by grandparents, siblings, and even our girls as they grow older. Such a sweet way to be able to continuously listen to their little heartbeats over and over again and remember the blessing these girls are, by having it put to a song uniquely written for each one of them. I could not recommend Heartbeat Melodies enough!",
        key: '3'
    }
];

const Carousel = () => (
    <Row className='mt-5 mb-5'>
        <Col md={8} className="mx-auto">
            <UncontrolledCarousel items={TESTIMONIES} />
        </Col>
    </Row>
);


export default Carousel;
