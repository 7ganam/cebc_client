import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './FaqPageComponent.css'
function FaqPageComponent() {
    return (
        <div style={{ backgroundColor: '#F1F1F1', minHeight: "400px", paddingTop: '100px', paddingBottom: '100px' }}>
            <div class="section_header" style={{ marginTop: "100px", marginBottom: "100px" }}>
                <span class="section_header_inner">   F.A.Q     </span>
                <div className="section_header_under"></div>
            </div>
            <Container>

                <Row>
                    <Col xs={3} sm={2} md={1} style={{ paddingRight: '' }}>
                        <div style={{ width: "50px", height: "50px", backgroundColor: '#FCC744', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', fontWeight: 'bolder', color: "white", maxWidth: "100%", margin: '0' }}>
                            Q
                        </div>
                    </Col>
                    <Col xs={8} sm={8} md={10} style={{ width: "80%", backgroundColor: 'white', display: 'flex', justifyContent: 'start', alignItems: 'center', fontSize: '17px', fontWeight: 'bolder', color: "black" }}>
                        <div>
                            HOW DOES THE CEBC DEFINE CLEAN ENERGY?
                        </div>
                    </Col>
                </Row>

                <Row style={{ marginTop: "10px", marginBottom: '40px' }}>
                    <Col xs={3} sm={2} md={1}>
                        <div style={{ width: "50px", height: "50px", backgroundColor: '#FCC744', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', fontWeight: 'bolder', color: "white" }}>
                            A
                        </div>
                    </Col>
                    <Col xs={8} sm={8} md={10} style={{ width: "80%", backgroundColor: 'white', display: 'flex', justifyContent: 'start', alignItems: 'center', fontSize: '15px', fontWeight: '', color: "#777777", padding: "10px" }}>
                        <div style={{ textAlign: "left" }}>
                            The CEBC’s definition of clean energy includes all renewables technology plus carbon capture and storage and energy efficiency. We are generally supportive of the introduction of nuclear into the region, but are not actively representing the nuclear industry. In relation to energy efficiency we support technologies that can help improve supply side efficiency and support demand side measures to improve the efficient use of electricity, such as smart grids and distributed generation.

                            In relation to energy efficiency we represent technologies used to increase the efficiency of the supply, as well as the demand side of electricity usage including smart grids and distributed generation.
                        </div>
                    </Col>
                </Row>



                <Row>
                    <Col xs={3} sm={2} md={1} style={{ paddingRight: '' }}>
                        <div style={{ width: "50px", height: "50px", backgroundColor: '#FCC744', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', fontWeight: 'bolder', color: "white", maxWidth: "100%", margin: '0' }}>
                            Q
                        </div>
                    </Col>
                    <Col xs={8} sm={8} md={10} style={{ width: "80%", backgroundColor: 'white', display: 'flex', justifyContent: 'start', alignItems: 'center', fontSize: '17px', fontWeight: 'bolder', color: "black" }}>
                        <div>
                            WHICH TECHNOLOGIES DO WE REPRESENT?
                        </div>
                    </Col>
                </Row>

                <Row style={{ marginTop: "10px", marginBottom: '40px' }}>
                    <Col xs={3} sm={2} md={1}>
                        <div style={{ width: "50px", height: "50px", backgroundColor: '#FCC744', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', fontWeight: 'bolder', color: "white" }}>
                            A
                        </div>
                    </Col>
                    <Col xs={8} sm={8} md={10} style={{ width: "80%", backgroundColor: 'white', display: 'flex', justifyContent: 'start', alignItems: 'center', fontSize: '15px', fontWeight: '', color: "#777777", padding: "10px" }}>
                        <div style={{ textAlign: "left" }}>
                            We will represent all technologies relevant to our members provided they fall within a broad definition of Clean Energy.
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default FaqPageComponent
