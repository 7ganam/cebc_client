import { Container, Row } from 'reactstrap'
import './ConsultancyPageComponent.css'
import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';


import Consultancyform from './Consultancyform/Consultancyform'
import Consultantform from './Consultantform/Consultantform'






function ConsultancyPageComponent() {

    const [ConsultancyformisOpen, setConsultancyformIsOpen] = useState(false);
    const toggleConsultancyform = () => setConsultancyformIsOpen(!ConsultancyformisOpen);

    const [ConsultantformisOpen, setConsultantformIsOpen] = useState(false);
    const toggleConsultantform = () => setConsultantformIsOpen(!ConsultantformisOpen);

    return (
        <div style={{
            minHeight: "400px", paddingTop: '120px', paddingBottom: '300px'
        }}>
            <div style={{ width: "100%", height: "900px", position: "absolute", top: "-50px", right: "", overflow: "hidden" }}  >
                <img src="/assets/images/hero.png" alt="" style={{ width: "100%", height: "auto", position: "" }} />
            </div>
            <Row className=" justify-content-center" style={{ width: '90%', margin: 'auto' }}>
                <div class="section_header" style={{ marginTop: "50px", marginBottom: "30px", zIndex: '1' }}>
                    <span class="section_header_inner">
                        CONSULTANCY
                            </span>
                    <div className="section_header_under"></div>
                </div>
            </Row>


            <Container>
                <Row className="title_row">
                    <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400' }}>
                        <span class="section_header_inner" style={{ fontSize: '34px', zIndex: '1' }}>Our services:</span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                    </div>
                </Row>
                <div className='consultancy_services_div'>
                    <img src="/services2.png" alt="" style={{ width: "100%", height: "auto" }} />
                </div>

                <Row className="title_row">
                    <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400' }}>
                        <span class="section_header_inner" style={{ fontSize: '34px', }}>We cover:</span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                    </div>
                </Row>
                <div className='consultancy_services_div'>
                    <img src="/wecover2.png" alt="" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>

                    <Row className="title_row">
                        <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400' }}>
                            <span class="section_header_inner" style={{ fontSize: '34px', }}>apply for consultancy:</span>
                            <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                        </div>
                    </Row>


                    <Button color="warning" onClick={toggleConsultancyform} style={{ marginBottom: '1rem' }}>
                        Show application form
                        <i class="fas fa-caret-down ml-2"></i>
                    </Button>
                    <Collapse isOpen={ConsultancyformisOpen}>
                        <Consultancyform />
                    </Collapse>




                    <Row className="title_row">
                        <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400' }}>
                            <span class="section_header_inner" style={{ fontSize: '34px', }}>Apply to be a consultant :</span>
                            <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                        </div>
                    </Row>

                    <Button color="warning" onClick={toggleConsultantform} style={{ marginBottom: '1rem' }}>
                        Show application form
                        <i class="fas fa-caret-down ml-2"></i>
                    </Button>
                    <Collapse isOpen={ConsultantformisOpen}>
                        <Consultantform />

                    </Collapse>
                </div>
            </Container>



        </div>
    )
}

export default ConsultancyPageComponent
