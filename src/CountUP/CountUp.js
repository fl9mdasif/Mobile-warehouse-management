import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import './CountUp.css';
const CountUpDiv = () => {
    return (
        <div>
            <Container>
                <Row id="product-count" className="justify-content-md-center">
                    <Col id="product-col" className='text-center' xs lg="4">
                        Satisfying customer:
                        <CountUp end={46}></CountUp>
                    </Col>
                    <Col id="product-col" className='text-center' md="auto">Product Delivered:
                        <CountUp end={1600}></CountUp>+</Col>
                    <Col id="product-col" className='text-center' xs lg="4">
                        Customer Review:
                        <CountUp end={300}></CountUp>+
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default CountUpDiv;