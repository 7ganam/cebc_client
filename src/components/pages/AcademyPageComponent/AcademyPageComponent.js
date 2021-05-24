import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './AcademyPageComponent.css'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

function AcademyPageComponent(props) {
    console.log(`courses`, props.courses)

    function render_courses() {
        const courses_view = props.courses.map((course, index) => (

            <div className='course_card'>
                <Card style={{ height: "100%", }}>
                    <CardImg top width="100%" height='170px' style={{}} src={course.image && course.image.url} alt="Card image cap" />
                    <CardBody style={{ display: 'flex', flexDirection: "column", paddingTop: '3px' }}>
                        <div style={{ flexGrow: '1' }}></div>
                        <CardTitle tag="h5"
                            style={{ textAlign: 'left', textOverflow: "ellipsis", margin: '10px', maxHeight: '48px', overflow: 'hidden', }}>
                            {course.title}
                        </CardTitle>
                        <div style={{ flexGrow: '1' }}></div>
                        <Link to={"/ACTIVITIES/ACADEMY/" + course.id}>
                            <Button style={{ fontWeight: "bold", color: 'white' }} color='warning'>VISIT COURSE</Button>
                        </Link>
                    </CardBody>
                </Card>
            </div>

        ))
        return courses_view
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
                            CEBC courses
                            </span>
                        <div className="section_header_under"></div>
                    </div>
                </Row>
                <Row>
                    <Col style={{ fontFamily: "'Raleway', sans-serif", textAlign: 'left', marginBottom: '30px' }}>
                        CEBC provides courses to help empower Clean energy industries in the MENA region.
                        </Col>
                </Row>
                <div className='courses_div'>
                    {props.courses && props.courses.length > 0 ?
                        render_courses()
                        :
                        <div style={{ margin: 'auto' }}>
                            <div style={{ marginTop: "100px" }}>
                                <ReactLoading type={"spin"} color={"#00D2F9"} width={"10vw"} />
                            </div>
                        </div>
                    }

                </div>
            </Container>

        </div>
    )
}

export default AcademyPageComponent
