import React from 'react'
import "./NewsLettersPageComponent.css"
import moment from 'moment';
import { Col, Container, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody, CardFooter } from 'reactstrap';

function NewsLettersPageComponent(props) {

    console.log(`pageNewsLetters1`, props.NewsLetters)
    const render_NewsLetters = (NewsLetters) => {
        console.log(` pageNewsLetters`, NewsLetters)

        const NewsLetters_object = {}
        for (const NewsLetter of NewsLetters) {
            let momentDate = moment(NewsLetter.date)
            let year = momentDate.year();
            let month = momentDate.month();

            if (!NewsLetters_object[year]) { NewsLetters_object[year] = {} }
            if (!NewsLetters_object[year][month]) { NewsLetters_object[year][month] = [] }

            NewsLetters_object[year][month].push(NewsLetter)
        }

        const reander_sub_elements = (NewsLetters_object, year) => {
            const sub_objects = []
            for (const month in NewsLetters_object[year]) {
                for (const NewsLetter of NewsLetters_object[year][month]) {
                    sub_objects.push(

                        <Col md={4} lg={3}>
                            <Card className="past_NewsLetter_card">
                                {NewsLetter.image ?

                                    <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={`${NewsLetter.image && NewsLetter.image.url}`} alt="Card image cap" />
                                    :
                                    <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={"/logo_black.png"} alt="Card image cap" />
                                }
                                <CardBody>
                                    <CardTitle className='card_title_' tag="h5"> {NewsLetter.title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-NewsLetter-d"><span class="mec-start-date-label" itemprop="startDate">{NewsLetter.date}</span></span>
                                    </CardSubtitle>
                                    <CardText></CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    <Link to={`/KNOWLEDGECENTER/NEWSLETTER/${NewsLetter.id}`}>
                                        <div style={{ padding: '10px', borderStyle: "solid", borderWidth: "1px", background: "white", color: "black" }}>
                                            <div style={{}}>know more</div>
                                        </div>
                                    </Link >
                                </CardFooter>
                            </Card>
                        </Col>
                    )
                }
            }
            return sub_objects;
        }

        let render_NewsLetter = []
        render_NewsLetter.push(
            <div class="section_header" style={{ marginTop: "100px" }}>
                <span class="section_header_inner">
                    NEWSLETTER
            </span>
                <div className="section_header_under"></div>
            </div>
        )


        const ordered_years = Object.keys(NewsLetters_object).sort().reverse(
            (obj, key) => {
                obj[key] = NewsLetters_object[key];
                return obj;
            },
            {}
        );
        console.log(`ordered_years`, ordered_years)

        for (const year of ordered_years) {
            render_NewsLetter.push(
                <>
                    <Container style={{ marginTop: "" }}>
                        <div class="mec-month-divider_past" data-toggle-divider="mec-toggle-202102-1135">
                            <span> {year}</span>
                            <i class="mec-sl-arrow-down">  </i>
                        </div>
                    </Container>
                    <Container style={{ marginTop: "50px" }}>
                        <Row>
                            {reander_sub_elements(NewsLetters_object, year)}
                        </Row>
                    </Container>
                </>
            )

        }

        return render_NewsLetter
    }


    return (
        <div style={{ marginTop: '200px', marginBottom: '50px' }}>
            {props.NewsLetters.length > 0 &&
                <div>
                    {render_NewsLetters(props.NewsLetters)}
                </div>

            }
        </div>
    )
}

export default NewsLettersPageComponent




