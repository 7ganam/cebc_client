import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./ProjectsPageComponent.css";

function s3_map(str) {
  str = str.replace("cebc2", "cebc3");
  str = str.replace("cebc.s3.eu-central", "cebc3.s3.eu-central");
  return str;
}

function ProjectsPageComponent(props) {
  function generate_projects_cards() {
    const projects = props.projects.map((project, index) => {
      return (
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <Link to={`/KNOWLEDGECENTER/PROJECTS/${project.slug}`}>
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
                  src={s3_map(project.image && project.image.url)}
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
                <div>{project.title}</div>
              </div>
            </div>
          </Link>
        </Col>
      );
    });
    return projects;
  }

  return (
    <div style={{ marginTop: "10px", marginBottom: "100px" }}>
      <Container
        className="sub_page_title_container"
        style={{ zIndex: "99", position: "relative" }}
      >
        <Row className=" justify-content-center">
          <Col>
            <div class="sub_page_header">
              <span class="sub_page_header_inner">Projects</span>
              <div className="sub_page_header_under"></div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="back_ground_div"> </div>
        <Row>{generate_projects_cards()}</Row>
      </Container>
    </div>
  );
}

export default ProjectsPageComponent;
