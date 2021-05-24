import React, { useState, useRef } from 'react'
import { Col, Modal, ModalBody, Row } from 'reactstrap';
import ReactLoading from 'react-loading';


import { useContext } from "react";
import * as Yup from 'yup'

import "./ContactUsModalComponent.css"
import logo_black from './logo_black.png'
import { Alert } from 'reactstrap';

import { Formik, Form, Field, ErrorMessage } from 'formik'

const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    message: Yup.string().required('Required'),
})

const initialValues = {
    name: '',
    email: '',
    message: '',
}

function ContactUsModalComponent(props) {
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
            "name": values.name,
            "message": values.message,
            "email": values.email
        }
        console.log('request_data', request_data)

        try {
            setSending_data(true)
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/application-for-contacts`, {
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
                // login(response_json_content)
                // toggle();
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
                    we recieved your message .. we will come back to you soon
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
            <div id="sign_up_modal" >
                <Modal
                    size="lg" style={{ marginTop: '11vh', maxWidth: '1000px', width: '80%', marginRight: "auto", marginLeft: "auto", backgroundColor: 'transparent', zIndex: '113333333333333333' }}
                    isOpen={props.ModalIsOpen} toggle={props.toggle}>
                    <div style={{}} ></div>
                    <ModalBody style={{ padding: "0px", }} >
                        <div className='modal_header'  >
                            Contact Us
                        </div>
                        <Row style={{ padding: "20px", }} >
                            <Col md={4} >
                                <div className='su_left_col' style={{}}>
                                    <div style={{ width: '100%', display: "flex", justifyContent: 'left', alignItems: 'center' }}>
                                        <img id="" style={{ height: "auto", width: "90%" }} src={logo_black} alt="oval" />
                                    </div>
                                    <div style={{ color: 'grey', textAlign: "left", width: '100%', display: "flex", justifyContent: 'center', marginTop: '20px', padding: '10px' }}>
                                        we are happy to hear from you .. leave us a message
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
                                                        <label className='formik-label' htmlFor='name'>Your Name:</label>
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
                                                        <label className='formik-label' htmlFor='email'>Your Email:</label></Col>
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
                                                        <label className='formik-label' htmlFor='message'>Your Message:</label>
                                                    </Col>
                                                    <Col style={{ padding: '0px' }}>
                                                        <Field
                                                            as='textarea'
                                                            type='text'
                                                            id='message'
                                                            name='message'
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
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}

export default ContactUsModalComponent
