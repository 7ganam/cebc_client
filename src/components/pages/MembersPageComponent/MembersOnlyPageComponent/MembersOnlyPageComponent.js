import React from "react";
import "./MembersOnlyPageComponent.css";
import { useContext } from "react";
import { LoginContext } from "../../../../contexts/LoginContext";
import { Col, Container, Row } from "reactstrap";
import { useState, useEffect, useCallback } from "react";
import { useHttpClient } from "./../../../../hooks/http-hook";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CodeModals from "./CodeModals";
import moment from "moment";
import ReactLoading from "react-loading";

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

function MembersOnlyPageComponent(props) {
  const {
    login,
    IsLoggedIn,
    Token,
    ToggleLoginModal,
    logout,
    IsSignUpModalShown,
    ToggleSignUpModal,
    User,
  } = useContext(LoginContext);

  const {
    isLoading: UpcommingEventsIsLoading,
    error: UpcommingEventsError,
    sendRequest: sendUpcommingEventsRequest,
    clearError,
  } = useHttpClient();
  const [LoadedUpcommingEvents, setLoadedUpcommingEvents] = useState([]);

  const render_events = (events) => {
    let events_views = events.map((event) => (
      <Card
        style={{ marginTop: "15px", boxShadow: "-2px 2px 3px 0px #00000030" }}
      >
        <CardImg
          top
          width="100%"
          src={event.Event_thumbnail_image && event.Event_thumbnail_image.url}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{event.Title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {" "}
            {event.date}
          </CardSubtitle>
          <CardText>{}</CardText>
          <Link to={"/EVENTS_NEWS/UPCOMMMING/" + event.slug}>
            <Button style={{ marginTop: "", width: "90%" }}>Know more</Button>
          </Link>
          {event.discount_code && (
            <CodeModals buttonLabel="test" event={event} />
          )}
        </CardBody>
      </Card>
    ));
    return events_views;
  };
  const render_news = (news) => {
    let news_views = news.map((news_post) => {
      return (
        <Card
          style={{ marginTop: "15px", boxShadow: "-2px 2px 3px 0px #00000030" }}
        >
          <CardImg
            top
            width="100%"
            src={news_post.thumbnail_image && news_post.thumbnail_image.url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{news_post.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {" "}
              {news_post.date}
            </CardSubtitle>
            <CardText>{news_post.thumb_nail_text}</CardText>
            <Link to={"/EVENTS_NEWS/News/" + news_post.slug}>
              <Button style={{ marginTop: "", width: "90%" }}>Know more</Button>
            </Link>
          </CardBody>
        </Card>
      );
    });
    return news_views;
  };

  const fetch_upcomming_Events = useCallback(async () => {
    try {
      var localTime = moment().format("YYYY-MM-DD"); // store localTime
      var current_date = localTime + "T00:00:00.000Z";
      var current_date = localTime;

      const responseData = await sendUpcommingEventsRequest(
        `${process.env.REACT_APP_BACKEND_URL}/events?Event_date_gte=${current_date}`,
        "GET",
        null,
        { Authorization: "Bearer " + Token }
      );

      setLoadedUpcommingEvents(responseData);
    } catch (err) {
      console.log({ err });
    }
  }, [sendUpcommingEventsRequest]);

  useEffect(() => {
    if (IsLoggedIn) {
      fetch_upcomming_Events();
    }
  }, [IsLoggedIn]);

  return (
    <div
      style={{
        minHeight: "400px",
        paddingBottom: "300px",
        paddingTop: "0px",
      }}
    >
      {IsLoggedIn ? (
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
                  <span class="sub_page_header_inner">
                    MEMBERS ONLY CONTENT
                  </span>
                  <div className="sub_page_header_under"></div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid style={{ padding: "50px" }}>
            <Row>
              <Col className="news_col" md={3}>
                <div className="id_card">
                  <div className="user_image_wrapper">
                    <img
                      className="user_image"
                      src={
                        User.image && User.image.url
                          ? User.image.url
                          : "/assets/images/user.jpg"
                      }
                      alt="user"
                    ></img>
                  </div>
                  <div className="user_name" style={{ fontWeight: "700" }}>
                    {User.username}
                  </div>
                  <div
                    className="user_title"
                    style={{ padding: "0px 10px 10px 10px" }}
                  >
                    {User.Title}
                  </div>
                </div>
                <Link to="/MEMBERSHIP/MEMBERSONLY/POSTJOB">
                  <Button color="warning" className="job_post_button">
                    Post a Job
                  </Button>
                </Link>
              </Col>

              <Col
                className="news_col d-flex align-items-center flex-column"
                md={6}
              >
                {props.latest_news && props.latest_news.length > 0 ? (
                  render_news(props.latest_news)
                ) : (
                  <div style={{ marginTop: "100px" }}>
                    <ReactLoading
                      type={"spin"}
                      color={"#00D2F9"}
                      width={"10vw"}
                    />
                  </div>
                )}
              </Col>

              <Col
                className="events_col d-flex align-items-center flex-column pt-0 mt-1"
                md={3}
              >
                {LoadedUpcommingEvents.length > 0 ? (
                  render_events(LoadedUpcommingEvents)
                ) : (
                  <div style={{ marginTop: "100px" }}>
                    <ReactLoading
                      type={"spin"}
                      color={"#00D2F9"}
                      width={"5vw"}
                    />
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div style={{ marginTop: "300px" }}>
          <div class="section_header">
            <span class="section_header_inner">Members only content</span>
            <div class="section_header_under"></div>
          </div>

          <div>you have to be a member to see this content</div>
        </div>
      )}
    </div>
  );
}

export default MembersOnlyPageComponent;
