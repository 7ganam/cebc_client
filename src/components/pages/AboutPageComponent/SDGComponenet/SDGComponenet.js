import React from "react";
import "./SDGComponenet2.css";
import a from "../images/1.png"
import b from "../images/2.png"
import c from "../images/3.png"
import d from "../images/4.png"
import e from "../images/5.png"
import f from "../images/6.png"
import { Container, Row, Col } from "reactstrap";

function SDGComponenet() {
    return (


        <Container>
            {/* <div id="sdgbg"></div> */}
            <div id="sdg_container">

                <Row id="SDGs_row" className="justify-content-center">
                    <Col sm="12">
                        <div className="section_head_title" >
                            <div className="sdg_title">
                                We work with an aim to achieve the
                                Sustainable Development Goals (SDGs)
                      </div>
                        </div>
                    </Col>

                    <div style={{ zIndex: "12", marginTop: "300px", width: "900px", padding: '0' }}>
                        <div id='one' className='features-grid special'>
                            <div className='feature'>
                                <div className="SDGs_div mb-2">
                                    <img src={a} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                {/* <h4>Magna etiam</h4> */}
                                {/* <p>Lorem ipsum dolor sit amet nulla blandit aliquam</p> */}
                            </div>
                            <div className='feature'>
                                <div className="SDGs_div mb-2">
                                    <img src={b} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                {/* <h4>Ipsum feugiat</h4> */}
                                {/* <p>Lorem ipsum dolor sit amet nulla blandit aliquam</p> */}
                            </div>
                            <div className='feature'>
                                <div className="SDGs_div mb-2">
                                    <img src={c} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                {/* <h4>Nulla tempus</h4> */}
                                {/* <p>Lorem ipsum dolor sit amet nulla blandit aliquam</p> */}
                            </div>
                            <div className='feature'>
                                <div className="SDGs_div mb-2">
                                    <img src={d} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                {/* <h4>Amet aliquam</h4> */}
                                {/* <p>Lorem ipsum dolor sit amet nulla blandit aliquam</p> */}
                            </div>
                            <div className='feature'>
                                <div className="SDGs_div mb-2">
                                    <img src={e} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                {/* <h4>Sed phasellus</h4> */}
                                {/* <p>Lorem ipsum dolor sit amet nulla blandit aliquam</p> */}
                            </div>
                            <div className='feature'>
                                <div className="SDGs_div mb-2">
                                    <img src={f} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                {/* <h4>Aenean lorem</h4> */}
                                {/* <p>Lorem ipsum dolor sit amet nulla blandit aliquam</p> */}
                            </div>
                        </div>
                    </div>

                </Row>

            </div>


        </Container>


    );
}

export default SDGComponenet;
