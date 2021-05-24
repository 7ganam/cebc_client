import React from 'react'
import "./BlogsPageComponent.css"
import moment from 'moment';
import { Col, Container, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody, CardFooter } from 'reactstrap';

function BlogsPageComponent(props) {
    console.log(` props.blogs`, props.blogs)



    const render_blogs = (blogs) => {

        const blogs_object = {}
        for (const blog of blogs) {
            let momentDate = moment(blog.date)
            let year = momentDate.year();
            let month = momentDate.month();

            if (!blogs_object[year]) { blogs_object[year] = {} }
            if (!blogs_object[year][month]) { blogs_object[year][month] = [] }

            blogs_object[year][month].push(blog)
        }

        const reander_sub_elements = (blogs_object, year) => {
            const sub_objects = []
            for (const month in blogs_object[year]) {
                for (const blog of blogs_object[year][month]) {
                    sub_objects.push(

                        <Col md={4} lg={3}>
                            <Card className="past_blog_card">
                                {blog.image ?

                                    <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={`${blog.image && blog.image.url}`} alt="Card image cap" />
                                    :
                                    <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={"/logo_black.png"} alt="Card image cap" />
                                }
                                <CardBody>
                                    <CardTitle tag="h5"> {blog.title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-blog-d"><span class="mec-start-date-label" itemprop="startDate">{blog.date}</span></span>
                                    </CardSubtitle>
                                    <CardText></CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    <Link to={`/KNOWLEDGECENTER/BLOGS/${blog.id}`}>
                                        <div style={{ padding: '10px', borderStyle: "solid", borderWidth: "1px", background: "white", color: "black" }}>
                                            <div style={{}}>Read Blog</div>
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

        let render_blog = []
        render_blog.push(
            <div class="section_header" style={{ marginTop: "100px" }}>
                <span class="section_header_inner">
                    blogs
            </span>
                <div className="section_header_under"></div>
            </div>
        )


        const ordered_years = Object.keys(blogs_object).sort().reverse(
            (obj, key) => {
                obj[key] = blogs_object[key];
                return obj;
            },
            {}
        );
        console.log(`ordered_years`, ordered_years)

        for (const year of ordered_years) {
            render_blog.push(
                <>
                    <Container style={{ marginTop: "" }}>
                        <div class="mec-month-divider_past" data-toggle-divider="mec-toggle-202102-1135">
                            <span> {year}</span>
                            <i class="mec-sl-arrow-down">  </i>
                        </div>
                    </Container>
                    <Container style={{ marginTop: "50px" }}>
                        <Row>
                            {reander_sub_elements(blogs_object, year)}
                        </Row>
                    </Container>
                </>
            )

        }

        return render_blog
    }


    return (
        <div style={{ marginTop: '200px', marginBottom: '50px' }}>
            {props.blogs.length > 0 &&
                <div>
                    {render_blogs(props.blogs)}
                </div>

            }
        </div>
    )
}

export default BlogsPageComponent




