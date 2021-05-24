import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; import ReactLoading from 'react-loading';

import renderHTML from 'react-render-html';
import "./SingleMemberPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';
import { Link } from 'react-router-dom';

function SingleMemberPageComponent(props) {
    const member_id = props.match.params.member_id;

    const member = props.members.filter((member) => {
        return member.id.toString() === member_id;
    })[0]



    console.log(`member`, member)

    function generate_projects_cards(projects_list) {
        const projects = projects_list.map((project, index) => {
            return (
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Link to={`/KNOWLEDGECENTER/PROJECTS/${project.id}`}>
                        <div className="project_card">
                            <div style={{ width: "100%", height: "250px", borderRadius: "", overflow: "hidden", borderBottom: '1px solid #80808045' }}>
                                <img src={project.image && project.image.url} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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



    return (
        <>
            {/* <div className="back_ground_div" style={{ zIndex: '-1' }}>    </div> */}

            <div id="member_background">
                <div id="member_box">
                    {!!member ?
                        <div style={{ zIndex: '1000' }}>
                            <div id="member_header" style={{ zIndex: '100' }} >

                                <div id="header_img" style={{ backgroundColor: "", padding: "0px", height: "210px", width: "300px", maxWidth: '100%' }}>

                                    {member.entity_image ?
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", overflow: "hidden" }}>
                                            <img src={`${member.entity_image && member.entity_image.url}`}
                                                style={{ width: "300px", height: "auto", }} alt="" />
                                        </div>
                                        :
                                        <img src={`/logo_black.png`}
                                            style={{ width: "300px", height: "auto", position: "relative", top: "50px" }} alt="" />
                                    }
                                </div>



                                <div id="header_text"
                                    style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "210px", justifyContent: "center" }}>
                                    <div id="member_box_title" style={{ textAlign: "start", fontSize: '50px' }}>
                                        <h1>
                                            {member.name}
                                            {/* add title here */}
                                        </h1>
                                    </div>
                                    <div id="member_box_date" style={{ textAlign: "start", fontSize: '30px', color: "#56c7ec" }}>



                                    </div>
                                </div>


                            </div>
                            <div id="member_header_2">
                                <i class="fas fa-award  mr-2"></i>
                                <span>
                                    {member.membership_type.replaceAll("_", " ")}
                                </span>
                            </div>
                            <div id="member_body">
                                <div style={{}}>

                                    <div style={{ width: '100%', margin: "auto" }}>
                                        {member.description}
                                        <Editor value={member.member_page} onChange={(input) => { }} />
                                    </div>
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


                {!!member && !!member.projects && !!member.projects.length > 0 &&
                    <div id="member_projects_box" style={{ backgroundColor: 'transparent', border: '0' }}>
                        <div class="section_header" style={{ marginTop: "10px", alignItems: 'start', textAlign: 'left' }}>
                            <span class="section_header_inner" style={{ fontSize: '34px', }}>Projects</span>
                            <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px' }}></div>
                        </div>
                        <Row>

                            {generate_projects_cards(member.projects)}

                        </Row>
                    </div>
                }
            </div>




        </>

    )
}

export default SingleMemberPageComponent
