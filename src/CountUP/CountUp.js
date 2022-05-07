import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import './CountUp.css';
const CountUpDiv = () => {
    return (
        <div>
            <Container className='mt-3'>
                <Row id="product-count" className="justify-content-md-center">
                    <Col id="product-col" className='text-center' xs lg="4">
                        Customers:
                        <span className='span'><CountUp end={46} duration={3.6}></CountUp>+</span>
                    </Col>
                    <Col id="product-col" className='text-center' md="auto">
                        Deliveries:
                        <span className='span'><CountUp end={1600} duration={3.8}></CountUp>+</span>
                    </Col>
                    <Col id="product-col" className='text-center' xs lg="4">
                        Reviews:
                        <span className='span'><CountUp end={300} duration={3.7}></CountUp>+</span>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default CountUpDiv;