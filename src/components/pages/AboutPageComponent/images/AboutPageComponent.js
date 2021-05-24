import React from 'react'
import {
    Col, Container, Row, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap'
import "./AboutPageComponent.css"
import hero from "./hero.png"
import hero2 from "./hero.png"

import intro_img from "./CEBCWebHeader.jpg"
import event from "./Clean-Air-Forum-Photo-1-385x250.jpg"

import quote from "./quote3.png"
import lead from "./lead.jpg"
import ce from "./ce.jpg"
import gvt from "./gvt.jpg"
import a from "./1.png"
import b from "./2.png"
import c from "./3.png"
import d from "./4.png"
import f from "./6.png"
import wice from "./WomeninCleanEnergy.jpg"
import Member from "./Member.jpg"
import NEVC from "./NEVC.jpg"

import aa from "./board/aa.png"



import NavbarSlider from "./components/NavbarSlider/NavbarSlider";

function AboutPageComponent() {


    return (
        <div>
            <div style={{ color: "#FFF" }} >
                <NavbarSlider />
            </div>

            <div style={{ overflow: "hidden" }}>




                {/* <div className="back_image" style={{ width: "1100px", height: "1100px", position: "absolute", right: "-45vw", top: "60vh" }}></div> */}


                <div style={{ width: "100%", height: "2000px", position: "absolute", top: "", right: "", overflow: "hidden" }}  >
                    <img src="/assets/images/sha1.jpg" alt="" style={{ width: "100%", height: "auto", position: "absolute", top: "-200px", right: "-45vw" }} />
                </div>
                <Container style={{ marginTop: "150px", marginBottom: "150px", }}>
                    <Col sm="12">
                        <div className="section_head_title" >
                            <div className="panel__title">
                                vision and mission
                                </div>
                        </div>
                    </Col>
                    <Row style={{ position: "relative", top: "" }}>

                        <Col md={{ size: 6 }}>
                            <div className="media">
                                <div className="vision_icon" style={{}}>
                                    <i className="solid  fas fa-hands-helping"></i>
                                </div>

                                <div className="media-body align-content-start text-left">
                                    <h3 className="mt-0 media_header">leading forum</h3>
                                    Establish a leading forum for companies and government entities focused on the development and deployment of clean energy in the MENA region;
                                </div>
                            </div>

                        </Col>
                        <Col md={{ size: 6, order: 2, offset: 6 }}>
                            <div className="media">
                                <div className="vision_icon" style={{}}>
                                    <i class="solid fas fa-charging-station"></i>
                                </div>

                                <div className="media-body align-content-start text-left">
                                    <h3 className="mt-0 media_header">Promote the clean energy</h3>
                                    Promote the clean energy industry beginning to flourish in the region and inform the wider community of the benefits of the sector;
                                </div>
                            </div>

                        </Col>


                    </Row>
                    <Row style={{ position: "relative", top: "" }}>

                        <Col md={{ size: 6 }}>
                            <div className="media">
                                <div className="vision_icon" style={{}}>
                                    <i class="fas fa-file-contract"></i>
                                </div>

                                <div className="media-body align-content-start text-left">
                                    <h3 className="mt-0 media_header">Collaborate with governments</h3>
                                    Collaborate with government agencies and other stakeholders in policy development and regulation of this rapidly developing and exciting sector;
                                </div>
                            </div>

                        </Col>
                        <Col md={{ size: 6, order: 2, offset: 6 }}>
                            <div className="media">
                                <div className="vision_icon" style={{}}>
                                    <i class="fas fa-chess"></i>
                                </div>

                                <div className="media-body align-content-start text-left">
                                    <h3 className="mt-0 media_header">strategic alliances</h3>
                                    Develop a series of strategic alliances with research institutions, international associations, media and others to drive the delivery of clean energy solutions for MENA;
                                </div>
                            </div>

                        </Col>

                    </Row>
                    <Row style={{ position: "relative", top: "" }}>

                        <Col md={{ size: 6 }}>
                            <div className="media">
                                <div className="vision_icon" style={{}}>
                                    <i class="solid  fas fa-lightbulb"></i>
                                </div>

                                <div className="media-body align-content-start text-left">
                                    <h3 className="mt-0 media_header">data and information</h3>
                                    Coordinate the gathering of data and information on the sector to ensure relevant benchmarking and transparency in the sectors development;
                                </div>
                            </div>

                        </Col>
                        <Col md={{ size: 6, order: 2, offset: 6 }}>
                            <div className="media">
                                <div className="vision_icon" style={{}}>
                                    <i class="  fas  fa-university"></i>
                                </div>

                                <div className="media-body align-content-start text-left">
                                    <h3 className="mt-0 media_header"> assist governments</h3>
                                    Support and assist governments, industry and the community in the region to meet low carbon targets and sustainability goals.
                                    </div>
                            </div>

                        </Col>

                    </Row>







                    <div id="sdg_container">
                        {/* <div id="sdgbg"></div> */}
                        <Row id="SDGs_row" className="justify-content-center">
                            <Col sm="12">
                                <div className="section_head_title" >
                                    <div className="panel__title">
                                        We work with an aim to achieve thee
                                        Sustainable Development Goals (SDddGs)
                                    </div>
                                </div>
                            </Col>
                            <Col className="SDGs_col justify-content-center align-items-center d-flex flex-column mb-5" md="2">
                                <div className="SDGs_div mb-2">
                                    <img src={a} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                <div className="SDGs_title">SDGs</div>
                            </Col>
                            <Col className="SDGs_col justify-content-center align-items-center d-flex flex-column mb-5" md="2">
                                <div className="SDGs_div mb-2">
                                    <img src={b} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                <div className="SDGs_title">SDGs</div>
                            </Col>
                            <Col className="SDGs_col justify-content-center align-items-center d-flex flex-column mb-5" md="2">
                                <div className="SDGs_div mb-2">
                                    <img src={c} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                <div className="SDGs_title">SDGs</div>
                            </Col>
                            <Col className="SDGs_col justify-content-center align-items-center d-flex flex-column mb-5" md="2">
                                <div className="SDGs_div mb-2">
                                    <img src={d} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                <div className="SDGs_title">SDGs</div>
                            </Col>
                            <Col className="SDGs_col justify-content-center align-items-center d-flex flex-column mb-5" md="2">
                                <div className="SDGs_div mb-2">
                                    <img src={f} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                <div className="SDGs_title">SDGs</div>
                            </Col>
                        </Row>


                    </div>div
                    <Row id="working_area_row" className="justify-content-center">

                        <Col sm="12">
                            <div className="section_head_title" >
                                <div className="panel__title">
                                    OUR WORKING AREA
                                </div>
                            </div>
                        </Col>


                        <Col id="working_area_col_1" className=" justify-content-center align-items-center d-flex flex-column" md="4">

                            <div className="vision_mission_col justify-content-center align-items-center d-flex flex-column my-4" md="12">
                                <div className="working_area_icon mb-2" >
                                    <img src={wice} style={{ objectFit: "cover", width: "100%", height: "100%" }} alt="" />
                                </div>
                                <div className="working_area_icob_title">PROGRAMMES</div>
                            </div>
                            <div className="vision_mission_col justify-content-center align-items-center d-flex flex-column my-4" md="12">
                                <div className="working_area_icon mb-2">
                                    <img src={Member} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                <div className="working_area_icob_title">EVENTS</div>
                            </div>
                            <div className="vision_mission_col justify-content-center align-items-center d-flex flex-column my-4" md="12">
                                <div className="working_area_icon mb-2">
                                    <img src={NEVC} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                <div className="working_area_icob_title">WORKING GROUPS</div>
                            </div>

                        </Col>

                        <Col id="working_area_col_2" className=" justify-content-center align-items-center d-flex flex-column " md="8">
                            <div className="working_area_div_2 mb-2 d-flex flex-column" style={{ height: "100%", width: "100%" }} >
                                <div className=" justify-content-center align-items-center d-flex flex-column ">
                                    <div style={{ height: "40%", width: "100%", backgroundColor: "red", marginBottom: "10px " }}>
                                        <img src={event} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    </div>
                                    <div style={{ height: "40%", width: "100%", backgroundColor: "red" }}>
                                        <img src={event} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>

                </Container>

                <Container className="partition_separator board_separator" fluid>
                    <div>
                        <div className="panel__title">
                            THE CEBC BOARD
                        </div>
                    </div>
                </Container>

                <Container id="board_content" >
                    <Row className=" justify-content-center align-items-center">
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3" >
                            <div className="board_div mb-2">
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>


                    </Row>
                </Container>

                <Container className="partition_separator board_separator" fluid>

                    <div className="panel__title">
                        BOARD ADVISORY COMMITTEE
                    </div>
                </Container>

                <Container id="board_content_2" >
                    <Row className=" justify-content-center align-items-center" >
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3" >
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>



                    </Row>
                </Container>

                <Container className="partition_separator board_separator" fluid>
                    <div className="panel__title">
                        CEBC TEAM
                    </div>
                </Container>

                <Container id="board_content_3" >
                    <Row className=" justify-content-center align-items-center" >
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3" >
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                            <div className="board_div mb-2">

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                    </CardBody>
                                    <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                    <CardBody>
                                        <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                        <CardLink href="#"> Link</CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>div
        </div>
    )
}

export default AboutPageComponent
