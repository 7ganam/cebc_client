import React from 'react'
import "./CaseStudiesPageComponent.css"
import moment from 'moment';
import { Col, Container, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody, CardFooter } from 'reactstrap';

function CaseStudiesPageComponent(props) {

    console.log(` pagecase_studies1`, props.case_studies)


    const render_case_studies2 = (case_studies) => {
        const sub_objects = []
        for (const case_study of props.case_studies) {
            sub_objects.push(

                <Col md={4} lg={3}>
                    <Card className="past_report_card">
                        {case_study.image ?

                            <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={`${case_study.image && case_study.image.url}`} alt="Card image cap" />
                            :
                            <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={"/logo_black.png"} alt="Card image cap" />
                        }
                        <CardBody>
                            <CardTitle className='card_title_' tag="h5"> {case_study.title}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                {/* <i class="fa fa-calendar mr-2" aria-hidden="true"></i> */}
                                {/* <span class="mec-case_study-d"><span class="mec-start-date-label" itemprop="startDate">{case_study.date}</span></span> */}
                            </CardSubtitle>
                            <CardText></CardText>
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Link to={`/KNOWLEDGECENTER/CASE_STUDIES/${case_study.id}`}>
                                <div style={{ padding: '10px', borderStyle: "solid", borderWidth: "1px", background: "white", color: "black" }}>
                                    <div style={{}}>know more</div>
                                </div>
                            </Link >
                        </CardFooter>
                    </Card>
                </Col>
            )
        }
        return sub_objects;
    }
    return (
        <div style={{ marginTop: '200px', marginBottom: '50px' }}>
            <div class="section_header" style={{ marginTop: "100px", marginBottom: "100px" }}>
                <span class="section_header_inner">   Case studies     </span>
                <div className="section_header_under"></div>
            </div>
            {props.case_studies.length > 0 &&
                <div>
                    <Container>
                        <Row>
                            {render_case_studies2()}
                        </Row>
                    </Container>

                </div>

            }
        </div>
    )
}

export default CaseStudiesPageComponent




