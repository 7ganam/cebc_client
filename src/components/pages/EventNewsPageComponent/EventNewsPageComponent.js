import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './EventNewsPageComponent.css'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

const activiites = [
    {
        image: '/assets/images/Business-News.jpg',
        title: 'NEWS',
        path: '/EVENTS_NEWS/News/'
    },
    {
        image: '/assets/images/Academy.jpg',
        title: 'MEDIA',
        path: '/EVENTS_NEWS/media/'
    },

]

function EventNewsPageComponent(props) {

    function render_activities(activiites) {
        const activities_view = activiites.map((activity, index) => (

            <div className='activity_card'>
                <Link to={activity.path} style={{ textDecoration: "none" }}>
                    <div className='activity_card_inner' >

                        <div className='activity_image'>
                            <img className='activity_image' src={activity.image} alt='cardimage'></img>
                        </div>
                        <div className='activity_body' >

                            <div tag="h5"
                                style={{ textAlign: 'center', textOverflow: "ellipsis", margin: '10px', maxHeight: '48px', overflow: 'hidden' }}>
                                {activity.title}
                            </div>

                        </div>
                    </div>
                </Link>
            </div>

        ))
        return activities_view
    }




    return (
        <div style={{
            minHeight: "400px", paddingTop: '0px', paddingBottom: '100px'
        }}>
            <div className='background_image_div' >
                <img src="/assets/images/hero.png" alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <Container className='page_title_container' fluid>
                <Row className=" justify-content-center">
                    <Col>
                        <div class="page_header" style={{ backgroundImage: `url("https://cebc3.s3.eu-central-1.amazonaws.com/2_13a171ac76.jpg")` }}
                        >
                            <span class="page_header_inner"> News & Media</span>
                            <div className="page_header_under"></div>
                            <div id="page_header_shadow" >  </div>

                        </div>
                    </Col>
                </Row>
            </Container>


            <Container>
                <Row className="title_row">
                    <div className="section_header section_header_side" >
                        <span className="section_header_inner"     >
                            Latest News & media :
                        </span>
                        <div className="section_header_under" ></div>
                    </div>
                </Row>

                <div className='activities_div'>
                    {
                        render_activities(activiites)
                    }

                </div>
            </Container>

        </div>
    )
}

export default EventNewsPageComponent
