import React from "react";
import "./AmbassadorsPageComponent.css";
import {
  Col,
  Container,
  Row,
  Card,
  CardText,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";
import ReactLoading from "react-loading";

import { Link } from "react-router-dom";

function s3_map(str) {
  str = str.replace("cebc2", "cebc3");
  str = str.replace("cebc.s3.eu-central", "cebc3.s3.eu-central");
  return str;
}

function AmbassadorsPageComponent(props) {
  function create_staff_view(staff, position) {
    const staff_view_array = staff.map((member, index) => {
      if (member.position === position) {
        return (
          <Col
            className="board_col my-2 mx-lg-2"
            md={4}
            lg={3}
            style={{ marginBottom: "20px" }}
          >
            <div
              className="board_div mb-2 d-flex justify-content-stretch"
              style={{
                borderStyle: "none",
                backgroundColor: "",
                height: "100%",
              }}
            >
              <Card
                style={{
                  height: "100%",
                  width: "90%",
                  maxWidth: "250px",
                  boxShadow: "1px 3px 6px 1px #80808042",
                }}
              >
                <Link
                  to={`/ABOUTUS/STAFF/${member.slug}`}
                  style={{ color: "black" }}
                >
                  <div
                    className="card_title_container"
                    style={{
                      padding: "10px",
                      fontWeight: "bold",
                      height: "60px",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                    tag="h5"
                  >
                    {member.username}
                  </div>
                </Link>
                <div
                  className="card_image_container"
                  style={{ height: "200px" }}
                >
                  <img
                    src={s3_map(
                      member.image
                        ? member.image.url
                        : "/assets/images/logo_black.png"
                    )}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                </div>
                <CardBody
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <CardText>{member.title}</CardText>
                </CardBody>

                <CardFooter style={{ padding: "5px" }}>
                  <div className="linkedin" style={{ fontSize: "18px" }}>
                    <a href={member.Linkedin_url}>
                      <i
                        className="fab fa-linkedin i_link"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </Col>
        );
      }
    });
    return staff_view_array;
  }

  if (props.staff.length === 0) {
    return (
      <Container>
        <Row>
          <div style={{ height: "100vh", margin: "auto", marginTop: "200px" }}>
            <ReactLoading type={"spin"} color={"#00D2F9"} width={"20vw"} />
          </div>
        </Row>
      </Container>
    );
  } else {
    return (
      <div style={{ marginBottom: "30px" }}>
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
                <span class="sub_page_header_inner">Ambassadors</span>
                <div className="sub_page_header_under"></div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container id="board_content" style={{ marginTop: "70px" }}>
          <Row className=" justify-content-center align-items-stretch">
            {create_staff_view(props.staff, "ambassador")}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AmbassadorsPageComponent;
