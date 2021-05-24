import React from 'react'
import './PastJobPageComponent.css'


import { useState, useRef } from 'react'
import { Col, Modal, ModalBody, Row } from 'reactstrap';
import ReactLoading from 'react-loading';


import { useContext } from "react";
import { LoginContext } from "../../../../../contexts/LoginContext"

import * as Yup from 'yup'

import logo_black from './logo_black.png'
import { Alert } from 'reactstrap';

import { Formik, Form, Field, ErrorMessage } from 'formik'


const validationSchema = Yup.object({



    title: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    description: Yup.string().required('Required'),
    Freelance: Yup.boolean(),
    Apprenticeship: Yup.boolean(),
    FullTime: Yup.boolean(),
    Internship: Yup.boolean(),
    PartTime: Yup.boolean(),
    Temporary: Yup.boolean(),



})

const initialValues = {
    title: '',
    location: '',
    email: '',
    description: '',
    Freelance: false,
    Apprenticeship: false,
    FullTime: false,
    Internship: false,
    PartTime: false,
    Temporary: false,


}

function PastJobPageComponent() {


    const { login, IsLoggedIn, Token, ToggleLoginModal, logout, IsSignUpModalShown, ToggleSignUpModal, User } = useContext(LoginContext);






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
        // console.log('submitProps', submitProps)
        const request_data = {
            "title": values.title,
            "location": values.location,
            "contact_email": values.email,
            "description": values.description,
            "Freelance": values.Apprenticeship,
            "FullTime": values.FullTime,
            "Internship": values.Internship,
            "PartTime": values.PartTime,
            "Temporary": values.Temporary,

        }
        console.log('request_data', values)

        try {
            setSending_data(true)
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + Token
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
                    job posted successfully
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


    return (
        <>
            {IsLoggedIn &&
                <div id="join_form" style={{ marginTop: "200px" }} >
                    <div
                        size="lg" style={{ marginTop: '11vh', maxWidth: '1000px', width: '80%', marginRight: "auto", marginLeft: "auto", backgroundColor: 'transparent' }}
                    >
                        <div style={{}} ></div>
                        <div style={{ padding: "0px", }} >
                            <div className='modal_header'  >
                                Post a job
                        </div>
                            <Row style={{ padding: "10px 10px 10px 0px ", }} >
                                <Col md={4} >
                                    <div className='su_left_col' style={{}}>
                                        <div style={{ width: '100%', display: "flex", justifyContent: 'left', alignItems: 'center' }}>
                                            <img id="" style={{ height: "auto", width: "90%" }} src={logo_black} alt="oval" />
                                        </div>
                                        <div style={{ color: 'grey', textAlign: "left", width: '100%', display: "flex", justifyContent: 'center', marginTop: '20px', padding: '10px' }}>
                                            post a job to be listed in cebc jobs page
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
                                                            <label className='formik-label' htmlFor='title'>Job title</label>
                                                        </Col>
                                                        <Col style={{ padding: '0px' }}>
                                                            <Field type='text' id='title' name='title' />
                                                        </Col>
                                                        <Col xs={12} style={{ padding: '0px' }}>
                                                            <ErrorMessage className='err_msg' name='title'>
                                                                {error => <div className='formikerror'>{error}</div>}
                                                            </ErrorMessage>
                                                        </Col>
                                                    </Row>
                                                    <Row className='formik-control'>
                                                        <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                            <label className='formik-label' htmlFor='location'>Location</label>
                                                        </Col>
                                                        <Col style={{ padding: '0px' }}>
                                                            <Field type='text' id='location' name='location' />
                                                        </Col>
                                                        <Col xs={12} style={{ padding: '0px' }}>
                                                            <ErrorMessage className='err_msg' name='location'>
                                                                {error => <div className='formikerror'>{error}</div>}
                                                            </ErrorMessage>
                                                        </Col>
                                                    </Row>

                                                    <Row className='formik-control'>
                                                        <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                            <label className='formik-label' htmlFor='email'>Contact Email</label></Col>
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
                                                            <label className='formik-label' htmlFor='message'>Description:</label>
                                                        </Col>
                                                        <Col style={{ padding: '0px' }}>
                                                            <Field
                                                                as='textarea'
                                                                type='textarea'
                                                                id='description'
                                                                name='description'
                                                                placeholder='description '
                                                            />
                                                        </Col>
                                                        <Col xs={12} style={{ padding: '0px' }}>
                                                            <ErrorMessage className='err_msg' name='description'>
                                                                {error => <div className='formikerror'>{error}</div>}
                                                            </ErrorMessage>
                                                        </Col>
                                                    </Row>





                                                    <div className='checks_wrapper'>

                                                        <div className='formik-check-control'>
                                                            <div className='check_wrapper'>
                                                                <div style={{ padding: '0px 1px 0px 0px ' }}>
                                                                    <label className='check-label' htmlFor='Freelance'>Freelance</label>
                                                                </div>
                                                                <div className="check_div" style={{ padding: '0px' }}>
                                                                    <Field
                                                                        type='checkbox'
                                                                        id='Freelance'
                                                                        name='Freelance'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='formik-check-control'>
                                                            <div className='check_wrapper'>
                                                                <div style={{ padding: '0px 1px 0px 0px ' }}>
                                                                    <label className='check-label' htmlFor='Apprenticeship'>Apprenticeship</label>
                                                                </div>
                                                                <div className="check_div" style={{ padding: '0px' }}>
                                                                    <Field
                                                                        type='checkbox'
                                                                        id='Apprenticeship'
                                                                        name='Apprenticeship'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='formik-check-control'>
                                                            <div className='check_wrapper'>
                                                                <div style={{ padding: '0px 1px 0px 0px ' }}>
                                                                    <label className='check-label' htmlFor='FullTime'>FullTime</label>
                                                                </div>
                                                                <div className="check_div" style={{ padding: '0px' }}>
                                                                    <Field
                                                                        type='checkbox'
                                                                        id='FullTime'
                                                                        name='FullTime'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='formik-check-control'>
                                                            <div className='check_wrapper'>
                                                                <div style={{ padding: '0px 1px 0px 0px ' }}>
                                                                    <label className='check-label' htmlFor='Internship'>Internship</label>
                                                                </div>
                                                                <div className="check_div" style={{ padding: '0px' }}>
                                                                    <Field
                                                                        type='checkbox'
                                                                        id='Internship'
                                                                        name='Internship'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='formik-check-control'>
                                                            <div className='check_wrapper'>
                                                                <div style={{ padding: '0px 1px 0px 0px ' }}>
                                                                    <label className='check-label' htmlFor='PartTime'>PartTime</label>
                                                                </div>
                                                                <div className="check_div" style={{ padding: '0px' }}>
                                                                    <Field
                                                                        type='checkbox'
                                                                        id='PartTime'
                                                                        name='PartTime'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='formik-check-control'>
                                                            <div className='check_wrapper'>
                                                                <div style={{ padding: '0px 1px 0px 0px ' }}>
                                                                    <label className='check-label' htmlFor='Temporary'>Temporary</label>
                                                                </div>
                                                                <div className="check_div" style={{ padding: '0px' }}>
                                                                    <Field
                                                                        type='checkbox'
                                                                        id='Temporary'
                                                                        name='Temporary'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>
                                                    {render_submit_button()}

                                                </Form>
                                            )
                                        }}
                                    </Formik>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default PastJobPageComponent
