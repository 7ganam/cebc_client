import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import "./WebinarsPageComponent.css"

function WebinarsPageComponent(props) {

    function extract_yt_id(url) {
        var video_id = url.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        return (video_id);
    }

    console.log(`props.webinars`, props.webinars)
    function generate_webinars_cards() {
        const webinars = props.webinars.map((webinar, index) => {
            return (
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Link to={`/KNOWLEDGECENTER/WEBINARS/${webinar.id}`} style={{ width: '100%' }}>
                        <div className="webinar_card">
                            <div style={{ width: "100%", height: "250px", borderRadius: "", overflow: "hidden", borderBottom: '1px solid #80808045' }}>
                                {/* <img src="/logo_black.png" alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                                <div className="video-" style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${extract_yt_id(webinar.youtube_link)}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </div>
                            </div>

                            <div style={{ background: "white", width: "100%", minHeight: "60px", color: "black", fontSize: "16px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <div >
                                    {webinar.title}
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

            )

        })
        return webinars;
    }



    return (
        <div style={{ marginTop: '200px', marginBottom: '100px' }}>

            <Container>
                <div class="section_header" style={{ marginTop: "100px", marginBottom: "100px", zIndex: '444' }}>
                    <span class="section_header_inner">  WEBINARS    </span>
                    <div className="section_header_under"></div>
                </div>
                {/* <div className="back_ground_div" style={{zIndex}}>         </div> */}
                <Row>

                    {generate_webinars_cards()}
                </Row>
            </Container>
        </div>
    )
}

export default WebinarsPageComponent
