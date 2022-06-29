import React, { useCallbackz, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactLoading from "react-loading";

import renderHTML from "react-render-html";
import "./SingleCaseStudyPageComponent.css";
import Editor from "./Editor/Editor";
import { Col, Container, Row } from "reactstrap";

import moment from "moment";
import { Link } from "react-router-dom";

function SingleCaseStudyPageComponent(props) {
  const case_study_slug = props.match.params.case_study_slug;

  const the_case_study = props.case_studies.filter(
    (case_study) => case_study.slug == case_study_slug
  )[0]; //leave this as two ==

  function generate_entity_views(type) {
    const members_views = the_case_study.entities.map((member, index) => {
      if (member.membership_type) {
        return (
          <Link className="" to={`/MEMBERSHIP/MEMBERS/${member.slug}`}>
            <div class="member_card">
              <div class="member_card_sub_div">
                <img
                  class="mem_carousel_img"
                  src={member.entity_image && member.entity_image.url}
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
          <Link to={`/ABOUTUS/working_groups/${groups.slug}`}>
            <div className="project_card">
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
                  src={groups.Thumb_nail_image && groups.Thumb_nail_image.url}
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

      <div id="case_study_background">
        <Container style={{ maxWidth: "90%", marginTop: "200px", display: "" }}>
          <Row className="justify-content-start align-items-stretch">
            <Col className="p-0" md={3} style={{ background: "" }}>
              {!!props.case_studies.length > 0 && (
                <div className="report_image_box">
                  {the_case_study.image ? (
                    <img
                      className="side_report_image"
                      src={`${
                        the_case_study.image && the_case_study.image.url
                      }`}
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                    />
                  ) : (
                    <img
                      className="side_report_image"
                      src={"/assets/images/logo_black.png"}
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                    />
                  )}
                  {!!the_case_study && !!the_case_study.file && (
                    <div className="open_report_button">
                      <a
                        target="_blank"
                        href={!!the_case_study.file && the_case_study.file.url}
                        style={{ textDecoration: "none" }}
                        rel="noreferrer"
                      >
                        <div className="report_publication_button">
                          <div>Open </div>
                          <i className="fas fa-external-link-alt ml-3"></i>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </Col>
            <Col className="p-0" md={7}>
              <div className="case_study_box">
                {!!props.case_studies.length > 0 ? (
                  <div>
                    <div id="case_study_header">
                      <div
                        id="header_text"
                        style={{
                          backgroundColor: "",
                          flexGrow: "1",
                          marginLeft: "20px",
                          display: "flex",
                          flexDirection: "column",
                          minHeight: "210",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          id="case_study_box_title"
                          style={{ textAlign: "start", fontSize: "20px" }}
                        >
                          <h1> {the_case_study.title}</h1>
                        </div>
                      </div>
                    </div>
                    <div id="case_study_header_2"></div>
                    <div id="case_study_body">
                      <div style={{}}>
                        <div style={{ width: "100%", margin: "auto" }}>
                          <Editor
                            value={the_case_study.description}
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
                    <div style={{ marginTop: "100px" }}>
                      <ReactLoading
                        type={"spin"}
                        color={"#00D2F9"}
                        width={"20vw"}
                      />
                    </div>
                  </div>
                )}
              </div>

              {!!the_case_study && (
                <div>
                  <Row className="title_row">
                    <div className="section_header ">
                      <span className="section_header_inner">
                        CASE STUDY DETAILS
                      </span>
                      <div className="section_header_under"></div>
                    </div>
                  </Row>
                  <div className="case_study_details_box">
                    <Row style={{ minHeight: "30px" }}>
                      <Col className="details_title" xs={6} md={3}>
                        Category :
                      </Col>
                      <Col xs={6} md={8} className="details_value">
                        {the_case_study.type}
                      </Col>
                    </Row>

                    <Row style={{ minHeight: "30px" }}>
                      <Col xs={6} md={3} className="details_title">
                        date :
                      </Col>
                      <Col xs={6} md={8} className="details_value">
                        {the_case_study.date}
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {!!the_case_study && the_case_study.entities.length > 0 && (
                <div>
                  <Row className="title_row">
                    <div className="section_header section_header_side">
                      <span className="section_header_inner">Members</span>
                      <div className="section_header_under"></div>
                    </div>
                  </Row>
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
              {!!the_case_study &&
                the_case_study.programmes_and_groups.length > 0 && (
                  <>
                    <Row className="title_row">
                      <div className="section_header section_header_side">
                        <span className="section_header_inner">Groups</span>
                        <div className="section_header_under"></div>
                      </div>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                      {generate_groups_cards(
                        the_case_study.programmes_and_groups
                      )}
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

export default SingleCaseStudyPageComponent;
