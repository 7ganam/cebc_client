import React from 'react'
import { Col, Row } from 'reactstrap'
import './VideoComponent.css'

function VideoComponent() {
    return (
        <div id="video_section" style={{}}>
            <div id="video_top_shadow" >

            </div>
            <div id="video_bottom_shadow" >

            </div>
            <div id="video_text">

                <Row>
                    <Col md="8" className="justify-content-start text-left mx-5">
                        <div id="video_title">
                            A platform to drive clean energy policy and further dialogue between the public and private sectors across the MENA region.
                        </div>
                        <div className="ml-2 ml-md-0">
                            Registered as a Not-for-Profit Company in Abu Dhabi Global Market (ADGM), the CEBC is the pre-eminent organisation representing the private sector involved in the clean energy sector across the MENA region.
                        </div>

                    </Col>
                </Row>


            </div>
            <video id='home_video' autoplay="" muted loop plays-inline="" data-vscid="sbql8lfln" >
                {/* <source src="//energy.mit.edu/wp-content/uploads/2018/12/homepage-video.mp4" type="video/mp4" />
                <source src="//energy.mit.edu/wp-content/uploads/2018/12/homepage-video.ogv" type="video/ogg" /> */}
                <source src="//cebc2.s3.eu-central-1.amazonaws.com/cebc_final_6adf8221ce.mp4" type="video/mp4" />
                <source src="//cebc2.s3.eu-central-1.amazonaws.com/cebc_final_6adf8221ce.mp4" type="video/mp4" />

                {/* <source src="//energy.mit.edu/wp-content/uploads/2018/12/homepage-video.ogv" type="video/ogg" /> */}
            </video>
        </div>
    )
}

export default VideoComponent
