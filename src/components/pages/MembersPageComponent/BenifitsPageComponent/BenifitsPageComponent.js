import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./BenifitsPageComponent.css";
import CallToAction from "../../../shared/CallToAction/CallToAction";
import why from "./why.png";
function BenifitsPageComponent() {
  const data = [
    {
      title:
        "Opportunity to attend CEBC social networking events to establish and build on professional relationships (an event every quarter)",
      PARTNER: true,
      CORPORATE: true,
      ASSOCIATE: true,
    },
    {
      title:
        "Opportunity for free/discounted third-party conferences and events",
      PARTNER: true,
      CORPORATE: true,
      ASSOCIATE: true,
    },
    {
      title: "Right to vote for a CEBC board member",
      PARTNER: true,
      CORPORATE: true,
      ASSOCIATE: true,
    },
    {
      title:
        "Opportunity to contribute content to CEBC’s Newsletter to promote events, updates and activities",
      PARTNER: true,
      CORPORATE: true,
      ASSOCIATE: true,
    },
    {
      title: "Logo on CEBC website and marketing materials",
      PARTNER: true,
      CORPORATE: true,
      ASSOCIATE: "Acknowledgement on CEBC website",
    },
    {
      title:
        "Access to the Members only content of the CEBC website for a number of services including event listings and job postings",
      PARTNER: true,
      CORPORATE: true,
      ASSOCIATE: false,
    },
    {
      title: "Free access to CEBC Events (conferences and seminars)",
      PARTNER: "2 tickets free per event",
      CORPORATE: "1 ticket free per event",
      ASSOCIATE: false,
    },
    {
      title:
        "Discounts for delegates to access CEBC Events (conferences and seminars) – 50% discount per delegate",
      PARTNER: true,
      CORPORATE: true,
      ASSOCIATE: false,
    },
    {
      title:
        "Opportunity to champion/head a working group promoting a specific topic in the clean energy industry culminating in research paper",
      PARTNER: "50% discount per delegate",
      CORPORATE: "25% discount per delegate",
      ASSOCIATE: false,
    },
    {
      title:
        "CEBC to run and manage a webinar (at discounted price compared to market) per year for our partners to engage and communicate with their audiences",
      PARTNER: true,
      CORPORATE: false,
      ASSOCIATE: false,
    },
    {
      title: "Priority speaking opportunities at conferences and events",
      PARTNER: true,
      CORPORATE: false,
      ASSOCIATE: false,
    },
    {
      title: "Right to nominate and vote for a CEBC board member",
      PARTNER: true,
      CORPORATE: false,
      ASSOCIATE: false,
    },
  ];

  function generate_table_view(data) {
    const data_views = data.map((entry, index) => {
      console.log("entry.CORPORATE", typeof entry.ASSOCIATE);
      return (
        <Row
          style={{
            backgroundColor: index % 2 === 1 ? "#eaeaea" : "white",
            minHeight: "50px",
            padding: "15px",
          }}
        >
          <Col
            xs={4}
            md={3}
            className=" "
            style={{
              display: "flex",
              justifyContent: "left",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            {entry.title}
          </Col>

          <Col
            xs={2}
            md={3}
            className=" "
            style={{ fontSize: "30px", color: "gray" }}
          >
            <div className="table_cell">
              {entry.PARTNER && typeof entry.PARTNER === "string" && (
                <div style={{ fontSize: "18px", color: "gray" }}>
                  {entry.PARTNER}
                </div>
              )}
              {entry.PARTNER && typeof entry.PARTNER === "boolean" && (
                <i class="far fa-check-square"></i>
              )}
            </div>
          </Col>
          <Col
            xs={2}
            md={3}
            className=" "
            style={{ fontSize: "30px", color: "gray" }}
          >
            <div className="table_cell">
              {entry.CORPORATE && typeof entry.CORPORATE === "string" && (
                <div style={{ fontSize: "18px", color: "gray" }}>
                  {entry.CORPORATE}
                </div>
              )}
              {entry.CORPORATE && typeof entry.CORPORATE === "boolean" && (
                <i class="far fa-check-square"></i>
              )}
            </div>
          </Col>
          <Col
            xs={2}
            md={3}
            className=" "
            style={{ fontSize: "30px", color: "gray" }}
          >
            <div className="table_cell">
              {entry.ASSOCIATE && typeof entry.ASSOCIATE === "string" && (
                <div style={{ fontSize: "18px", color: "gray" }}>
                  {entry.ASSOCIATE}
                </div>
              )}
              {entry.ASSOCIATE && typeof entry.ASSOCIATE === "boolean" && (
                <i class="far fa-check-square"></i>
              )}
            </div>
          </Col>
        </Row>
      );
    });

    return data_views;
  }

  return (
    <>
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
                backgroundImage: `url("https://cebc3.s3.eu-central-1.amazonaws.com/2000x1125energystorageshutterstock_356374046_b0929ff095.jpg")`,
              }}
            >
              <span class="page_header_inner">
                {" "}
                Membership Benefits & Levels
              </span>
              <div className="page_header_under"></div>
              <div id="page_header_shadow"> </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div
        style={{
          minHeight: "300px",
          paddingTop: "0px",
          paddingBottom: "",
          backgroundColor: "",
        }}
      >
        <Container
          style={{
            zIndex: "2",
            position: "relative",
            marginTop: "0px",
            marginBottom: "50px",
          }}
        >
          <Row className="title_row">
            <div className="section_header section_header_side">
              <span className="section_header_inner">WHY JOIN THE CEBC?</span>
              <div className="section_header_under"></div>
            </div>
          </Row>
          <div
            className="consultancy_services_div my-3"
            style={{ margin: "auto" }}
          >
            <img src={why} alt="" style={{ width: "100%", height: "auto" }} />
          </div>
          <Row>
            <Col md={6}>
              <div className="join_card ">
                <div
                  className="header_text"
                  style={{ fontWeight: "bold", fontSize: "22px" }}
                >
                  {" "}
                  We know the MENA clean energy sector.{" "}
                </div>
                <div className="content_text">
                  We can connect you with likeminded individuals also looking to
                  promote change and innovation in the region.
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="join_card">
                <div
                  className="header_text"
                  style={{ fontWeight: "bold", fontSize: "22px" }}
                >
                  We are on the pulse.{" "}
                </div>
                <div className="content_text">
                  We know the latest news and updates in the MENA region, and
                  share these with our members.
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="join_card">
                <div
                  className="header_text"
                  style={{ fontWeight: "bold", fontSize: "22px" }}
                >
                  We create opportunities for our members.{" "}
                </div>
                <div className="content_text">
                  Whether these be speaking at our events, promoting your
                  project or advertising tenders, we ensure of members receive
                  ample opportunity to share their news, achievements and work.
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="join_card">
                <div
                  className="header_text"
                  style={{ fontWeight: "bold", fontSize: "22px" }}
                >
                  We believe in what we do.
                </div>

                <div className="content_text">
                  We are all advocates for the renewable energy sector, and
                  believe in the importance of renewables and clean energy for
                  our future – and yours.
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="join_card">
                <div
                  className="header_text"
                  style={{ fontWeight: "bold", fontSize: "22px" }}
                >
                  We run quality events,{" "}
                </div>
                <div className="content_text">
                  which members can attend free of charge.
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div
          style={{
            width: "100%",
            backgroundColor: "#F7F7F7",
            paddingBottom: "100px",
          }}
        >
          <Container>
            <Row className="title_row">
              <div className="section_header section_header_side">
                <span className="section_header_inner">MEMBERSHIP LEVELS</span>
                <div className="section_header_under"></div>
              </div>
            </Row>
            <Row>
              <Col
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  textAlign: "left",
                }}
              >
                Information on our three different levels of membership is
                available below. If you have any questions on membership, or
                would like to know more, please email info@cebcmena.com.
              </Col>
            </Row>
          </Container>

          <Container
            style={{
              margin: "auto",
              paddingTop: "40px",
              paddingBottom: "40px",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            <div
              style={{
                backgroundColor: "#eaeaea",
                minHeight: "50px",
                padding: "8px",
              }}
            >
              <Row
                style={{ marginTop: "auto", marginBottom: "auto" }}
                className="pt-2"
              >
                <Col
                  md={3}
                  className=" "
                  style={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                ></Col>
                <Col md={3} className=" " style={{ padding: "10px" }}>
                  <div
                    style={{
                      width: "90%",
                      minHeight: "130px",
                      backgroundColor: "gray",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <div
                        style={{ fontSize: "", fontWeight: "", color: "white" }}
                      >
                        PARTNER MEMBER
                      </div>

                      <div
                        style={{
                          fontSize: "30px",
                          fontWeight: "bolder",
                          color: "white",
                        }}
                      >
                        $6,000 USD
                      </div>
                      <div
                        style={{ fontSize: "", fontWeight: "", color: "white" }}
                      >
                        per annum
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={3} className=" " style={{ padding: "10px" }}>
                  <div
                    style={{
                      width: "90%",
                      minHeight: "130px",
                      backgroundColor: "#FFB600",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <div
                        style={{ fontSize: "", fontWeight: "", color: "white" }}
                      >
                        CORPORATE MEMBER
                      </div>
                      <div
                        style={{
                          fontSize: "30px",
                          fontWeight: "bolder",
                          color: "white",
                        }}
                      >
                        $3,000 USD
                      </div>
                      <div
                        style={{ fontSize: "", fontWeight: "", color: "white" }}
                      >
                        per annum
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={3} className=" " style={{ padding: "10px" }}>
                  <div
                    style={{
                      width: "90%",
                      minHeight: "130px",
                      backgroundColor: "gray",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <div
                        style={{ fontSize: "", fontWeight: "", color: "white" }}
                      >
                        ASSOCIATE MEMBER
                      </div>
                      <div
                        style={{
                          fontSize: "30px",
                          fontWeight: "bolder",
                          color: "white",
                        }}
                      >
                        $1,000 USD
                      </div>
                      <div
                        style={{ fontSize: "", fontWeight: "", color: "white" }}
                      >
                        per annum
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            {generate_table_view(data)}
          </Container>

          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "100px",
              marginTop: "40px",
              width: "400px",
              maxWidth: "90vw",
            }}
          >
            <CallToAction />
          </div>
        </div>
      </div>
    </>
  );
}

export default BenifitsPageComponent;
