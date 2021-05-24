import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './ActivitiesPageComponent.css'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

const activiites = [
    {
        image: 'https://cebc.s3.eu-central-1.amazonaws.com/Policy_Working_Group_Photo_6_a2b1fc7c60.jpg',
        title: 'EVENTS',
        path: '/ACTIVITIES/EVENTS/All'
    },
    // {
    //     image: '/static/media/Member.6070c580.jpg',
    //     title: 'WORKING GROUPS',
    //     path: '#'
    // },
    {
        image: '/Academy.jpg',
        title: 'ACADEMY',
        path: '/ACTIVITIES/ACADEMY'
    },
    {
        image: '/consul.jpg',
        title: 'CONSULTANCY',
        path: '/ACTIVITIES/CONSULTANCY'
    },
    {
        image: 'https://cebc.s3.eu-central-1.amazonaws.com/podcasting_pic_e077e0a2ce.jpg',
        title: 'PODCAST',
        path: '/ACTIVITIES/PODCASTS'
    },
]

function ActivitiesPageComponent(props) {

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
            minHeight: "400px", paddingTop: '120px', paddingBottom: '300px'
        }}>
            <div style={{ width: "100%", height: "900px", position: "absolute", top: "-50px", right: "", overflow: "hidden" }}  >
                <img src="/assets/images/hero.png" alt="" style={{ width: "100%", height: "auto", position: "", }} />
            </div>
            <Container>

                <Row className=" justify-content-center">
                    <div class="section_header" style={{ marginTop: "50px", marginBottom: "80px", zIndex: '3' }}>
                        <span class="section_header_inner">
                            CEBC activities
                            </span>
                        <div className="section_header_under"></div>
                    </div>
                </Row>
                {/* <Row>
                    <Col style={{ fontFamily: "'Raleway', sans-serif", textAlign: 'left', marginBottom: '30px' }}>
                        CEBC provides activities to help empower Clean energy industries in the MENA region.
                    </Col>
                </Row> */}
                <div className='activities_div'>
                    {
                        render_activities(activiites)
                    }

                </div>
            </Container>

        </div>
    )
}

export default ActivitiesPageComponent
