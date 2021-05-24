import React from 'react'
import "./KnowledgeCenterComponent.css"
import KnowledgeCardComponent from "./KnowledgeCardComponent/KnowledgeCardComponent"
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
// import casestudy from "./images/case.jpg"
// import blog from "./images/blog.jpg"
// import reports from "./images/reports.png"
// import web from "./images/web.png"

function KnowledgeCenterComponent() {
    return (
        <div >

            <div id="header_knowledge">
                <h1>Knowledge Center.</h1>
                <p>The archives of our 10 years experience in the industry.</p>
            </div>

            <Container style={{ marginTop: "130px ", marginBottom: "130px " }}>


                <Row className=" justify-content-center">
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <Link to="/KNOWLEDGECENTER/REPORTS">
                            <div className="working_group_col_div">
                                <KnowledgeCardComponent image="https://cebc.s3.eu-central-1.amazonaws.com/reports_bf47b2be7f.png" title="Publications" />
                            </div>
                        </Link>
                    </Col>

                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <Link to="/KNOWLEDGECENTER/WEBINARS">
                            <div className="working_group_col_div" >
                                <KnowledgeCardComponent image="https://cebc.s3.eu-central-1.amazonaws.com/web_43fb26057b.jpg" title="WEBINARS" />
                            </div>
                        </Link>

                    </Col>

                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <Link to="/KNOWLEDGECENTER/CASE_STUDIES">
                            <div className="working_group_col_div">
                                <KnowledgeCardComponent image="https://cebc.s3.eu-central-1.amazonaws.com/case_effb64a5fd.jpg" title=" CASE STUDIES" />
                            </div>
                        </Link>
                    </Col>
                    {/* 
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <Link to="/KNOWLEDGECENTER/BLOGS">
                            <div className="working_group_col_div" >
                                <KnowledgeCardComponent image="https://cebc.s3.eu-central-1.amazonaws.com/blog_567132f143.jpg" title="BLOG" />
                            </div>
                        </Link>
                    </Col> */}




                    {/* <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>

                        <Link to="/KNOWLEDGECENTER/PODCASTS">
                            <div className="working_group_col_div">
                                <KnowledgeCardComponent image="https://cebc.s3.eu-central-1.amazonaws.com/podcasting_pic_e077e0a2ce.jpg" title="PODCAST" />
                            </div>
                        </Link>

                    </Col> */}


                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>

                        <Link to="/KNOWLEDGECENTER/PROJECTS">
                            <div className="working_group_col_div">
                                <KnowledgeCardComponent image="https://cebc.s3.eu-central-1.amazonaws.com/news_09e2a5edc5.jfif" title="PROJECTS" />
                            </div>
                        </Link>

                    </Col>




                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <Link to="/KNOWLEDGECENTER/PRESENTATIONS">
                            <div className="working_group_col_div" >
                                <KnowledgeCardComponent image="https://cebc.s3.eu-central-1.amazonaws.com/presentaiotn_59ac70dfef.png" title="PRESENTATIONS" />
                            </div>
                        </Link>
                    </Col>

                    {/* <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <Link to="/KNOWLEDGECENTER/LINKS">
                            <div className="working_group_col_div">
                                <KnowledgeCardComponent image="https://cebc.s3.eu-central-1.amazonaws.com/arrow_url_5374a51063.png" title="USEFUL LINKS" />
                            </div>
                        </Link>
                    </Col> */}
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <Link to="/KNOWLEDGECENTER/NEWSLETTER">
                            <div className="working_group_col_div" >
                                <KnowledgeCardComponent image="/newsletter.png" title="NEWSLETTER" />
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KnowledgeCenterComponent
