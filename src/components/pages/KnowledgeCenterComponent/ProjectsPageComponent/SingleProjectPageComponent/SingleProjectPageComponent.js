import React, { useCallback, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactLoading from "react-loading";

import renderHTML from "react-render-html";
import "./SingleProjectPageComponent.css";
import Editor from "./Editor/Editor";
import { Col, Container, Row } from "reactstrap";

import moment from "moment";
import { Link } from "react-router-dom";

function s3_map(str) {
  str = str.replace("cebc2", "cebc3");
  str = str.replace("cebc.s3.eu-central", "cebc3.s3.eu-central");
  return str;
}

function SingleProjectPageComponent(props) {
  const project_slug = props.match.params.project_slug;

  const the_project = props.projects.filter(
    (project) => project.slug == project_slug
  )[0]; //leave this as two ==

  function generate_entity_views(type) {
    const members_views = the_project.entities.map((member, index) => {
      if (member.membership_type) {
        return (
          <Link className="" to={`/MEMBERSHIP/MEMBERS/${member.slug}`}>
            <div class="member_card">
              <div class="member_card_sub_div">
                <img
                  class="mem_carousel_img"
                  src={s3_map(member.entity_image && member.entity_image.url)}
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
                  src={s3_map(groups.Thumb_nail_image.url)}
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

      <div id="project_background">
        <Container style={{ maxWidth: "90%", marginTop: "200px", display: "" }}>
          <Row className="justify-content-start align-items-stretch">
            <Col className="p-0" md={4} style={{ background: "" }}>
              {!!props.projects.length > 0 && (
                <div className="project_image_box">
                  <img
                    src={s3_map(
                      `${the_project.image && the_project.image.url}`
                    )}
                    style={{ width: "100%", height: "auto" }}
                    alt=""
                  />
                </div>
              )}
            </Col>
            <Col className="p-0" md={7}>
              <div className="project_box">
                {!!props.projects.length > 0 ? (
                  <div>
                    <div id="project_header">
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
                          id="project_box_title"
                          style={{ textAlign: "start", fontSize: "20px" }}
                        >
                          <h1> {the_project.title}</h1>
                        </div>
                      </div>
                    </div>
                    <div id="project_header_2"></div>
                    <div id="project_body">
                      <div style={{}}>
                        <div style={{ width: "100%", margin: "auto" }}>
                          <Editor
                            value={the_project.about}
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

              {!!props.projects.length > 0 && (
                <div>
                  <Row className="title_row">
                    <div className="section_header ">
                      <span className="section_header_inner">
                        project details
                      </span>
                      <div className="section_header_under"></div>
                    </div>
                  </Row>
                  <div className="project_details_box">
                    <Row style={{ minHeight: "30px" }}>
                      <Col className="details_title" xs={6} md={3}>
                        Category :
                      </Col>
                      <Col md={8} xs={6} className="details_value">
                        {the_project.category}
                      </Col>
                    </Row>
                    <Row style={{ minHeight: "30px" }}>
                      <Col md={3} xs={6} className="details_title">
                        Location :
                      </Col>
                      <Col md={8} xs={6} className="details_value">
                        {the_project.location}
                      </Col>
                    </Row>
                    <Row style={{ minHeight: "30px" }}>
                      <Col md={3} xs={6} className="details_title">
                        Completed :
                      </Col>
                      <Col md={8} xs={6} className="details_value">
                        {the_project.completed}
                      </Col>
                    </Row>
                  </div>
                </div>
              )}

              {!!the_project &&
                the_project.entities &&
                the_project.entities.length > 0 && (
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
              {!!the_project && the_project.programmes_and_groups.length > 0 && (
                <>
                  <Row className="title_row">
                    <div className="section_header section_header_side">
                      <span className="section_header_inner">Groups</span>
                      <div className="section_header_under"></div>
                    </div>
                  </Row>
                  <Row style={{ marginBottom: "20px" }}>
                    {generate_groups_cards(the_project.programmes_and_groups)}
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

export default SingleProjectPageComponent;
