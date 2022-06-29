import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./AcademyPageComponent.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

function s3_map(str) {
  str = str.replace("cebc2", "cebc3");
  str = str.replace("cebc.s3.eu-central", "cebc3.s3.eu-central");
  return str;
}

function AcademyPageComponent(props) {
  console.log(`courses`, props.courses);
  let members_courses;
  let cebc_courses;
  if (props.courses) {
    members_courses = props.courses.filter(
      (course) => course.course_type === "member_course"
    );
    cebc_courses = props.courses.filter(
      (course) => course.course_type === "cebc_course"
    );
  }

  function render_courses(courses) {
    const courses_view = courses.map((course, index) => (
      <div className="course_card">
        <Card style={{ height: "100%" }}>
          <CardImg
            top
            width="100%"
            height="170px"
            style={{}}
            src={s3_map(course.image && course.image.url)}
            alt="Card image cap"
          />
          <CardBody
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "3px",
            }}
          >
            <div style={{ flexGrow: "1" }}></div>
            <CardTitle
              tag="h5"
              style={{
                textAlign: "center",
                textOverflow: "ellipsis",
                margin: "10px",
                maxHeight: "48px",
                overflow: "hidden",
              }}
            >
              {course.title}
            </CardTitle>
            <div style={{ flexGrow: "1" }}></div>
            <Link to={"/ACTIVITIES/ACADEMY/" + course.slug}>
              <Button
                style={{ fontWeight: "bold", color: "white" }}
                color="warning"
              >
                VISIT COURSE
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    ));
    return courses_view;
  }

  return (
    <div
      style={{
        minHeight: "400px",
        paddingTop: "0px",
        paddingBottom: "300px",
      }}
    >
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
              <span class="sub_page_header_inner"> COURSES</span>
              <div className="sub_page_header_under"></div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        {/* <Row>
                    <Col style={{ fontFamily: "'Raleway', sans-serif", textAlign: 'left', marginBottom: '30px', marginTop: '90px' }}>
                        CEBC provides courses to help empower Clean energy industries in the MENA region.
                    </Col>
                </Row> */}

        <Row className="title_row mt-5">
          <div className="section_header section_header_side">
            <span className="section_header_inner">CEBC Courses:</span>
            <div className="section_header_under"></div>
          </div>
        </Row>
        <div className="courses_div">
          {props.courses && props.courses.length > 0 && cebc_courses ? (
            <>{render_courses(cebc_courses)}</>
          ) : (
            <div style={{ margin: "auto" }}>
              <div style={{ marginTop: "100px" }}>
                <ReactLoading type={"spin"} color={"#00D2F9"} width={"10vw"} />
              </div>
            </div>
          )}
        </div>

        {props.courses &&
          props.courses.length > 0 &&
          members_courses.length > 0 && (
            <>
              <Row className="title_row mt-5">
                <div className="section_header section_header_side">
                  <span className="section_header_inner">
                    partners courses:
                  </span>
                  <div className="section_header_under"></div>
                </div>
              </Row>
              <div className="courses_div">
                {render_courses(members_courses)}
              </div>
            </>
          )}
      </Container>
    </div>
  );
}

export default AcademyPageComponent;
