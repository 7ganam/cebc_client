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
                            {member.entity_image ?
                                <div class="member_card_sub_div2">
                                    <img class="mem_carousel_img" src={member.entity_image && member.entity_image.url} alt='member' />
                                </div>
                                :
                                <div class="member_card_sub_div2 mem_carousel_sub_elem_text">
                                    <div class="mem_carousel_name" >
                                        {member.name}
                                    </div>
                                </div>
                            }
                        </div>

                    </Link>
                )
            }
        })
        return members_views
    }


    return (
        <div>
            <div className='background_image_div' >
                <img src="/assets/images/hero.png" alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <Container className='sub_page_title_container' >
                <Row className=" justify-content-center">
                    <Col>
                        <div class="sub_page_header">
                            <span class="sub_page_header_inner">Partners</span>
                            <div className="sub_page_header_under"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: "100px", marginBottom: "200px", zIndex: '2' }}>


                <Row className=" justify-content-center">
                    <div className="justify-content-center justify-content-center justify-content-md-start"
                        style={{ display: "flex", maxWidth: "80%", flexWrap: "wrap", justifyContent: "start", marginTop: "20px", marginBottom: "40px", zIndex: '2' }}>
                        {generate_assoicate_members_views("partner_entity")}
                    </div>
                </Row>


            </Container>
        </div>
    )
}

export default PartnersPageComponent
