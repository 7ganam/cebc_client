import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./MembersPageComponent.css"
import { Link } from "react-router-dom";

function MembersPageComponent(props) {


    function generate_assoicate_members_views(type) {

        console.log(`props.members`, props.members)
        const members_views = props.members.map((member, index) => {
            if (member.membership_type === type) {
                return (

                    <Link className="" to={`/MEMBERSHIP/MEMBERS/${member.id}`}>
                        <div class="member_card">
                            <div class="member_card_sub_div2">
                                <img class="mem_carousel_img" src={member.entity_image && member.entity_image.url} />
                            </div>
                        </div>
                    </Link>
                )
            }
        })
        return members_views
    }


    return (
        <div>

            <div style={{ zIndex: '0', width: "100%", height: "800px", position: "absolute", top: "0", right: "", overflow: "hidden" }}  >
                <img src="/assets/images/hero.png" alt="" style={{ width: "100%", height: "auto", position: "", }} />
            </div>

            <Container style={{ marginTop: "200px" }}>

                <Row className=" justify-content-center">
                    <Col >
                        <div class="section_header">
                            <span class="section_header_inner">
                                Members directory
                            </span>
                            <div className="section_header_under"></div>
                        </div>
                    </Col>
                </Row>
                <Row className="title_row ml-2 justify-content-start">
                    <div class="section_header" style={{ marginTop: "50px", alignItems: 'start', textAlign: 'left', fontWeight: '200', zIndex: '2' }}>
                        <span class="section_header_inner" style={{ fontSize: '34px', }}>Partner members</span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                    </div>
                </Row>
                <Row className="justify-content-center justify-content-center justify-content-md-start">
                    <div style={{ display: "flex", maxWidth: "80%", flexWrap: "wrap", justifyContent: "center", marginTop: "20px", marginBottom: "40px", zIndex: '2' }}>
                        {generate_assoicate_members_views("partner_member_entity")}
                    </div>
                </Row>
            </Container>
            <Container fluid style={{ backgroundColor: '#F7F7F7', paddingTop: "20px", paddingBottom: "100px", marginTop: "0px", marginBottom: "50px" }}>

                <Container>

                    <Row className="title_row">
                        <div class="section_header" style={{ marginTop: "50px", alignItems: 'start', textAlign: 'left', fontWeight: '200' }}>
                            <span class="section_header_inner" style={{ fontSize: '34px', }}>Corporate MEMBERS</span>
                            <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                        </div>
                    </Row>
                    <Row className=" justify-content-center justify-content-md-start">
                        <div style={{ display: "flex", maxWidth: "80%", flexWrap: "wrap", justifyContent: "center", marginTop: "20px", marginBottom: "40px", zIndex: '2' }}>
                            {generate_assoicate_members_views("corporate_member_entity")}
                        </div>
                    </Row>
                </Container>
            </Container>


            <Container style={{ marginTop: "" }}>


                <Container>

                    <Row className="title_row">
                        <div class="section_header" style={{ marginTop: "50px", alignItems: 'start', textAlign: 'left', fontWeight: '200' }}>
                            <span class="section_header_inner" style={{ fontSize: '34px', }}>Associate MEMBERS</span>
                            <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                        </div>
                    </Row>

                    <Row className=" justify-content-center justify-content-md-start">
                        <div style={{ display: "flex", maxWidth: "80%", flexWrap: "wrap", justifyContent: "center", marginTop: "20px", marginBottom: "40px", alignItems: "start" }}>
                            {generate_assoicate_members_views("assoicate_member_entity")}
                        </div>
                    </Row>

                </Container>
            </Container>
        </div>
    )
}

export default MembersPageComponent
