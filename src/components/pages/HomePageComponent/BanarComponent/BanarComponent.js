import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./BanarComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import moment from "moment";
import banar from "./banar.jpg";

function s3_map(str) {
  str = str.replace("cebc2", "cebc3");
  str = str.replace("cebc.s3.eu-central", "cebc3.s3.eu-central");
  return str;
}

function BanarComponent(props) {
  const [SortedEvents, setSortedEvents] = useState([]);

  return (
    <div style={{ marginTop: "10px" }}>
      <Container className="banar_container">
        <>
          <Row style={{ marginTop: "40px" }}>
            <Col
              id="main_banar_col"
              className="banar_col main_banar_col"
              xs="12"
              style={{}}
            >
              <a className="" href={`https://mailchi.mp/cebcmena/evis`}>
                <div id="main_banar_div" className="p-2">
                  <div id="main_banar_img_div" style={{ width: "100%" }}>
                    <img id="main_banar_img" src={banar} alt="oval" />
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </>
      </Container>
    </div>
  );
}

export default BanarComponent;
