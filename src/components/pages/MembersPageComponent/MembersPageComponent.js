import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./MembersPageComponent.css";
import { Link } from "react-router-dom";

function s3_map(str) {
  str = str.replace("cebc2", "cebc3");
  str = str.replace("cebc.s3.eu-central", "cebc3.s3.eu-central");
  return str;
}

function MembersPageComponent(props) {
  function generate_assoicate_members_views(type) {
    const members_views = props.members.map((member, index) => {
      if (member.membership_type === type) {
        return (
          <Link className="" to={`/MEMBERSHIP/MEMBERS/${member.slug}`}>
            <div class="member_card">
              {member.entity_image ? (
                <div class="member_card_sub_div2">
                  <img
                    class="mem_carousel_img"
                    src={s3_map(member.entity_image && member.entity_image.url)}
                    alt="member"
                  />
                </div>
              ) : (
                <div class="member_card_sub_div2 mem_carousel_sub_elem_text">
                  <div class="mem_carousel_name">{member.name}</div>
                </div>
              )}
            </div>
          </Link>
        );
      }
    });
    return members_views;
  }

  return (
    <div>
      <div className="background_image_div">
        <img
          src="/assets/images/hero.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Container className="sub_page_title_container">
        <Row className=" justify-content-center">
          <Col>
            <div class="sub_page_header">
              <span class="sub_page_header_inner">Members directory</span>
              <div className="sub_page_header_under"></div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "30px" }}>
        <Row className="title_row">
          <div className="section_header section_header_side">
            <span className="section_header_inner">PARTNER MEMBERS</span>
            <div className="section_header_under"></div>
          </div>
        </Row>
        <Row className="justify-content-center justify-content-center justify-content-md-start">
          <div
            className="justify-content-center justify-content-center justify-content-md-start"
            style={{
              display: "flex",
              maxWidth: "100%",
              flexWrap: "wrap",
              marginTop: "20px",
              marginBottom: "40px",
              zIndex: "2",
            }}
          >
            {generate_assoicate_members_views("partner_member_entity")}
          </div>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          backgroundColor: "#F7F7F7",
          paddingTop: "20px",
          paddingBottom: "100px",
          marginTop: "0px",
          marginBottom: "50px",
        }}
      >
        <Container>
          <Row className="title_row">
            <div className="section_header section_header_side">
              <span className="section_header_inner">CORPORATE MEMBERS</span>
              <div className="section_header_under"></div>
            </div>
          </Row>

          <Row className=" justify-content-center justify-content-md-start">
            <div
              className="justify-content-center justify-content-center justify-content-md-start"
              style={{
                display: "flex",
                maxWidth: "100%",
                flexWrap: "wrap",
                justifyContent: "start",
                marginTop: "20px",
                marginBottom: "40px",
                zIndex: "2",
              }}
            >
              {generate_assoicate_members_views("corporate_member_entity")}
            </div>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row className="title_row">
          <div className="section_header section_header_side">
            <span className="section_header_inner">ASSOCIATE MEMBERS</span>
            <div className="section_header_under"></div>
          </div>
        </Row>

        <Row className=" justify-content-center justify-content-md-start">
          <div
            className="justify-content-center justify-content-center justify-content-md-start"
            style={{
              display: "flex",
              maxWidth: "100%",
              flexWrap: "wrap",
              justifyContent: "start",
              marginTop: "20px",
              marginBottom: "40px",
              zIndex: "2",
            }}
          >
            {generate_assoicate_members_views("assoicate_member_entity")}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MembersPageComponent;
