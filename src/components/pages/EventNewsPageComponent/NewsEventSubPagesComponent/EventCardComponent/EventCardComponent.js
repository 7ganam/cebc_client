import React from 'react'
import { Col, Row } from 'reactstrap'
import './EventCardComponent.css'
import { Link } from "react-router-dom";

function EventCardComponent(props) {
    // console.log('props.event', props.event)
    return (



        <div className="event_card" style={{ marginTop: "15px", marginBottom: "15px" }}>
            <Row style={{ minHeight: "200px ", width: "100%", marginTop: "15px", margin: 'auto' }}>
                <Col className="event_box" md={3} style={{ padding: "0px", backgroundColor: "#ececec" }}>
                    {props.event && props.event.Event_thumbnail_image ?
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", overflow: "hidden" }}>
                            <img src={`${props.event.Event_thumbnail_image.url}`}
                                style={{ width: "100%", height: "auto", }} alt="" />
                        </div>
                        :
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", overflow: "hidden" }}>
                            <img src={"/logo_black.png"}
                                style={{ width: "100%", height: "auto", }} alt="" />
                        </div>

                    }
                </Col>
                <Col className="event_box" md={6} style={{ padding: "0px" }}>
                    <div id="event_body">
                        <div id="event_title">
                            {props.event.Title}
                        </div>
                        <div id="event_text">
                            ....
                            </div>
                    </div>
                </Col>
                <Col className="event_box d-flex justify-align-content-start align-items-center p-0" md={3}>
                    <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", flexDirection: "column" }}>

                        <div className="my-2"
                            style={{ borderStyle: "solid", borderWidth: "1px", minHeight: "50px", display: "flex", justifyContent: "center", alignItems: "center", width: "75%" }}>
                            <div>
                                <i className="fa fa-calendar mr-2" aria-hidden="true"></i>
                                <span className="mec-event-d"><span className="mec-start-date-label" itemprop="startDate">{props.event.Event_date}</span></span>
                            </div>
                        </div>

                        <div className="mb-2"
                            style={{ borderStyle: "solid", borderWidth: "1px", minHeight: "50px", display: "flex", justifyContent: "center", alignItems: "center", width: "75%" }}
                        >
                            <div>
                                <i className="fa fa-calendar mr-2" aria-hidden="true"></i>
                                <span className="mec-start-time">{props.event.Event_end_date}</span>  <span className="mec-end-time"></span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{ minHeight: "57px ", width: "100%", marginTop: "0px", margin: 'auto' }}>
                <Col className="event_box" md={12} style={{ backgroundColor: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                    <div style={{ padding: '10px', borderStyle: "solid", borderWidth: "1px", background: "white", color: "black" }}>
                        share event
                        </div>
                    <div style={{ flexGrow: "1" }}>

                    </div>
                    <Link to={`/ACTIVITIES/EVENTS/UPCOMMMING/${props.event.id}`}>
                        <div style={{ padding: '10px', borderStyle: "solid", borderWidth: "1px", background: "white", color: "black" }}>
                            <div style={{}}>know more</div>
                        </div>
                    </Link >
                </Col>
            </Row>
        </div>

    )
}

export default EventCardComponent
