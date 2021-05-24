import React from 'react'
import "./PapersPageComponent.css"
import moment from 'moment';
import { Col, Container, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody, CardFooter } from 'reactstrap';

function PapersPageComponent(props) {

    console.log(` pagepapers1`, props.papers)


    const render_papers2 = (papers) => {
        const sub_objects = []
        for (const paper of props.papers) {
            sub_objects.push(
                <Col md={4} lg={3}>
                    <Card className="past_paper_card">
                        {paper.image ?

                            <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={`${paper.image && paper.image.url}`} alt="Card image cap" />
                            :
                            <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={"/logo_black.png"} alt="Card image cap" />
                        }
                        <CardBody>
                            <CardTitle className='card_title_' tag="h5"> {paper.title}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                {/* <i class="fa fa-calendar mr-2" aria-hidden="true"></i> */}
                                {/* <span class="mec-paper-d"><span class="mec-start-date-label" itemprop="startDate">{paper.date}</span></span> */}
                            </CardSubtitle>
                            <CardText></CardText>
                        </CardBody>
                        <CardFooter className="text-muted">
                            <Link to={`/KNOWLEDGECENTER/PAPERS/${paper.id}`}>
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
                <span class="section_header_inner">  NEWSLETTER   </span>
                <div className="section_header_under"></div>
            </div>
            {props.papers.length > 0 &&
                <div>
                    <Container>
                        <Row>
                            {render_papers2()}
                        </Row>
                    </Container>

                </div>

            }
        </div>
    )
}

export default PapersPageComponent




