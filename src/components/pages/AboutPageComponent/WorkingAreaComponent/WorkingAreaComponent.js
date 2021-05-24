import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import { Carousel } from 'react-responsive-carousel';


import './WorkingAreaComponent.css'
import wice from "../images//WomeninCleanEnergy.jpg"
import Member from "../images//Member.jpg"
import NEVC from "../images/NEVC.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from 'react-router-dom';

function WorkingAreaComponent(props) {

    function generate_carousel_images() {
        let images = props.gallery.map((image, index) =>
        (
            <div>
                <img style={{ height: "300px", width: "auto" }} src={image.url} alt="wice" className="yours-custom-class" />
                <p className="legend">Legend 2</p>
            </div>
        )
        )
        return images;
    }


    return (
        <div style={{ padding: '0 0 80px 0', }}>

            <Container id="main_working_container" fluid >
                <Container id="sub_working_container" >
                    <Row>
                        <Col md={4} className="d-flex justify-content-center align-items-center flex-column align-items-start justify-content-start">
                            <Link to='/ABOUTUS/working_groups' style={{ textDecoration: 'none' }}>
                                <div className="working_card2" style={{ marginBottom: '30px' }}>
                                    <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                        <img src={Member} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>

                                    <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                        <div >  Working groups</div>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                We drive innovation, collaboration and policy change through our Working Groups, focused on three key areas: new energy vehicles, climate finance and green policy.
                            </div>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center align-items-center flex-column align-items-start justify-content-start">
                            <Link to='/ABOUTUS/working_groups' style={{ textDecoration: 'none' }}>
                                <div className="working_card2" style={{ marginBottom: '30px' }}>
                                    <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                        <img src={wice} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>


                                    <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                        <div >  Programmes</div>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                We are very proud of our Women in Clean Energy and CEBC Schools Programmes, which engage thousands of people across the U.A.E., and the wider MENA region.
                            </div>
                        </Col>
                        <Col md={4} className="d-flex justify-content-start align-items-start flex-column align-items-start justify-content-start">
                            <Link to='/EVENTS_NEWS/All' style={{ textDecoration: 'none' }}>
                                <div className="working_card2" style={{ marginBottom: '30px' }}>
                                    <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                        <img src={NEVC} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>

                                    <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                        <div > Events</div>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                We host a number of exciting, engaging events each year, as well as contributing to a number of key events and summits throughout the region.
                            </div>

                        </Col>
                    </Row>
                    <div className="carousel_wrapper">

                        <Carousel autoPlay infiniteLoop >
                            {props.gallery &&
                                generate_carousel_images()
                            }
                        </Carousel>
                    </div>
                </Container>
















            </Container>
        </div >
    )
}

export default WorkingAreaComponent
