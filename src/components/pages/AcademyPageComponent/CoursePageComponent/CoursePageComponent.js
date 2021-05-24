import "./CoursePageComponent.css"
import { Link } from "react-router-dom";
import moment from 'moment';



import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';
import { useHttpClient } from "../../../../hooks/http-hook"

import renderHTML from 'react-render-html';

import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';




import { useRef } from 'react'
import { Modal, ModalBody, } from 'reactstrap';


import { useContext } from "react";
import * as Yup from 'yup'

import logo_black from './logo_black.png'
import { Alert } from 'reactstrap';

import { Formik, Form, Field, ErrorMessage } from 'formik'




import { Collapse, Button, CardBody, Card } from 'reactstrap';



const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    entity: Yup.string().required('Required'),
    message: Yup.string().required('Required'),

})
const initialValues = {
    name: '',
    email: '',
    entity: '',
    Message: '',
}









function CoursePageComponent(props) {







    const formRef = useRef();
    const [modal, setModal] = useState(false);
    const [Response_json_content, setResponse_json_content] = useState({});
    const [Fetch_success, setFetch_success] = useState(false);
    const [Sending_data, setSending_data] = useState(false);
    const [Fetch_error, setFetch_error] = useState(false);
    const [Error_message, setError_message] = useState(null);
    const [formValues, setFormValues] = useState(null)

    const onSubmit = async (values, submitProps) => {
        setError_message(null)
        console.log('Form data', values)
        console.log('submitProps', submitProps)
        const request_data = {
            "sender_name": values.name,
            "entity_name": values.entity,
            "email": values.email,
            "message": values.message,
            "course": the_course,

        }
        console.log('request_data', request_data)

        try {
            setSending_data(true)
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/applications-for-courses`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request_data)
            });
            const response_json_content = await response.json()
            if (!response.ok) {
                setFetch_error(true)
                throw new Error(response_json_content.message || "something went wrong");
            }
            setSending_data(false)
            setResponse_json_content(response_json_content)

            if (response_json_content.email !== "") {
                setFetch_success(true)
                console.log({ response_json_content })
            }

        } catch (err) {
            setSending_data(false)
            setError_message(err)
            console.log(err);
        }

    }

    function render_submit_button() {

        let fomik_object = formRef.current;
        if (Sending_data) {
            return (
                <div style={{ marginTop: "30px" }}>
                    <ReactLoading type={"spin"} color={"#00D2F9"} width={"30px"} />
                </div>
            )
        }

        else if (Fetch_success) {

            return (
                <Alert color="success" style={{ marginTop: "30px", color: '' }}>
                    Application submitted .. we will come back to you soon
                </Alert>
            )
        }
        else if (Error_message) {

            return (
                <div>

                    <button
                        className='signub_submit_button'
                        type='submit'
                        disabled={!fomik_object.isValid}
                        style={{ backgroundColor: (!fomik_object.isValid) ? "grey" : "" }}
                    >
                        {(!fomik_object.isValid) ? "data not valid" : "Submit"}
                    </button>
                    <Alert color="danger" style={{ marginTop: "30px", color: '' }}>

                        something went wrong please try again later

                    </Alert>
                </div>
            )
        }
        else if (formRef.current) {
            return (

                <button
                    className='signub_submit_button'
                    type='submit'
                    disabled={!fomik_object.isValid || fomik_object.isSubmitting}
                    style={{ backgroundColor: (!fomik_object.isValid || fomik_object.isSubmitting) ? "grey" : "" }}
                >
                    {(!fomik_object.isValid || fomik_object.isSubmitting) ? "data not valid" : "Submit"}
                </button>
            )

        }

    }












    // console.log(props.match.params.course_id)

    const course_id = props.match.params.course_id;
    const the_course = props.courses.filter((course) => { return course.id == course_id })[0]
    console.log(`the_course`, the_course)



    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>

            <div id="course_background">

                <div
                    id="course_box">
                    {!!the_course ?
                        <div>
                            <div id="course_header" style={{}}>

                                <div id="header_img" style={{ padding: "0px", height: "100%", width: "100%", position: "absolute" }}>
                                    {the_course.image ?

                                        <div
                                            style={{
                                                position: "absolute",
                                                display: "flex", justifyContent: "center", alignItems: "center", width: "100%", overflow: "hidden", height: "100%"
                                            }}>
                                            <img src={`${the_course.image && the_course.image.url}`} style={{ width: "100%", height: "100%", objectFit: 'cover', filter: 'brightness(40%)' }} alt="" />
                                        </div>
                                        :
                                        <img src={`/logo_black.png`}
                                            style={{ width: "100%", height: "auto", position: "relative", top: "50px" }} alt="" />
                                    }


                                </div>


                                <div id="course_box_title" >
                                    <h1 style={{ fontSize: "50px" }}> {the_course.title}</h1>
                                </div>

                            </div>
                            <div id="course_header_2">
                                <i class="fas fa-chalkboard-teacher mr-2"></i>

                                {`CEBC COURSE `}
                                {/* {the_course.Type} */}
                            </div>
                            <div id="course_body">
                                <div style={{ width: '100%', margin: "auto" }}>
                                    <div className='course_body_section_title'>
                                        Description:
                                        </div>
                                    <div className='course_body_section_body'>
                                        <div className='course_section_subbody'>
                                            {the_course.description}
                                        </div>
                                    </div>

                                </div>


                                <div style={{ width: '100%', margin: "auto" }}>
                                    <div className='course_body_section_title'>
                                        Prospective Participant:
                                        </div>
                                    <div className='course_body_section_body'>
                                        <div className='course_section_subbody'>
                                            {the_course.prospective_participant}
                                        </div>
                                    </div>

                                </div>

                                <div className='course_body_section_title'>
                                    Structure:

                                </div>
                                <div className='course_body_section_body' >
                                    <Editor value={the_course.structure} onChange={(input) => { }} />
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


                <div id="members_container">
                    {!!the_course &&
                        <>
                            {the_course &&
                                <div>


                                    <div style={{ maxWidth: '1000px', margin: 'auto', width: '85vw', display: "flex", flexWrap: "wrap", justifyContent: "start", marginTop: "0px", marginBottom: "0px" }}>
                                        <Row style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                            <Col md={5} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                                <div className='date_box'>
                                                    <i class="far fa-calendar-alt mr-2" ></i>
                                                    <span style={{ fontWeight: 'bold', marginRight: "5px" }}>STARTS:</span>
                                                    <span style={{ fontWeight: 'bold', color: "#0a90ef", marginRight: "5px" }}>
                                                        {the_course.end_date &&
                                                            moment(the_course.start_date).format('DD-MMMM-YYYY')}

                                                    </span>
                                                </div>
                                            </Col>
                                            <Col className='d-none d-md-flex' xs={0} md={1} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                                <div className='date_box' style={{ padding: '0', height: '40px', width: '40px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                                    <i class="fas fa-arrow-right"></i>
                                                </div>
                                            </Col>
                                            <Col md={5} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                                <div className='date_box'>
                                                    <i class="far fa-calendar-alt mr-2" ></i>
                                                    <span style={{ fontWeight: 'bold', marginRight: "5px" }}>ENDS:</span>
                                                    <span style={{ fontWeight: 'bold', color: "#0a90ef", marginRight: "5px" }}>
                                                        {the_course.end_date &&
                                                            moment(the_course.end_date).format('DD-MMMM-YYYY')}

                                                    </span>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            }

                            {the_course &&
                                <div>
                                    <div style={{ maxWidth: '1000px', margin: 'auto', width: '85vw', display: "flex", flexWrap: "wrap", justifyContent: "start", marginTop: "0px", marginBottom: "40px" }}>

                                        <Row style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>


                                            <Col md={12} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                                                <div className='application_form_box p-3 p-md-0'>
                                                    <Row style={{ padding: "10px 10px 10px 0px ", }} >
                                                        <Col md={4} >
                                                            <div className='su_left_col' style={{}}>


                                                                <div class="section_header" style={{ textAlign: 'left', marginTop: "30px", alignItems: 'start', width: '100%', maxWidth: '100%', margin: 'auto', }}>
                                                                    <span class="section_header_inner" style={{ marginTop: "20px", fontSize: '40px', fontWeight: 'bold' }}>APPLY NOW</span>
                                                                    <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '0px' }}></div>
                                                                </div>


                                                                <div style={{ marginTop: "20px", width: '100%', display: "flex", justifyContent: 'left', alignItems: 'center' }}>
                                                                    <img id="" style={{ height: "auto", width: "90%" }} src={logo_black} alt="oval" />
                                                                </div>
                                                                <div style={{ color: 'grey', textAlign: "left", width: '100%', display: "flex", justifyContent: 'center', marginTop: '20px', padding: '10px' }}>
                                                                    Send us a message  and we will contact you back soon
                                                                </div>
                                                                <div style={{ color: "grey", textAlign: "left", width: '100%', display: "flex", justifyContent: 'center', marginTop: '5px', padding: '10px' }}>
                                                                </div>
                                                            </div>
                                                        </Col>

                                                        <Col md={8}>

                                                            <Formik
                                                                initialValues={formValues || initialValues}
                                                                validationSchema={validationSchema}
                                                                onSubmit={onSubmit}
                                                                enableReinitialize
                                                                innerRef={formRef}
                                                            >
                                                                {formik => {
                                                                    // console.log('Formik props', formik)
                                                                    return (
                                                                        <Form className="signUP_form">
                                                                            <Row className='formik-control'>
                                                                                <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                                                    <label className='formik-label' htmlFor='name'>Your Name</label>
                                                                                </Col>
                                                                                <Col style={{ padding: '0px' }}>
                                                                                    <Field type='text' id='name' name='name' />
                                                                                </Col>
                                                                                <Col xs={12} style={{ padding: '0px' }}>
                                                                                    <ErrorMessage className='err_msg' name='name'>
                                                                                        {error => <div className='formikerror'>{error}</div>}
                                                                                    </ErrorMessage>
                                                                                </Col>
                                                                            </Row>

                                                                            <Row className='formik-control'>
                                                                                <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                                                    <label className='formik-label' htmlFor='email'>Your Email</label></Col>
                                                                                <Col style={{ padding: '0px' }}>
                                                                                    <Field type='email' id='email' name='email' /></Col>
                                                                                <Col xs={12} style={{ padding: '0px' }}>
                                                                                    <ErrorMessage className='err_msg' name='email'>
                                                                                        {error => <div className='formikerror'>{error}</div>}
                                                                                    </ErrorMessage>
                                                                                </Col>
                                                                            </Row>

                                                                            <Row className='formik-control'>
                                                                                <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                                                    <label className='formik-label' htmlFor='entity'>Your Company Name</label>
                                                                                </Col>
                                                                                <Col style={{ padding: '0px' }}>
                                                                                    <Field
                                                                                        type='text'
                                                                                        id='entity'
                                                                                        name='entity'
                                                                                    />
                                                                                </Col>
                                                                                <Col xs={12} style={{ padding: '0px' }}>
                                                                                    <ErrorMessage className='err_msg' name='entity'>
                                                                                        {error => <div className='formikerror'>{error}</div>}
                                                                                    </ErrorMessage>
                                                                                </Col>
                                                                            </Row>

                                                                            <Row className='formik-control'>
                                                                                <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                                                    <label className='formik-label' htmlFor='message'>Message</label>
                                                                                </Col>
                                                                                <Col style={{ padding: '0px' }}>
                                                                                    <Field
                                                                                        as='textarea'
                                                                                        type='textarea'
                                                                                        id='message'
                                                                                        name='message'
                                                                                        placeholder='message '
                                                                                    />
                                                                                </Col>
                                                                                <Col xs={12} style={{ padding: '0px' }}>
                                                                                    <ErrorMessage className='err_msg' name='message'>
                                                                                        {error => <div className='formikerror'>{error}</div>}
                                                                                    </ErrorMessage>
                                                                                </Col>
                                                                            </Row>

                                                                            {render_submit_button()}

                                                                        </Form>
                                                                    )
                                                                }}
                                                            </Formik>


                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>
                                </div>
                            }
                        </>

                    }


                </div>



            </div>


        </>

    )
}

export default CoursePageComponent
