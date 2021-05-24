import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';

import "./SingleWebinarPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';


function SingleWebinarPageComponent(props) {

    // console.log(props.match.params.Event_id)
    // console.log(`singeprops.webinars`, props.webinars)
    const webinar_id = props.match.params.webinar_id;

    const the_webinar = props.webinars.filter((webinar) => webinar.id == webinar_id)[0] //leave this as two ==

    console.log(`the_webinar`, the_webinar)

    function extract_yt_id(url) {
        var video_id = url.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        return (video_id);
    }





    return (

        <>


            <div className="back_ground_div">    </div>

            <div id="webinar_background">


                <Container style={{ maxWidth: '90%', marginTop: '200px', display: '' }}>




                    <Row className='justify-content-start align-items-stretch'>
                        <Col className='p-0' md={4} style={{ background: '', }}>
                            {!!props.webinars.length > 0 &&
                                <div className="webinar_image_box">
                                    <img src={`/logo_black.png`} style={{ width: "100%", height: "auto", }} alt="" />
                                </div>
                            }

                        </Col>
                        <Col className='p-0' md={7}>
                            <div className="webinar_box">
                                {!!props.webinars.length > 0 ?
                                    <div>
                                        <div id="webinar_header" >

                                            <div id="header_text"
                                                style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "210px", justifyContent: "center" }}
                                            >
                                                <div id="webinar_box_title" style={{ textAlign: "start", fontSize: '50px' }}>
                                                    <h1> {the_webinar.title}</h1>
                                                </div>
                                            </div>


                                        </div>
                                        <div id="webinar_header_2">

                                        </div>


                                        <div className="video-responsive" style={{ marginTop: "20px" }}>

                                            <iframe
                                                width="90%"
                                                height="350px"
                                                src={`https://www.youtube.com/embed/${extract_yt_id(the_webinar.youtube_link)}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="Embedded youtube"
                                            />
                                        </div>


                                        <div id="webinar_body">
                                            <div style={{}}>
                                                <div style={{ width: '100%', margin: "auto" }}><Editor value={the_webinar.description} onChange={(input) => { }} /></div>
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <div id="loading_spinner" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }} >
                                        <div style={{ marginTop: "100px" }}>
                                            <ReactLoading type={"spin"} color={"#00D2F9"} width={"20vw"} />
                                        </div>
                                    </div>

                                }


                            </div>







                        </Col>
                    </Row>
                </Container>




            </div >

        </>
    )
}

export default SingleWebinarPageComponent
