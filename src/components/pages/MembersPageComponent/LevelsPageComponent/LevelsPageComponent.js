import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./LevelsPageComponent.css"
import CallToAction from '../../../shared/CallToAction/CallToAction'

function LevelsPageComponent() {


    const data = [
        {
            title: 'Opportunity to attend CEBC social networking events to establish and build on professional relationships (an event every quarter)',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: true,
        },
        {
            title: 'Opportunity for free/discounted third-party conferences and events',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: true,
        },
        {
            title: 'Right to vote for a CEBC board member',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: true,
        },
        {
            title: 'Opportunity to contribute content to CEBC’s Newsletter to promote events, updates and activities',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: true,
        },
        {
            title: 'Logo on CEBC website and marketing materials',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: true,
        },
        {
            title: 'Access to the Members only content of the CEBC website for a number of services including event listings and job postings',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: false,
        },
        {
            title: 'Free access to CEBC Events (conferences and seminars) – 2 tickets free per event',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: false,
        },
        {
            title: 'Discounts for delegates to access CEBC Events (conferences and seminars) – 50% discount per delegate',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: false,
        },
        {
            title: 'Opportunity to champion/head a working group promoting a specific topic in the clean energy industry culminating in research paper',
            PARTNER: true,
            CORPORATE: false,
            ASSOCIATE: false,
        },
        {
            title: 'CEBC to run and manage a webinar (at discounted price compared to market) per year for our partners to engage and communicate with their audiences',
            PARTNER: true,
            CORPORATE: false,
            ASSOCIATE: false,
        },
        {
            title: 'Right to nominate and vote for a CEBC board member',
            PARTNER: true,
            CORPORATE: false,
            ASSOCIATE: false,
        },

    ]

    function generate_table_view(data) {
        const data_views = data.map((entry, index) => {
            return (
                <Row style={{ backgroundColor: index % 2 === 1 ? '#eaeaea' : 'white', minHeight: '50px', padding: '15px' }}>
                    <Col xs={4} md={3} className=" " style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
                        {entry.title}
                    </Col>

                    <Col xs={2} md={3} className=" " style={{ fontSize: "30px", color: 'gray' }}>
                        <div className="table_cell" >
                            {entry.PARTNER && <i class="far fa-check-square"></i>}
                        </div>
                    </Col>
                    <Col xs={2} md={3} className=" " style={{ fontSize: "30px", color: 'gray' }}>
                        <div className="table_cell">
                            {entry.CORPORATE && <i class="far fa-check-square"></i>}
                        </div>
                    </Col>
                    <Col xs={2} md={3} className=" " style={{ fontSize: "30px", color: 'gray' }}>
                        <div className="table_cell" >
                            {entry.ASSOCIATE && <i class="far fa-check-square"></i>}
                        </div>
                    </Col>
                </Row>
            )

        })

        return data_views
    }

    return (
        <div style={{ minHeight: "300px", paddingTop: '200px', paddingBottom: '', backgroundColor: "" }}>
            <Container>
                <Row className="title_row">
                    <div class="section_header" style={{ marginTop: "10px", alignItems: 'start', textAlign: 'left' }}>
                        <span class="section_header_inner" style={{ fontSize: '34px', }}>MEMBERSHIP LEVELS</span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                    </div>
                </Row>
                <Row>
                    <Col style={{ fontFamily: "'Raleway', sans-serif", textAlign: 'left' }}>
                        Information on our three different levels of membership is available below. From time to time, we also offer Honorary Memberships to select organisations.

                        If you are a recruiter and would like to join to access our extended network of stakeholders, you can also apply for a special level of membership – please click here for more information.

                        If you have any questions on membership, or would like to know more, please email ahmed@cebcmena.com.
                    </Col>
                </Row>
            </Container>

            <Container style={{ margin: 'auto', paddingTop: "40px", paddingBottom: '40px', fontFamily: "'Raleway', sans-serif", }}>

                <div style={{ backgroundColor: '#eaeaea', minHeight: '50px', padding: '8px' }}>
                    <Row style={{ marginTop: 'auto', marginBottom: 'auto' }} className='pt-2' >
                        <Col md={3} className=" " style={{ padding: '10px', display: "flex", justifyContent: 'center', flexDirection: 'column' }}>

                        </Col>
                        <Col md={3} className=" " style={{ padding: '10px', }}>
                            <div style={{ width: '90%', minHeight: "130px", backgroundColor: "gray", display: "flex", justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
                                <div>
                                    <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                        PARTNER MEMBER
                                    </div>

                                    <div style={{ fontSize: "30px", fontWeight: "bolder", color: "white" }}>
                                        $5,000 USD
                                    </div>
                                    <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                        per annum
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className=" " style={{ padding: '10px', }}>
                            <div style={{ width: '90%', minHeight: "130px", backgroundColor: "#FFB600", display: "flex", justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
                                <div>
                                    <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                        CORPORATE MEMBER
                                    </div>
                                    <div style={{ fontSize: "30px", fontWeight: "bolder", color: "white" }}>
                                        $2,500 USD
                                    </div>
                                    <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                        per annum
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className=" " style={{ padding: '10px', }}>
                            <div style={{ width: '90%', minHeight: "130px", backgroundColor: "gray", display: "flex", justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
                                <div>
                                    <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                        ASSOCIATE MEMBER
                                    </div>
                                    <div style={{ fontSize: "30px", fontWeight: "bolder", color: "white" }}>
                                        $500 USD
                                    </div>
                                    <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                        per annum
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
                {generate_table_view(data)}
            </Container>

            <div style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "100px", marginTop: "40px", width: "600px" }}>

                <CallToAction />

            </div>

        </div>
    )
}

export default LevelsPageComponent
