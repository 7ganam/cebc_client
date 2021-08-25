import React from 'react'
import "./CaseStudiesPageComponent.css"
import moment from 'moment';
import { Col, Container, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody, CardFooter } from 'reactstrap';

function s3_map(str) {
    str = str.replace('cebc2', 'cebc3');
    str = str.replace('cebc.s3.eu-central', 'cebc3.s3.eu-central');
    return str
}



function CaseStudiesPageComponent(props) {

    console.log(` pagecase_studies1`, props.case_studies)


    const render_case_studies2 = (case_studies) => {
        const sub_objects = []
        for (const case_study of props.case_studies) {
            sub_objects.push(

                <Col md={4} lg={3}>
                    <Card className="past_report_card">
                        {case_study.image ?

                            <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={s3_map(`${case_study.image && case_study.image.url}`)} alt="Card image cap" />
                            :
                            <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={"/assets/images/logo_black.png"} alt="Card image cap" />
                        }
                        <CardBody>
                            <CardTitle className='card_title_' tag="h5"> {case_study.title}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                            </CardSubtitle>
                            <CardText></CardText>
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Link to={`/KNOWLEDGECENTER/CASE_STUDIES/${case_study.slug}`}>
                                <div style={{ padding: '10px', borderStyle: "solid", borderWidth: "1px", background: "white", color: "black" }}>
                                    <div style={{}}>Know more</div>
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
        <div style={{ marginTop: '0px', marginBottom: '50px' }}>


            <div className='background_image_div' >
                <img src="/assets/images/hero.png" alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <Container className='sub_page_title_container' >
                <Row className=" justify-content-center">
                    <Col>
                        <div class="sub_page_header">
                            <span class="sub_page_header_inner">Case studies </span>
                            <div className="sub_page_header_under"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {props.case_studies.length > 0 &&
                <div>
                    <Container style={{ marginTop: '60px' }}>
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




