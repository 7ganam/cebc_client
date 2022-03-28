import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; import ReactLoading from 'react-loading';

import renderHTML from 'react-render-html';
import "./SingleMemberPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';
import { Link } from 'react-router-dom';


function s3_map(str) {
    str = str.replace('cebc2', 'cebc3');
    str = str.replace('cebc.s3.eu-central', 'cebc3.s3.eu-central');
    return str
}


function SingleMemberPageComponent(props) {
    const member_slug = props.match.params.member_slug;

    const member = props.members.filter((member) => {
        return member.slug.toString() === member_slug;
    })[0]




    function generate_projects_cards(projects_list) {
        const projects = projects_list.map((project, index) => {
            return (
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Link to={`/KNOWLEDGECENTER/PROJECTS/${project.slug}`}>
                        <div className="project_card">
                            <div style={{ width: "100%", height: "250px", borderRadius: "", overflow: "hidden", borderBottom: '1px solid #80808045' }}>
                                <img src={s3_map(project.image && project.image.url)} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>

                            <div style={{ background: "white", width: "100%", minHeight: "60px", color: "black", fontSize: "16px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <div >
                                    {project.title}
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            )

        })
        return projects;
    }

    function generate_members_view(users) {
        // console.log(`the_group.users`, the_group.users)
        const members = users.map((member) => {
            return (

                <div className='member_container'
                    style={{ display: 'flex', flexDirection: 'column' }}
                >

                    <Link to={`/ABOUTUS/STAFF/${member.slug}`} style={{ textDecoration: 'none' }} >
                        <div className='entity_image_container' style={{ width: '100%', height: '170px' }}>
                            <img className='entity_image' src={s3_map(member.image && member.image.url)} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt='member' />
                        </div>
                        <div className='member_text'>
                            <div className="member_name"> {member.username}</div>
                            <div className="member_position"> {member.title}</div>
                            {/* <div className="member_Entity"> {member.Entity}</div> */}
                        </div>
                    </Link>
                </div>

            )
        })
        return members;
    }

    function generate_reports_views(report_puplications) {

        const members_views = report_puplications.map((report, index) => {
            return (
                <Link className="report_link" to={`/KNOWLEDGECENTER/REPORTS/${report.slug}`}>

                    <div className='report_container'       >
                        <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                        {` ${report.title}`}

                    </div>

                </Link>
            )

        })
        return members_views

    }

    function generate_case_studies_views(case_studies) {

        const members_views = case_studies.map((case_study, index) => {
            return (
                <Link className="report_link" to={`/KNOWLEDGECENTER/CASE_STUDIES/${case_study.slug}`}>

                    <div className='report_container'       >
                        <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                        {` ${case_study.title}`}

                    </div>

                </Link>
            )

        })
        return members_views

    }


    function generate_news_views(news) {

        const members_views = news.map((news_post, index) => {
            return (
                <Link className="report_link" to={`/EVENTS_NEWS/NEWS/${news_post.slug}`}>

                    <div className='report_container'       >
                        <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                        {` ${news_post.title}`}

                    </div>

                </Link>
            )

        })
        return members_views

    }


    return (
        <>


            <div id="member_background">
                <Container style={{ marginTop: '200px' }}>
                    <Row className='justify-content-start align-items-stretch'>
                        <Col className='p-0' md={4} style={{ background: '', }}>
                            {!!member &&
                                <div className="report_image_box">
                                    {member.entity_image ?
                                        <img className="side_report_image" src={s3_map(`${member.entity_image && member.entity_image.url}`)} style={{ width: "100%", height: "auto", }} alt="" />
                                        :
                                        <img className="side_report_image" src={s3_map("/assets/images/logo_black.png")} style={{ width: "100%", height: "auto", }} alt="" />
                                    }
                                </div>
                            }

                        </Col>


                        <Col className='p-0' md={7}>

                            <div id="member_box" className="member_box" style={{ width: '100%' }} >
                                {!!member ?
                                    <div style={{ zIndex: '1000' }}>
                                        <div id="member_header" style={{ zIndex: '100' }} >


                                            <div id="header_text"
                                                style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "210", justifyContent: "center" }}>
                                                <div id="member_box_title" style={{ textAlign: "center", fontSize: '70px' }}>
                                                    <h1>
                                                        {member.name}
                                                    </h1>
                                                </div>
                                                <div id="member_box_date" style={{ textAlign: "start", fontSize: '30px', color: "#56c7ec" }}>
                                                </div>
                                            </div>


                                        </div>
                                        <div id="member_header_2">
                                            <i class="fas fa-award  mr-2"></i>
                                            {/* <span>
                                                {member.membership_type.replaceAll("_", " ")}
                                            </span> */}
                                        </div>
                                        <div id="member_body">
                                            <div style={{}}>

                                                <div style={{ width: '100%', margin: "auto" }}>
                                                    <div className='member_description'> {member.description}</div>
                                                    <Editor value={member.entity_page} onChange={(input) => { }} />
                                                </div>

                                                {member.entity_website &&
                                                    <div className="open_report_button" style={{ marginTop: '20px' }}>
                                                        <a target="_blank" href={member.entity_website} style={{ textDecoration: 'none' }} rel="noreferrer">
                                                            <div className="report_publication_button" style={{ height: '35px', fontSize: '20px' }}>
                                                                <div>Website </div>
                                                                <i className="fas fa-external-link-alt ml-3"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    :
                                    <div id="loading_spinner" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }} >
                                        <div style={{ marginTop: "0px" }}>
                                            <ReactLoading type={"spin"} color={"#00D2F9"} width={"15vw"} />
                                        </div>
                                    </div>

                                }

                            </div>

                            {!!member && !!member.projects && !!member.projects.length > 0 &&
                                <>
                                    <Row className="title_row">
                                        <div className="section_header section_header_side" >
                                            <span className="section_header_inner"     >
                                                Projects
                                            </span>
                                            <div className="section_header_under" ></div>
                                        </div>
                                    </Row>

                                    <Row>

                                        {generate_projects_cards(member.projects)}

                                    </Row>
                                </>
                            }
                            {!!member && !!member.users && !!member.users.length > 0 &&
                                <Container>

                                    <Row className="title_row">
                                        <div className="section_header section_header_side" >
                                            <span className="section_header_inner"     >
                                                Members
                                            </span>
                                            <div className="section_header_under" ></div>
                                        </div>
                                    </Row>
                                    <Row>

                                        {generate_members_view(member.users)}

                                    </Row>

                                </Container>
                            }
                            {!!member && !!member.reports_publications && !!member.reports_publications.length > 0 &&
                                <Container>

                                    <Row className="title_row">
                                        <div className="section_header section_header_side" >
                                            <span className="section_header_inner"     >
                                                Publications
                                            </span>
                                            <div className="section_header_under" ></div>
                                        </div>
                                    </Row>
                                    <Row>

                                        {generate_reports_views(member.reports_publications)}

                                    </Row>

                                </Container>
                            }
                            {!!member && !!member.case_studies && !!member.case_studies.length > 0 &&
                                <>
                                    <Container>

                                        <Row className="title_row">
                                            <div className="section_header section_header_side" >
                                                <span className="section_header_inner"     >
                                                    Case Studies
                                                </span>
                                                <div className="section_header_under" ></div>
                                            </div>
                                        </Row>
                                        <Row>

                                            {generate_case_studies_views(member.case_studies)}

                                        </Row>

                                    </Container>
                                </>
                            }

                            {!!member && !!member.news && !!member.news.length > 0 &&
                                <>
                                    <Container>

                                        <Row className="title_row">
                                            <div className="section_header section_header_side" >
                                                <span className="section_header_inner"     >
                                                    News
                                                </span>
                                                <div className="section_header_under" ></div>
                                            </div>
                                        </Row>
                                        <Row>

                                            {generate_news_views(member.news)}

                                        </Row>

                                    </Container>
                                </>
                            }



                        </Col>
                    </Row>
                </Container>


            </div>




        </>

    )
}

export default SingleMemberPageComponent
