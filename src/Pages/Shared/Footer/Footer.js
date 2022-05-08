import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './footer.css'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyle";
// import './FooterStyle.js';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <Box className="bg-white">

            <Container className=" text-danger " >
                <Row id='row' className="border py-3 ">
                    <Column id='col' className="text-black">
                        <Heading className="hh mt-  " >About Us</Heading>
                        <FooterLink className="text-black " href="#">Aim</FooterLink>
                        <FooterLink className="text-black " href="#">Vision</FooterLink>
                        <FooterLink className="text-black " href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading className="hh mt-  ">Services</Heading>
                        <FooterLink className="text-black " href="#">Guarantee</FooterLink>
                        <FooterLink className="text-black " href="#">Warranty</FooterLink>
                        <FooterLink className="text-black " href="#">Replacement</FooterLink>

                    </Column>

                    <Column>
                        <Heading className="hh mt-  ">Social Media</Heading>
                        <FooterLink className="text-primary " href="#">
                            <i className="fab fa-facebook" >

                                <span className="text-blac " style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>

                        <FooterLink className="text-black " href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink className="text-danger " href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                    <p className=" copyright text-black text-bold text-center py-2 p-1  d-block  mb-0">Copyright <a className="text-decoration-none" href="https://www.facebook.com/fl9omi" > @fl9mdasif </a> {year}</p>


                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
