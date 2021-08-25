import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';

import renderHTML from 'react-render-html';
import "./SingleReportPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';
import { Link } from 'react-router-dom';



function s3_map(str) {
    str = str.replace('cebc2', 'cebc3');
    str = str.replace('cebc.s3.eu-central', 'cebc3.s3.eu-central');
    return str
}



function SingleReportPageComponent(props) {

    // console.log(props.match.params.Event_id)
    console.log(`singeprops.reports`, props.reports)
    const report_slug = props.match.params.report_slug;
    console.log(`report_slug`, report_slug)

    const the_report = props.reports.filter((report) => report.slug == report_slug)[0] //leave this as two ==

    console.log(`the_report`, the_report)

    function generate_entity_views(type) {

        // console.log(`props.members`, props.members)
        const members_views = the_report.entities.map((member, index) => {
            if (member.membership_type) {
                return (

                    <Link className="" to={`/MEMBERSHIP/MEMBERS/${member.slug}`}>
                        <div class="member_card">
                            <div class="member_card_sub_div">
                                <img class="mem_carousel_img" src={s3_map(member.entity_image && member.entity_image.url)} />
                            </div>
                        </div>
                    </Link>
                )
            }
        })
        return members_views

    }



    function generate_groups_cards(groups_list) {
        const groups = groups_list.map((groups, index) => {
            return (
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Link to={`/ABOUTUS/working_groups/${groups.slug}`}>
                        <div className="project_card">
                            <div style={{ width: "100%", height: "250px", borderRadius: "", overflow: "hidden", borderBottom: '1px solid #80808045' }}>
                                <img src={s3_map(groups.Thumb_nail_image && groups.Thumb_nail_image.url)} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>

                            <div style={{ background: "white", width: "100%", minHeight: "60px", color: "black", fontSize: "16px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <div >
                                    {groups.Name}
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            )

        })
        return groups;
    }


    console.log(`the_report`, the_report)
    return (

        <>

            <div className="back_ground_div">    </div>

            <div id="report_background">
                <Container style={{ maxWidth: '90%', marginTop: '200px', display: '' }}>
                    <Row className='justify-content-start align-items-stretch'>
                        <Col className='p-0' md={3} style={{ background: '', }}>
                            {!!props.reports.length > 0 &&
                                <div className="report_image_box">
                                    {!!the_report && the_report.image ?
                                        <img className="side_report_image" src={s3_map(`${the_report.image && the_report.image.url}`)} style={{ width: "100%", height: "auto", }} alt="" />
                                        :
                                        <img className="side_report_image" src={"/assets/images/logo_black.png"} style={{ width: "100%", height: "auto", }} alt="" />
                                    }
                                    {!!the_report && !!props.reports.length > 0 &&
                                        <div className="open_report_button">
                                            <a target="_blank" href={s3_map(the_report.file && the_report.file.url)} style={{ textDecoration: 'none' }} rel="noreferrer">
                                                <div className="report_publication_button">
                                                    <div>Open </div>
                                                    <i className="fas fa-external-link-alt ml-3"></i>
                                                </div>
                                            </a>
                                        </div>
                                    }
                                </div>
                            }


                        </Col>

                        <Col className='p-0' md={7}>
                            <div className="report_box">
                                {!!the_report && !!props.reports.length > 0 ?
                                    <div>
                                        <div id="report_header" >

                                            <div id="header_text"
                                                style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "200", justifyContent: "center" }}
                                            >
                                                <div id="report_box_title" style={{ textAlign: "center", fontSize: '20px' }}>
                                                    <h1> {the_report.title}</h1>
                                                </div>

                                            </div>


                                        </div>
                                        <div id="report_header_2">

                                        </div>
                                        <div id="report_body">
                                            <div style={{}}>
                                                <div style={{ width: '100%', margin: "auto" }}><Editor value={the_report.description} onChange={(input) => { }} /></div>
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
                            {/* 
                            {!!the_report && !!props.reports.length > 0 &&
                                <div>
                                    <Row className=" justify-content-center">
                                        <Col style={{ paddingTop: "0px" }}>
                                            <div class="section_header">
                                                <span class="section_header_inner">
                                                    REPORT DETAILS
                                                </span>
                                                <div className="section_header_under"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="report_details_box">
                                        <Row style={{ minHeight: "30px" }}>
                                            <Col className="details_title " xs={6} md={3} >
                                                Category :
                                            </Col>
                                            <Col xs={6} md={8} className="details_value">
                                                {the_report.type}
                                            </Col>
                                        </Row>

                                        <Row style={{ minHeight: "30px" }}>
                                            <Col md={3} xs={6} className="details_title">
                                                date :
                                            </Col>
                                            <Col md={8} xs={6} className="details_value">
                                                {the_report.date}
                                            </Col>
                                        </Row>


                                    </div>
                                </div>
                            } */}

                            {!!props.reports.length > 0 && the_report && the_report.entities.length > 0 &&
                                <div>

                                    <Row className="title_row">
                                        <div className="section_header section_header_side" >
                                            <span className="section_header_inner"     >
                                                Members
                                            </span>
                                            <div className="section_header_under" ></div>
                                        </div>
                                    </Row>
                                    <Row className=" justify-content-center">
                                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "start", marginTop: "20px", marginBottom: "40px" }}>
                                            {generate_entity_views()}
                                        </div>
                                    </Row>
                                </div>
                            }
                            {!!the_report && the_report.programmes_and_groups.length > 0 &&
                                <>


                                    <Row className="title_row">
                                        <div className="section_header section_header_side" >
                                            <span className="section_header_inner"     >
                                                Groups
                                            </span>
                                            <div className="section_header_under" ></div>
                                        </div>
                                    </Row>
                                    <Row style={{ marginBottom: '20px', }}>
                                        {generate_groups_cards(the_report.programmes_and_groups)}
                                    </Row>

                                </>
                            }

                        </Col>
                    </Row>
                </Container>

            </div >

        </>
    )
}

export default SingleReportPageComponent
