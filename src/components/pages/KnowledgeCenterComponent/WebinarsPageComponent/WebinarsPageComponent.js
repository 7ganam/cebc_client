import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import "./WebinarsPageComponent.css"
import ReactLoading from 'react-loading';

function WebinarsPageComponent(props) {

    function extract_yt_id(url) {

        var video_id = url.split('v=')[1];
        if (video_id) {
            var ampersandPosition = video_id.indexOf('&');
            if (ampersandPosition != -1) {
                video_id = video_id.substring(0, ampersandPosition);
            }
            return (video_id);
        }

    }

    console.log(`props.webinars`, props.webinars)
    function generate_webinars_cards() {
        let reverse_webinars = props.webinars;
        console.log(` props.webinars`, props.webinars)
        console.log(`reverse_webinars`, reverse_webinars)

        const webinars = reverse_webinars.map((webinar, index) => {
            return (
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Link to={`/KNOWLEDGECENTER/WEBINARS/${webinar.id}`} style={{ width: '100%' }}>
                        <div className="webinar_card">
                            <div style={{ width: "100%", height: "250px", borderRadius: "", overflow: "hidden", borderBottom: '1px solid #80808045' }}>

                                <div className="video-" style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                                    {/* <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${extract_yt_id(webinar.youtube_link)}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    /> */}

                                    <img src={`http://img.youtube.com/vi/${extract_yt_id(webinar.youtube_link)}/0.jpg`} alt='ytb_img' style={{ width: "100%", height: '100%' }} />
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
        <div style={{ marginTop: '0px', marginBottom: '100px' }}>
            <div className='background_image_div' >
                <img src="/assets/images/hero.png" alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <Container className='sub_page_title_container' >
                <Row className=" justify-content-center">
                    <Col>
                        <div class="sub_page_header">
                            <span class="sub_page_header_inner">WEBINARS</span>
                            <div className="sub_page_header_under"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>

                    {generate_webinars_cards()}
                </Row>
            </Container>
        </div>
    )
}

export default WebinarsPageComponent
