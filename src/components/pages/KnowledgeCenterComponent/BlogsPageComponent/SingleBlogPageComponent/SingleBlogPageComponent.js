import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';
import "./SingleBlogPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';
import moment from 'moment';



function SingleBlogPageComponent(props) {

    // console.log(props.match.params.Event_id)
    // console.log(`singeprops.blogs`, props.blogs)
    const blog_id = props.match.params.blog_id;

    const the_blog = props.blogs.filter((blog) => blog.id == blog_id)[0] //leave this as two ==

    console.log(`the_blog`, the_blog)





    return (

        <>

            <div className="back_ground_div">    </div>

            <div id="blog_background">


                <Container style={{ maxWidth: '90%', marginTop: '200px', display: '' }}>
                    <Row className='justify-content-start align-items-stretch'>
                        <Col className='p-0' md={4} style={{ background: '', }}>
                            {!!props.blogs.length > 0 &&
                                <div className="blog_image_box">
                                    <img src={`${the_blog.image && the_blog.image.url}`} style={{ width: "100%", height: "auto", }} alt="" />
                                </div>
                            }

                        </Col>
                        <Col className='p-0' md={7}>
                            <div className="blog_box">
                                {!!props.blogs.length > 0 ?
                                    <div>
                                        <div id="blog_header" >

                                            <div id="header_text"
                                                style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "210px", justifyContent: "center" }}
                                            >
                                                <div id="blog_box_title" style={{ textAlign: "start", fontSize: '50px' }}>
                                                    <h1> {the_blog.title}</h1>
                                                </div>

                                            </div>


                                        </div>
                                        <div id="blog_header_2">

                                        </div>
                                        <div id="blog_body">
                                            <div style={{}}>
                                                <div style={{ width: '100%', margin: "auto" }}><Editor value={the_blog.blog_content} onChange={(input) => { }} /></div>
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <div id="loading_spinner" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }} >
                                        <div style={{ marginTop: "100px" }}>
                                            <ReactLoading type={"spin"} color={"#00D2F9"} width={"20vw"} />
                                        </div>
                                    </div>

                                }


                            </div>






                        </Col>
                    </Row>
                </Container>




            </div >

        </>
    )
}

export default SingleBlogPageComponent
