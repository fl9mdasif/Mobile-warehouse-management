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
    return (
        <Box className="bg-white">
            {/* <h1 style={{
                color: "#101010",
                textAlign: "center",
                marginTop: "-55px",
                marginBottom: "20px",

            }}>
                Xiaomi Bangladesh
            </h1> */}
            <Container className=" text-danger">
                <Row id='row' className="border py-2">
                    <Column id='col' className="text-black">
                        <Heading className=" mt- text-black " >About Us</Heading>
                        <FooterLink className="text-black " href="#">Aim</FooterLink>
                        <FooterLink className="text-black " href="#">Vision</FooterLink>
                        <FooterLink className="text-black " href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading className=" mt- text-black ">Services</Heading>
                        <FooterLink className="text-black " href="#">Writing</FooterLink>
                        <FooterLink className="text-black " href="#">Internships</FooterLink>
                        <FooterLink className="text-black " href="#">Coding</FooterLink>
                        <FooterLink className="text-black " href="#">Teaching</FooterLink>
                    </Column>

                    <Column>
                        <Heading className=" mt- text-black ">Social Media</Heading>
                        <FooterLink className="text-black " href="#">
                            <FontAwesomeIcon icon="fa-brands fa-facebook" />
                            <i className="fab fa-facebook-f">

                                <span className="text-black " style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink className="text-black " href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
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
                        <FooterLink className="text-black " href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
