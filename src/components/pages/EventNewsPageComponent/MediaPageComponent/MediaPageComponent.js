import React from 'react'
import "./MediaPageComponent.css"
import { Col, Container, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';

import { useHttpClient } from "../../../../hooks/http-hook"

import { useState, useEffect, useCallback } from 'react';
import PaginationComponent from './PaginationComponent/PaginationComponent'


import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, CardFooter
} from 'reactstrap';

function MediaPageComponent(props) {


    const events_per_page = 30;








    const { isLoading: PastEventsIsLoading, sendRequest: sendPastEventsRequest } = useHttpClient();
    const [LoadedPastEvents, setLoadedPastEvents] = useState([]);
    const [LoadedEventsCount, setLoadedEventsCount] = useState([]);


    const fetch_past_Events = useCallback(
        async (EntryPerPage, page_number) => {
            try {

                const responseData = await sendPastEventsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/events?_limit=${EntryPerPage}&_start=${EntryPerPage * (page_number - 1)}`
                );
                console.log(`past_events`, responseData)
                setLoadedPastEvents(responseData);

                const countresponseData = await sendPastEventsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/events/count`);
                setLoadedEventsCount(countresponseData);




            } catch (err) {
                console.log({ err })
            }


        },
        [sendPastEventsRequest],
    );



    useEffect(() => {
        fetch_past_Events(events_per_page, 1);
    }, [fetch_past_Events]);



    const render_past_events = (past_events) => {
        console.log(`past_events`, past_events)

        const events_object = {}
        for (const event of past_events) {
            let momentDate = moment(event.Event_date)
            let year = momentDate.year();
            let month = momentDate.month();

            if (!events_object[year]) { events_object[year] = {} }
            if (!events_object[year][month]) { events_object[year][month] = [] }

            events_object[year][month].push(event)
            events_object[year][month].sort((a, b) => (moment(a.Event_date) > moment(b.Event_date)) ? 1 : -1)
        }

        const reander_sub_elements = (events_object, year) => {
            const sub_objects = []
            for (const month in events_object[year]) {
                for (const event of events_object[year][month]) {
                    sub_objects.unshift(

                        <Col md={4} lg={3}>
                            <Card className="past_event_card mb-4">
                                {event.Event_thumbnail_image ?

                                    <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={`${event.Event_thumbnail_image.url}`} alt="Card image cap" />
                                    :
                                    <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={"/logo_black.png"} alt="Card image cap" />
                                }
                                <CardBody>
                                    <CardTitle className='card_title_' tag="h5"> {event.Title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-event-d"><span class="mec-start-date-label" itemprop="startDate">{event.Event_date}</span></span>
                                    </CardSubtitle>
                                    <CardText></CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    <Link to={`/ACTIVITIES/EVENTS/PAST/${event.id}`}>
                                        <div style={{ padding: '10px', borderStyle: "solid", borderWidth: "1px", background: "white", color: "black" }}>
                                            <div style={{}}>know more</div>
                                        </div>
                                    </Link >
                                </CardFooter>
                            </Card>
                        </Col>
                    )
                }
            }
            return sub_objects;
        }

        let render_event = []

        // render_event.push(
        //     <div class="section_header" style={{ marginTop: "100px" }}>
        //         <span class="section_header_inner">
        //             Past events
        //         </span>
        //         <div className="section_header_under"></div>
        //     </div>
        // )

        const ordered_years = Object.keys(events_object).sort().reverse(
            (obj, key) => {
                obj[key] = events_object[key];
                return obj;
            },
            {}
        );

        for (const year of ordered_years) {
            render_event.push(
                <>
                    <Container style={{ marginTop: "" }}>
                        <div class="mec-month-divider_past" data-toggle-divider="mec-toggle-202102-1135">
                            <span> {year}</span>
                            <i class="mec-sl-arrow-down">  </i>
                        </div>
                    </Container>
                    <Container style={{ marginTop: "50px" }}>
                        <Row>
                            {reander_sub_elements(events_object, year)}
                        </Row>
                    </Container>
                </>
            )

        }

        return render_event
    }

    function generate_page_view(sub_par, past_events) {
        let past = past_events.filter((event) => event.show_in_media === true)
        console.log(`past`, past)
        return (
            <>
                <Container style={{ marginTop: "200px" }}>
                    <Row className=" justify-content-center">
                        <div class="section_header" style={{ marginTop: "30px" }}>
                            <span class="section_header_inner">
                                MEDIA
                                </span>
                            <div className="section_header_under"></div>
                        </div>
                    </Row>
                </Container>
                { !PastEventsIsLoading ?
                    <>
                        <div style={{ backgroundColor: "" }}>
                            {render_past_events(past)}
                        </div>

                    </>
                    :
                    <div style={{ width: '80%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>

                        <ReactLoading type={"spin"} color={"#00D2F9"} width={"10vw"} />

                    </div>

                }
                <PaginationComponent fetch_items={fetch_past_Events} items_per_page={events_per_page} LoadedItemsCount={LoadedEventsCount} />

            </>
        )


    }
    return (
        <div style={{ marginBottom: "20px" }}>
            { generate_page_view(props.match.params.sub_parameter, LoadedPastEvents)}
        </div>
    )
}
export default MediaPageComponent
