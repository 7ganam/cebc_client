import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';

import renderHTML from 'react-render-html';
import "./SingleJobViewComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';



function SingleJobViewComponent(props) {

    const job_slug = props.match.params.job_slug;

    const the_job = props.jobs.filter((job) => job.slug == job_slug)[0] //leave this as two ==

    return (

        <>

            <div className="back_ground_div">    </div>

            <div id="job_background">
                <Container style={{ maxWidth: '90%', marginTop: '200px', display: '', paddingBottom: '100px' }}>
                    <Row className='justify-content-start align-items-stretch' style={{ margin: 'auto' }}>

                        <Col className='p-0' md={8} style={{ margin: 'auto' }}>
                            <div className="job_box">
                                {!!props.jobs && !!the_job ?
                                    <div>
                                        <div id="job_header" >

                                            <div id="header_text"
                                                style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "210", justifyContent: "center" }}
                                            >
                                                <div id="job_box_title" style={{ textAlign: "center", fontSize: '20px' }}>
                                                    <h1>
                                                        {the_job.title}
                                                    </h1>
                                                </div>

                                            </div>


                                        </div>
                                        <div id="job_header_2">
                                            {/* <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center' }}>

                                                {the_job.Apprenticeship && <Alert color="primary" className="footer_tag">Apprenticeship   </Alert>}
                                                {the_job.Freelance && <Alert color="primary" className="footer_tag">Freelance   </Alert>}
                                                {the_job.FullTime && <Alert color="primary" className="footer_tag">FullTime   </Alert>}
                                                {the_job.Internship && <Alert color="primary" className="footer_tag">Internship   </Alert>}
                                                {the_job.PartTime && <Alert color="primary" className="footer_tag">PartTime   </Alert>}
                                                {the_job.Temporary && <Alert color="primary" className="footer_tag">Temporary   </Alert>}
                                            </div> */}
                                        </div>
                                        <div id="job_body">
                                            <div style={{}}>
                                                <div style={{ width: '100%', margin: "auto" }}><Editor value={the_job.description} onChange={(input) => { }} /></div>
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <div id="loading_spinner" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }} >
                                        <div style={{ marginTop: "100px" }}>
                                            <ReactLoading type={"spin"} color={"#00D2F9"} width={"20vw"} />
                                        </div>
                                    </div>

                                }


                            </div>

                            {props.jobs && !!the_job &&
                                <div>
                                    <Row className=" justify-content-center">
                                        <Col style={{ paddingTop: "0px" }}>
                                            <div class="section_header">
                                                <span class="section_header_inner">
                                                    job DETAILS
                                                </span>
                                                <div className="section_header_under"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                    {the_job && the_job.application_link &&
                                        <Row style={{ minHeight: "30px", marginBottom: '10px' }}>
                                            <Col className="details_title " xs={6} md={3} >
                                                Application link :
                                            </Col>
                                            <Col xs={6} md={8} className="details_value">
                                                {the_job.application_link}
                                            </Col>
                                        </Row>
                                    }

                                    {the_job && the_job.company_name &&
                                        <Row style={{ minHeight: "30px", marginBottom: '10px' }}>
                                            <Col className="details_title" xs={6} md={3}>
                                                Company name :
                                            </Col>
                                            <Col md={8} xs={6} className="details_value">
                                                {the_job.company_name}
                                            </Col>
                                        </Row>
                                    }
                                    {the_job && the_job.contact_email &&
                                        <Row style={{ minHeight: "30px", marginBottom: '10px' }}>
                                            <Col className="details_title" xs={6} md={3}>
                                                Contact email :
                                            </Col>
                                            <Col md={8} xs={6} className="details_value">
                                                {the_job.contact_email}
                                            </Col>
                                        </Row>
                                    }
                                    {the_job && the_job.location &&
                                        <Row style={{ minHeight: "30px", marginBottom: '10px' }}>
                                            <Col className="details_title" xs={6} md={3}>
                                                Location :
                                            </Col>
                                            <Col md={8} xs={6} className="details_value">
                                                {the_job.location}
                                            </Col>
                                        </Row>
                                    }


                                </div>
                            }




                        </Col>
                    </Row>
                </Container>

            </div >

        </>
    )
}

export default SingleJobViewComponent
