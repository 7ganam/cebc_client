import React from 'react'
import "./ReportsPageComponent.css"
import moment from 'moment';
import { Col, Container, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody, CardFooter } from 'reactstrap';

function ReportsPageComponent(props) {
    console.log(` pagereports1`, props.reports)






    const render_reports = (reports) => {
        console.log(` pagereports`, reports)

        const reports_object = {}
        for (const report of reports) {
            let momentDate = moment(report.date)
            let year = momentDate.year();
            let month = momentDate.month();

            if (!reports_object[year]) { reports_object[year] = {} }
            if (!reports_object[year][month]) { reports_object[year][month] = [] }

            reports_object[year][month].push(report)
        }

        const reander_sub_elements = (reports_object, year) => {
            const sub_objects = []
            for (const month in reports_object[year]) {
                for (const report of reports_object[year][month]) {
                    sub_objects.push(

                        <Col md={4} lg={3}>
                            <Card className="past_report_card">
                                {report.image ?

                                    <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={`${report.image && report.image.url}`} alt="Card image cap" />
                                    :
                                    <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={"/logo_black.png"} alt="Card image cap" />
                                }
                                <CardBody>
                                    <CardTitle className='card_title_' tag="h5"> {report.title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-report-d"><span class="mec-start-date-label" itemprop="startDate">{report.date}</span></span>
                                    </CardSubtitle>
                                    <CardText></CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    <Link to={`/KNOWLEDGECENTER/REPORTS/${report.id}`}>
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

        let render_report = []
        render_report.push(
            <div class="section_header" style={{ marginTop: "100px" }}>
                <span class="section_header_inner">
                    PUBLICATIONS
            </span>
                <div className="section_header_under"></div>
            </div>
        )


        const ordered_years = Object.keys(reports_object).sort().reverse(
            (obj, key) => {
                obj[key] = reports_object[key];
                return obj;
            },
            {}
        );
        console.log(`ordered_years`, ordered_years)

        for (const year of ordered_years) {
            render_report.push(
                <>
                    <Container style={{ marginTop: "" }}>
                        <div class="mec-month-divider_past" data-toggle-divider="mec-toggle-202102-1135">
                            <span> {year}</span>
                            <i class="mec-sl-arrow-down">  </i>
                        </div>
                    </Container>
                    <Container style={{ marginTop: "50px" }}>
                        <Row>
                            {reander_sub_elements(reports_object, year)}
                        </Row>
                    </Container>
                </>
            )

        }

        return render_report
    }


    return (
        <div style={{ marginTop: '200px', marginBottom: '50px' }}>
            {props.reports.length > 0 &&
                <div>
                    {render_reports(props.reports)}
                </div>

            }
        </div>
    )
}

export default ReportsPageComponent




