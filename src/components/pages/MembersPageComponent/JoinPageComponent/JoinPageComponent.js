import React from 'react'
import './JoinPageComponent.css'


import { useState, useRef } from 'react'
import { Col, Container, Modal, ModalBody, Row } from 'reactstrap';
import ReactLoading from 'react-loading';


import { useContext } from "react";
import * as Yup from 'yup'

import logo_black from './logo_black.png'
import { Alert } from 'reactstrap';

import { Formik, Form, Field, ErrorMessage } from 'formik'


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    entity: Yup.string().required('Required'),
    level: Yup.string(),
    message: Yup.string()

})

const initialValues = {
    name: '',
    email: '',
    entity: '',
    level: '',
    Message: '',
}

function JoinPageComponent() {
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
            "level": values.level,
            "message": values.message,

        }
        console.log('request_data', request_data)

        try {
            setSending_data(true)
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/applications-for-memberships`, {
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
                    request submitted .. we will come back to you soon
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
            <div style={{ zIndex: '-1', width: "100%", height: "800px", position: "absolute", top: "0", right: "", overflow: "hidden" }} >
                <img src="/assets/images/hero.png" alt="" style={{ width: "100%", height: "auto", position: "", }} />
            </div>
            <Container style={{ marginTop: "200px" }}>
                <Row className=" justify-content-center">
                    <Col >
                        <div class="section_header">
                            <span class="section_header_inner">
                                Join CEBC
                                </span>
                            <div className="section_header_under"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div id="join_form" style={{ zIndex: '33333', marginTop: "100px" }} >
                <div

                    size="lg" style={{ marginTop: '11vh', maxWidth: '1000px', width: '80%', marginRight: "auto", marginLeft: "auto", backgroundColor: 'transparent', boxShadow: '1px 1px 5px 1px grey', marginBottom: '100px' }}
                >
                    <div style={{}} ></div>
                    <div style={{ padding: "0px", }} >
                        <div className='modal_header'  >
                            Apply for CEBC membership
                        </div>
                        <Row style={{ zIndex: '3', padding: "10px 10px 10px 0px ", }} >
                            <Col md={4} >
                                <div className='su_left_col' style={{}}>
                                    <div className='justify-content-md-left justify-content-center' style={{ width: '100%', display: "flex", alignItems: 'center' }}>
                                        <img id="" style={{ height: "auto", width: "90%" }} src={logo_black} alt="oval" />
                                    </div>
                                    <div style={{ color: 'grey', textAlign: "left", width: '100%', display: "flex", justifyContent: 'center', marginTop: '20px', padding: '10px' }}>
                                        Leave us a message and we will contact you soon
                                    </div>
                                    <div style={{ color: "grey", textAlign: "left", width: '100%', display: "flex", justifyContent: 'center', marginTop: '5px', padding: '10px' }}>
                                    </div>
                                </div>
                            </Col>

                            <Col md={8} className='px-5'>

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
                                                        <label className='formik-label' htmlFor='name'>Name</label>
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
                                                        <label className='formik-label' htmlFor='email'>Email</label></Col>
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
                                                        <label className='formik-label' htmlFor='entity'>Company</label>
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
                                                        <label className='formik-label' htmlFor='levle'>Membership Level</label>
                                                    </Col>
                                                    <Col style={{ padding: '0px' }}>
                                                        <Field
                                                            className="select_field"
                                                            component="select"
                                                            as="select"
                                                            type='text'
                                                            id='level'
                                                            name='level'

                                                        >
                                                            <option value="no_selection">Select level</option>
                                                            <option value="PARTNER">PARTNER - $5000</option>
                                                            <option value="CORPORATE">CORPORATE - $2500</option>
                                                            <option value="blASSOCIATEue">ASSOCIATE  - $500</option>
                                                        </Field>
                                                    </Col>
                                                    <Col xs={12} style={{ padding: '0px' }}>
                                                        <ErrorMessage className='err_msg' name='level'>
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
                </div>
            </div>
        </>
    )
}
export default JoinPageComponent
