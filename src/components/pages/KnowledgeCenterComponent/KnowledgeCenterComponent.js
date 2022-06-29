import React from "react";
import "./KnowledgeCenterComponent.css";
import KnowledgeCardComponent from "./KnowledgeCardComponent/KnowledgeCardComponent";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import MapComponent from "./utils/MapComponent/MapComponent";

function KnowledgeCenterComponent() {
  return (
    <div>
      <div className="background_image_div">
        <img
          src="/assets/images/hero.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Container className="page_title_container" fluid>
        <Row className=" justify-content-center">
          <Col>
            <div
              class="page_header"
              style={{
                backgroundImage: `url("https://cebc3.s3.eu-central-1.amazonaws.com/library_f05e806a21.jpg")`,
              }}
            >
              <span class="page_header_inner"> Knowledge Center</span>
              <div className="page_header_under"></div>
              <div id="page_header_shadow"> </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "0px ", marginBottom: "130px " }}>
        <Row className="title_row">
          <div className="section_header section_header_side">
            <span className="section_header_inner">Our Latest Releases</span>
            <div className="section_header_under"></div>
          </div>
        </Row>

        <Row className=" justify-content-center">
          <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
            <Link to="/KNOWLEDGECENTER/REPORTS">
              <div className="working_group_col_div">
                <KnowledgeCardComponent
                  image="https://cebc3.s3.eu-central-1.amazonaws.com/reports_bf47b2be7f.png"
                  title="Publications"
                />
              </div>
            </Link>
          </Col>

          <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
            <Link to="/KNOWLEDGECENTER/WEBINARS">
              <div className="working_group_col_div">
                <KnowledgeCardComponent
                  image="https://cebc3.s3.eu-central-1.amazonaws.com/web_43fb26057b.jpg"
                  title="WEBINARS"
                />
              </div>
            </Link>
          </Col>

          <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
            <Link to="/KNOWLEDGECENTER/CASE_STUDIES">
              <div className="working_group_col_div">
                <KnowledgeCardComponent
                  image="https://cebc3.s3.eu-central-1.amazonaws.com/case_effb64a5fd.jpg"
                  title=" CASE STUDIES"
                />
              </div>
            </Link>
          </Col>
          {/* 
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <Link to="/KNOWLEDGECENTER/BLOGS">
                            <div className="working_group_col_div" >
                                <KnowledgeCardComponent image="https://cebc3.s3.eu-central-1.amazonaws.com/blog_567132f143.jpg" title="BLOG" />
                            </div>
                        </Link>
                    </Col> */}

          {/* <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>

                        <Link to="/KNOWLEDGECENTER/PODCASTS">
                            <div className="working_group_col_div">
                                <KnowledgeCardComponent image="https://cebc3.s3.eu-central-1.amazonaws.com/podcasting_pic_e077e0a2ce.jpg" title="PODCAST" />
                            </div>
                        </Link>

                    </Col> */}

          <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
            <Link to="/KNOWLEDGECENTER/PROJECTS">
              <div className="working_group_col_div">
                <KnowledgeCardComponent
                  image="https://cebc3.s3.eu-central-1.amazonaws.com/news_09e2a5edc5.jfif"
                  title="PROJECTS"
                />
              </div>
            </Link>
          </Col>

          <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
            <Link to="/KNOWLEDGECENTER/PRESENTATIONS">
              <div className="working_group_col_div">
                <KnowledgeCardComponent
                  image="https://cebc3.s3.eu-central-1.amazonaws.com/presentaiotn_59ac70dfef.png"
                  title="PRESENTATIONS"
                />
              </div>
            </Link>
          </Col>

          {/* <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <Link to="/KNOWLEDGECENTER/LINKS">
                            <div className="working_group_col_div">
                                <KnowledgeCardComponent image="https://cebc3.s3.eu-central-1.amazonaws.com/arrow_url_5374a51063.png" title="USEFUL LINKS" />
                            </div>
                        </Link>
                    </Col> */}
          <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
            <Link to="/KNOWLEDGECENTER/NEWSLETTER">
              <div className="working_group_col_div">
                <KnowledgeCardComponent
                  image="./assets/images/newsletter.png"
                  title="NEWSLETTER"
                />
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="title_row" style={{ marginTop: "40px" }}>
          <div className="section_header ">
            <span className="section_header_inner">Browse by country</span>
            <div className="section_header_under"></div>
          </div>
        </Row>
        <Row>
          <MapComponent />
        </Row>
      </Container>
    </div>
  );
}

export default KnowledgeCenterComponent;
