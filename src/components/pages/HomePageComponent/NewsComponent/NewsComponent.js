import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./NewsComponent.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";
import moment from 'moment';

function NewsComponent(props) {

    // console.log(`props.latest_news`, props.latest_news)
    const [SortedEvents, setSortedEvents] = useState([])

    function sort_events(events) {

        var localTime = moment().format('YYYY-MM-DD'); // store localTime
        var current_date = localTime + "T00:00:00.000Z";
        // var current_date = localTime;
        const upcocmming_events2 = events.filter((event, index) => {
            if (event.Event_date > current_date) {
                return event
            }
        })
        function compare(a, b) {
            if (moment(a.Event_date) < moment(b.Event_date)) { return -1; }
            if (moment(a.Event_date) > moment(b.Event_date)) { return 1; }
            return 0;
        }
        const sorted_upcomming_events = upcocmming_events2.sort(compare)
        console.log(`events`, events)
        console.log(`upcomming_events2`, upcocmming_events2)
        let sorted_events = []
        if (upcocmming_events2.length === 0) {
            sorted_events = events
        }
        else if (upcocmming_events2.length < events.length) {
            let past_events = events.filter((event, index) => (event.Event_date < current_date));
            sorted_events = sorted_upcomming_events.concat(past_events)
            console.log(`past_events`, past_events)




        }
        else {
            sorted_events = sorted_upcomming_events;

        }

        console.log(`events`, events)
        console.log(`sorted_events`, sorted_events)

        setSortedEvents(sorted_events)



    }

    useEffect(() => {
        if (props.latest_events) {
            sort_events(props.latest_events)
        }
    }, [props.latest_events])
    return (
        <div style={{ marginTop: '10px' }}>
            <Container className='news_container'>
                <Row className=" justify-content-center">
                    <Col className='pt-0'>
                        <div class="section_header">
                            <span class="section_header_inner">
                                News & Events
                            </span>
                            <div className="section_header_under"></div>
                        </div>
                    </Col>
                </Row>

                {(props.latest_news.length > 0 && SortedEvents.length > 2) ?


                    <>
                        <Row style={{ marginTop: "40px" }}>
                            <Col id="main_news_col" className="news_col main_news_col" xs="12" md="6" style={{}}>
                                <Link className="" to={`/EVENTS_NEWS/News/${props.latest_news[0].id}`} >

                                    <div id="main_news_div" className="p-2">
                                        <div id="main_news_img_div" style={{ width: "100%" }}>
                                            <img id="main_news_img" src={
                                                props.latest_news[0].thumbnail_image && props.latest_news[0].thumbnail_image.url} alt="oval" />
                                        </div>
                                        <div id="main_news_title_div">
                                            {props.latest_news[0].title}
                                        </div>
                                        <div id="main_news_body_div" className="mx-4 mt-2 mb-5">
                                            {props.latest_news[0].thumb_nail_text}
                                        </div>
                                    </div>


                                </Link>

                            </Col>
                            <Col id="sec_news_col " xs="12" md="6" style={{ paddingTop: "0" }}>
                                <div className="" >
                                    <Link className="" to={`/EVENTS_NEWS/PAST/${SortedEvents[0].id}`} >
                                        <div className="sec_news_div mb-3">
                                            <Row style={{ height: "100%" }} className="p-2">
                                                <Col xs="5" md="5" style={{ height: "" }} >
                                                    <img className="sec_news_img" src={SortedEvents[0].Event_thumbnail_image && SortedEvents[0].Event_thumbnail_image.url} alt="oval" />
                                                </Col>
                                                <Col xs="7" md="7" style={{ height: "", overflow: "hidden" }} className="pl-0">

                                                    <div className="sec_news_title_div  text-left">
                                                        <span className="text-left mr-2" style={{ backgroundColor: '#FCC744' }}>
                                                            EVENT:
                                                        </span>
                                                        {SortedEvents[0].Title}
                                                    </div>
                                                    <div className="sec_news_body_div mx-1 mt-2   text-left">
                                                        {SortedEvents[0].thumb_nail_text}
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <span className="sec_news_title_div text-left ml-1">
                                                            DATE:
                                                        </span>
                                                        <span className="sec_news_title_div text-left ml-1" style={{ color: 'grey' }}>
                                                            {SortedEvents[0].Event_date}
                                                        </span>
                                                    </div >
                                                </Col>

                                            </Row>
                                        </div>
                                    </Link>
                                    <Link className="" to={`/EVENTS_NEWS/PAST/${SortedEvents[1].id}`} >
                                        <div className="sec_news_div mb-3">
                                            <Row style={{ height: "100%" }} className="p-2">
                                                <Col xs="5" md="5" style={{ height: "" }} >
                                                    <img className="sec_news_img" src={SortedEvents[1].Event_thumbnail_image && SortedEvents[1].Event_thumbnail_image.url} alt="oval" />
                                                </Col>
                                                <Col xs="7" md="7" style={{ height: "", overflow: "hidden" }} className="pl-0">
                                                    <div className="sec_news_title_div  text-left">
                                                        <span className="text-left mr-2" style={{ backgroundColor: '#FCC744' }}>
                                                            EVENT:
                                                        </span>
                                                        {SortedEvents[1].Title}
                                                    </div>
                                                    <div className="sec_news_body_div mx-1 mt-2   text-left">
                                                        {SortedEvents[1].thumb_nail_text}
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <span className="sec_news_title_div text-left ml-1">
                                                            DATE:
                                                        </span>
                                                        <span className="sec_news_title_div text-left ml-1" style={{ color: 'grey' }}>
                                                            {SortedEvents[1].Event_date}
                                                        </span>
                                                    </div >
                                                </Col>
                                            </Row>
                                        </div>
                                    </Link>
                                    <Link className="" to={`/EVENTS_NEWS/PAST/${SortedEvents[2].id}`} >
                                        <div className="sec_news_div mb-3">
                                            <Row style={{ height: "100%" }} className="p-2">
                                                <Col xs="5" md="5" style={{ height: "" }} >
                                                    <img className="sec_news_img" src={SortedEvents[2].Event_thumbnail_image && SortedEvents[2].Event_thumbnail_image.url} alt="oval" />
                                                </Col>
                                                <Col xs="7" md="7" style={{ height: "", overflow: "hidden" }} className="pl-0">
                                                    <div className="sec_news_title_div  text-left">
                                                        <span className="text-left mr-2" style={{ backgroundColor: '#FCC744' }}>
                                                            EVENT:
                                                        </span>
                                                        {SortedEvents[2].Title}
                                                    </div>
                                                    <div className="sec_news_body_div mx-1 mt-2   text-left">
                                                        {SortedEvents[2].thumb_nail_text}
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <span className="sec_news_title_div text-left ml-1">
                                                            DATE:
                                                        </span>
                                                        <span className="sec_news_title_div text-left ml-1" style={{ color: 'grey' }}>
                                                            {SortedEvents[2].Event_date}
                                                        </span>
                                                    </div >
                                                </Col>
                                            </Row>
                                        </div>
                                    </Link>


                                </div>

                            </Col>
                        </Row>

                        <Row className=" justify-content-center">
                            <div className="end_div">
                                <Link className="" to={`/EVENTS_NEWS/News`} >
                                    <h4 className="end_text">
                                        MORE NEWS
                                     </h4>
                                </Link>
                            </div>
                        </Row>

                    </>
                    :
                    <div id="loading_spinner" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }} >
                        <div style={{ marginTop: "-100px" }}>
                            <ReactLoading type={"spin"} color={"#00D2F9"} width={"10vw"} />
                        </div>
                    </div>

                }
            </Container>
        </div >
    )
}

export default NewsComponent
