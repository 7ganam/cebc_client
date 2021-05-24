import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./PartnersPageComponent.css"
import { Link } from "react-router-dom";

function PartnersPageComponent(props) {


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
            <Container style={{ marginTop: "200px", zIndex: '2' }}>
                <Row className=" justify-content-center">
                    <Col >
                        <div class="section_header">
                            <span class="section_header_inner">
                                Partners
                            </span>
                            <div className="section_header_under"></div>
                        </div>
                    </Col>
                </Row>

                <Row className=" justify-content-center">
                    <div style={{ display: "flex", maxWidth: "80%", flexWrap: "wrap", justifyContent: "start", marginTop: "20px", marginBottom: "40px", zIndex: '2' }}>
                        {generate_assoicate_members_views("partner_entity")}
                    </div>
                </Row>


            </Container>
        </div>
    )
}

export default PartnersPageComponent
