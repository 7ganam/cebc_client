import "./SingleWorkingGroupPageComponent.css"
import { Link } from "react-router-dom";



import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';
import { useHttpClient } from "../../../../hooks/http-hook"

import renderHTML from 'react-render-html';

import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';




function SingleWorkingGroupPageComponent(props) {

    // console.log(props.match.params.group_program_id)

    const group_program_id = props.match.params.group_id;
    const the_group = props.programmes_state.LoadedProgrammes.filter((group) => { return group.id == group_program_id })[0]
    // console.log(`the_group`, the_group)

    function generate_members_view() {
        // console.log(`the_group.users`, the_group.users)
        const members = the_group.users.map((member) => {
            return (

                <div className='member_container'
                    style={{ display: 'flex', flexDirection: 'column' }}
                >

                    <Link to={`/ABOUTUS/STAFF/${member.id}`} style={{ textDecoration: 'none' }} >
                        <div className='entity_image_container' style={{ width: '100%', height: '170px' }}>
                            <img className='entity_image' src={member.image && member.image.url} style={{ width: '100%', height: '100%', objectFit: "cover" }} />
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

    function generate_entity_views() {

        console.log(`props.members`, props.members)
        const members_views = the_group.entities.map((member, index) => {
            return (
                <Link className="" to={`/MEMBERSHIP/MEMBERS/${member.id}`}>
                    <div class="group_member_card">
                        <div class="group_member_card_sub_div" style={{ background: 'white' }}>
                            <img class="group_mem_carousel_img" src={member.entity_image.url} />
                        </div>
                    </div>
                </Link>
            )

        })
        return members_views

    }

    function generate_reports_views() {

        const members_views = the_group.report_puplications.map((report, index) => {
            return (
                <Link className="report_link" to={`/KNOWLEDGECENTER/REPORTS/${report.id}`}>

                    <div className='report_container'       >
                        <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                        {` ${report.title}`}

                    </div>

                </Link>
            )

        })
        return members_views

    }

    return (
        <>

            <div id="group_program_background">
                <div
                    id="group_program_box">
                    {!!the_group ?
                        <div>
                            <div id="group_program_header" style={{}}>

                                <div id="header_img" style={{ padding: "0px", height: "100%", width: "100%", position: "absolute" }}>
                                    {the_group.Thumb_nail_image ?

                                        <div
                                            style={{
                                                position: "absolute",
                                                display: "flex", justifyContent: "center", alignItems: "center", width: "100%", overflow: "hidden", height: "100%"
                                            }}>
                                            <img src={`${the_group.Thumb_nail_image.url}`} style={{ width: "100%", height: "100%", objectFit: 'cover', filter: 'brightness(40%)' }} alt="" />
                                        </div>
                                        :
                                        <img src={`/logo_black.png`}
                                            style={{ width: "100%", height: "auto", position: "relative", top: "50px" }} alt="" />
                                    }


                                </div>


                                <div id="group_program_box_title" >
                                    <h1 style={{ fontSize: "50px" }}> {the_group.Name}</h1>
                                </div>

                            </div>
                            <div id="group_program_header_2">
                                <i class="fas fa-chalkboard-teacher mr-2"></i>

                                {`CEBC `}
                                {the_group.Type}
                            </div>
                            <div id="group_program_body">
                                <div style={{}}>
                                    <div style={{ width: '100%', margin: "auto" }}><Editor value={the_group.Page} onChange={(input) => { }} /></div>
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


                <div id="members_container">
                    {!!the_group &&
                        <>
                            {the_group.entities.length > 0 &&
                                <div>
                                    <div class="section_header" style={{ marginTop: "20px", alignItems: 'start', textAlign: 'left', width: '85vw', maxWidth: '1000px', margin: 'auto' }}>
                                        <span class="section_header_inner" style={{ marginTop: "20px", fontSize: '34px', }}>Partners</span>
                                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '0px' }}></div>
                                    </div>
                                    <Row className=" justify-content-center ml-5">
                                        <div style={{ maxWidth: '1000px', margin: 'auto', width: '85vw', display: "flex", flexWrap: "wrap", justifyContent: "start", marginTop: "20px", marginBottom: "40px" }}>
                                            {generate_entity_views()}
                                        </div>
                                    </Row>
                                </div>
                            }
                            {the_group.users.length > 0 &&
                                <div>
                                    <div class="section_header" style={{ marginTop: "20px", alignItems: 'start', textAlign: 'left', width: '85vw', maxWidth: '1000px', margin: 'auto' }}>
                                        <span class="section_header_inner" style={{ fontSize: '34px', }}>Board champions </span>
                                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '0px' }}></div>
                                    </div>
                                    <Row className=" justify-content-center ml-5">
                                        <div style={{ maxWidth: '1000px', margin: 'auto', width: '85vw', display: "flex", flexWrap: "wrap", justifyContent: "start", marginTop: "20px", marginBottom: "40px" }}>
                                            {generate_members_view()}

                                        </div>
                                    </Row>
                                </div>
                            }

                            {the_group.report_puplications.length > 0 &&
                                <div>
                                    <div class="section_header" style={{ marginTop: "20px", alignItems: 'start', textAlign: 'left', width: '85vw', maxWidth: '1000px', margin: 'auto' }}>
                                        <span class="section_header_inner" style={{ fontSize: '34px', }}>Reports & Publications</span>
                                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '0px' }}></div>
                                    </div>
                                    <Container>
                                        <Row className=" justify-content-center">
                                            <div style={{ padding: '0', margin: '20px auto 40px auto', maxWidth: '85vw', width: '100%', display: "flex", flexWrap: "wrap", justifyContent: "start", flexDirection: 'column' }}>
                                                {generate_reports_views()}


                                            </div>
                                        </Row>
                                    </Container>
                                </div>
                            }
                        </>

                    }


                </div>



            </div>


        </>

    )
}

export default SingleWorkingGroupPageComponent
