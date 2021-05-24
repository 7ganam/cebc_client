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
        image: '/Business-News.jpg',
        title: 'NEWS',
        path: '/EVENTS_NEWS/News/'
    },
    {
        image: '/Academy.jpg',
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
            minHeight: "400px", paddingTop: '120px', paddingBottom: '300px'
        }}>
            <div style={{ width: "100%", height: "900px", position: "absolute", top: "-50px", right: "", overflow: "hidden" }}  >
                <img src="/assets/images/hero.png" alt="" style={{ width: "100%", height: "auto", position: "", }} />
            </div>
            <Container>

                <Row className=" justify-content-center">
                    <div class="section_header" style={{ marginTop: "50px", marginBottom: "80px", zIndex: '3' }}>
                        <span class="section_header_inner">
                            NEWS & MEDIA
                            </span>
                        <div className="section_header_under"></div>
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
