import React, { useCallback, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactLoading from "react-loading";

import renderHTML from "react-render-html";
import "./StaffMemberSingleViewPageComponent.css";
import Editor from "./Editor/Editor";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

function s3_map(str) {
  str = str.replace("cebc2", "cebc3");
  str = str.replace("cebc.s3.eu-central", "cebc3.s3.eu-central");
  return str;
}

function StaffMemberSingleViewPageComponent(props) {
  // console.log(props.match.params.Event_id)

  // console.log(`singeprops.staff`, props.staff)
  const member_slug = props.match.params.member_slug;

  const the_member = props.staff.filter(
    (member) => member.slug == member_slug
  )[0]; //leave this as two ==
  // console.log(`the_member`, the_member)

  function generate_entity_views(type) {
    const members_views = the_member.entities.map((member, index) => {
      if (member.membership_type) {
        return (
          <Link className="" to={`/MEMBERSHIP/MEMBERS/${member.slug}`}>
            <div class="member_card">
              <div class="member_card_sub_div">
                <img
                  class="mem_carousel_img"
                  src={s3_map(
                    member.entity_image
                      ? member.entity_image.url
                      : "/assets/images/logo_black.png"
                  )}
                />
              </div>
            </div>
          </Link>
        );
      }
    });
    return members_views;
  }

  function generate_groups_cards(groups_list) {
    const groups = groups_list.map((groups, index) => {
      return (
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <Link
            to={`/ABOUTUS/working_groups/${groups.slug}`}
            style={{ width: "100%" }}
          >
            <div className="member_card">
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  borderRadius: "",
                  overflow: "hidden",
                  borderBottom: "1px solid #80808045",
                }}
              >
                <img
                  src={s3_map(
                    groups.Thumb_nail_image && groups.Thumb_nail_image.url
                  )}
                  alt="wice"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div
                style={{
                  background: "white",
                  width: "100%",
                  minHeight: "60px",
                  color: "black",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>{groups.Name}</div>
              </div>
            </div>
          </Link>
        </Col>
      );
    });
    return groups;
  }

  return (
    <>
      <div className="back_ground_div"> </div>

      <div id="member_background">
        <Container style={{ maxWidth: "90%", marginTop: "200px", display: "" }}>
          <Row className="justify-content-start align-items-stretch">
            <Col className="p-0" md={4} style={{ background: "" }}>
              {!!the_member && (
                <div className="member_image_box">
                  <img
                    src={s3_map(
                      `${
                        the_member.image
                          ? the_member.image.url
                          : "/assets/images/logo_black.png"
                      }`
                    )}
                    style={{ width: "100%", height: "auto" }}
                    alt=""
                  />
                </div>
              )}
            </Col>
            <Col className="p-0" md={7}>
              <div className="member_box">
                {!!the_member ? (
                  <div>
                    <div id="member_header">
                      <div
                        id="header_text"
                        style={{
                          backgroundColor: "",
                          flexGrow: "1",
                          marginLeft: "20px",
                          display: "flex",
                          flexDirection: "column",
                          minHeight: "100px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          id="member_box_title"
                          style={{ textAlign: "start", fontSize: "20px" }}
                        >
                          <h1 style={{ margin: "10px" }}>
                            {" "}
                            {the_member.username}
                          </h1>
                        </div>
                        <div
                          id="member_box_sub_title"
                          style={{ textAlign: "start", fontSize: "15px" }}
                        >
                          <div> {the_member.title}</div>
                        </div>
                      </div>
                    </div>

                    <div id="member_header_2">
                      {!!the_member.linkedin_url && (
                        <div
                          className="linkedin mx-1"
                          style={{
                            fontSize: "20px",
                            justifySelf: "end",
                            border: "solid 1px gray",
                            padding: " 0 7px 0 7px",
                            borderRadius: "3px",
                          }}
                        >
                          <a href={the_member.linkedin_url}>
                            <i
                              className="fab fa-linkedin i_link"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      )}
                      {!!the_member.twitter_url && (
                        <div
                          className="linkedin mx-1"
                          style={{
                            fontSize: "20px",
                            justifySelf: "end",
                            border: "solid 1px gray",
                            padding: " 0 7px 0 7px",
                            borderRadius: "3px",
                          }}
                        >
                          <a href={the_member.twitter_url}>
                            <i
                              className="fab fa-twitter i_link"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      )}
                    </div>

                    <div id="member_body">
                      <div style={{}}>
                        <div style={{ width: "100%", margin: "auto" }}>
                          <Editor
                            value={the_member.about}
                            onChange={(input) => {}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    id="loading_spinner"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "150px",
                    }}
                  >
                    <div style={{ marginTop: "10px" }}>
                      <ReactLoading
                        type={"spin"}
                        color={"#00D2F9"}
                        width={"200px"}
                      />
                    </div>
                  </div>
                )}
              </div>

              {!!the_member && (
                <div>
                  <Row className=" justify-content-center">
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "start",
                        marginTop: "20px",
                        marginBottom: "40px",
                      }}
                    >
                      {generate_entity_views()}
                    </div>
                  </Row>
                </div>
              )}
              {!!the_member && the_member.programmes_and_groups.length > 0 && (
                <>
                  <Row className="title_row">
                    <div className="section_header section_header_side">
                      <span className="section_header_inner">Groups</span>
                      <div className="section_header_under"></div>
                    </div>
                  </Row>
                  <Row style={{ marginBottom: "20px" }}>
                    {generate_groups_cards(the_member.programmes_and_groups)}
                  </Row>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default StaffMemberSingleViewPageComponent;
