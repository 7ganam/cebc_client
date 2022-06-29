import React, { useCallback, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactLoading from "react-loading";

import renderHTML from "react-render-html";
import "./SingleJobViewComponent.css";
import Editor from "./Editor/Editor";
import { Button, Col, Container, Row } from "reactstrap";

import moment from "moment";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FileUploader } from "react-drag-drop-files";

function SingleJobViewComponent(props) {
  const formRef = useRef();
  const [modal, setModal] = useState(false);
  const [Response_json_content, setResponse_json_content] = useState({});
  const [Fetch_success, setFetch_success] = useState(false);
  const [Sending_data, setSending_data] = useState(false);
  const [Fetch_error, setFetch_error] = useState(false);
  const [Error_message, setError_message] = useState(null);
  const [formValues, setFormValues] = useState(null);

  function render_submit_button() {
    let fomik_object = formRef.current;

    if (Sending_data) {
      return (
        <div style={{ marginTop: "30px" }}>
          <ReactLoading type={"spin"} color={"#00D2F9"} width={"30px"} />
        </div>
      );
    } else if (Fetch_success) {
      return (
        <Alert color="success" style={{ marginTop: "30px", color: "" }}>
          we recieved your message .. we will come back to you soon
        </Alert>
      );
    } else if (Error_message) {
      return (
        <div>
          <button
            className="signub_submit_button"
            type="submit"
            disabled={!fomik_object.isValid}
            style={{ backgroundColor: !fomik_object.isValid ? "grey" : "" }}
          >
            {!fomik_object.isValid ? "Data not valid" : "Submit"}
          </button>
          <Alert color="danger" style={{ marginTop: "30px", color: "" }}>
            something went wrong please try again later
          </Alert>
        </div>
      );
    } else if (formRef.current) {
      return (
        <>
          <button
            className="signub_submit_button"
            type="submit"
            disabled={!fomik_object.isValid || fomik_object.isSubmitting}
            style={{
              backgroundColor:
                !fomik_object.isValid || fomik_object.isSubmitting
                  ? "grey"
                  : "",
            }}
          >
            {!fomik_object.isValid || fomik_object.isSubmitting
              ? "Data not valid"
              : "Submit"}
          </button>
        </>
      );
    }
  }

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    cv: Yup.mixed("required").required("Required"),
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    country: "",
    email: "",
    cv: null,
  };

  const job_slug = props.match.params.job_slug;

  const the_job = props.jobs.filter((job) => job.slug == job_slug)[0]; //leave this as two ==

  const onSubmit = async (values, submitProps) => {
    setError_message(null);

    const data = {
      job: the_job?.title,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      country: values.country,
    };
    const formData = new FormData();
    formData.append(`files.cv`, values.cv, values.cv.name);
    formData.append("data", JSON.stringify(data));

    try {
      setSending_data(true);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/application-for-cebc-jobs`,
        {
          method: "POST",
          body: formData,
        }
      );
      const response_json_content = await response.json();
      if (!response.ok) {
        setFetch_error(true);
        throw new Error(
          response_json_content.message || "something went wrong"
        );
      }
      setSending_data(false);
      setResponse_json_content(response_json_content);

      if (response_json_content.email !== "") {
        setFetch_success(true);
        // login(response_json_content)
        // toggle();
      }
    } catch (err) {
      setSending_data(false);
      setError_message(err);
    }
  };

  const handleChange = (file) => {
    formRef.current.setFieldValue("cv", file);
    formRef.current.setFieldTouched("cv", true);
    formRef.current.setFieldError("cv", null);
  };

  return (
    <>
      <div className="back_ground_div"> </div>

      <div id="job_background">
        <Container
          style={{
            maxWidth: "90%",
            marginTop: "200px",
            display: "",
            paddingBottom: "100px",
          }}
        >
          <Row
            className="justify-content-start align-items-stretch"
            style={{ margin: "auto" }}
          >
            <Col className="p-0" md={8} style={{ margin: "auto" }}>
              <div className="job_box">
                {!!props.jobs && !!the_job ? (
                  <div>
                    <div id="job_header">
                      <div
                        id="header_text"
                        style={{
                          backgroundColor: "",
                          flexGrow: "1",
                          marginLeft: "20px",
                          display: "flex",
                          flexDirection: "column",
                          minHeight: "210",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          id="job_box_title"
                          style={{ textAlign: "center", fontSize: "20px" }}
                        >
                          <h1>{the_job.title}</h1>
                        </div>
                      </div>
                    </div>
                    <div id="job_header_2">
                      {/* <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center' }}>

                                                {the_job.Apprenticeship && <Alert color="primary" className="footer_tag">Apprenticeship   </Alert>}
                                                {the_job.Freelance && <Alert color="primary" className="footer_tag">Freelance   </Alert>}
                                                {the_job.FullTime && <Alert color="primary" className="footer_tag">FullTime   </Alert>}
                                                {the_job.Internship && <Alert color="primary" className="footer_tag">Internship   </Alert>}
                                                {the_job.PartTime && <Alert color="primary" className="footer_tag">PartTime   </Alert>}
                                                {the_job.Temporary && <Alert color="primary" className="footer_tag">Temporary   </Alert>}
                                            </div> */}
                    </div>
                    <div id="job_body">
                      <div style={{}}>
                        <div style={{ width: "100%", margin: "auto" }}>
                          <Editor
                            value={the_job.description}
                            onChange={(input) => {}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    id="loading_spinner"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "150px",
                    }}
                  >
                    <div style={{ marginTop: "100px" }}>
                      <ReactLoading
                        type={"spin"}
                        color={"#00D2F9"}
                        width={"20vw"}
                      />
                    </div>
                  </div>
                )}
              </div>

              {props.jobs && !!the_job && (
                <div>
                  <Row className=" justify-content-center">
                    <Col style={{ paddingTop: "0px" }}>
                      <div class="section_header">
                        <span class="section_header_inner">Apply for job</span>
                        <div className="section_header_under"></div>
                      </div>
                    </Col>
                  </Row>

                  {the_job && the_job.CEBC_JOB && (
                    <Row
                      style={{
                        minHeight: "30px",
                        marginBottom: "10px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        className="details_title"
                        xs={12}
                        style={{
                          minHeight: "30px",
                          marginBottom: "10px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Formik
                          initialValues={formValues || initialValues}
                          validationSchema={validationSchema}
                          onSubmit={onSubmit}
                          innerRef={formRef}
                          enableReinitialize={true}
                        >
                          {(formik) => {
                            return (
                              <Form className="signUP_form">
                                <Row className="formik-control">
                                  <Col
                                    md={12}
                                    style={{ padding: "0px 10px 0px 0px " }}
                                  >
                                    <label
                                      className="formik-label"
                                      htmlFor="first_name"
                                    >
                                      First Name:
                                    </label>
                                  </Col>
                                  <Col style={{ padding: "0px" }}>
                                    <Field
                                      type="text"
                                      id="first_name"
                                      name="first_name"
                                    />
                                  </Col>
                                  <Col xs={12} style={{ padding: "0px" }}>
                                    <ErrorMessage
                                      className="err_msg"
                                      name="first_name"
                                    >
                                      {(error) => (
                                        <div className="formikerror">
                                          {error}
                                        </div>
                                      )}
                                    </ErrorMessage>
                                  </Col>
                                </Row>

                                <Row className="formik-control">
                                  <Col
                                    md={12}
                                    style={{ padding: "0px 10px 0px 0px " }}
                                  >
                                    <label
                                      className="formik-label"
                                      htmlFor="last_name"
                                    >
                                      Last Name:
                                    </label>
                                  </Col>
                                  <Col style={{ padding: "0px" }}>
                                    <Field
                                      type="text"
                                      id="last_name"
                                      name="last_name"
                                    />
                                  </Col>
                                  <Col xs={12} style={{ padding: "0px" }}>
                                    <ErrorMessage
                                      className="err_msg"
                                      name="last_name"
                                    >
                                      {(error) => (
                                        <div className="formikerror">
                                          {error}
                                        </div>
                                      )}
                                    </ErrorMessage>
                                  </Col>
                                </Row>

                                <Row className="formik-control">
                                  <Col
                                    md={12}
                                    style={{ padding: "0px 10px 0px 0px " }}
                                  >
                                    <label
                                      className="formik-label"
                                      htmlFor="country"
                                    >
                                      Country:
                                    </label>
                                  </Col>
                                  <Col style={{ padding: "0px" }}>
                                    <Field
                                      type="text"
                                      id="country"
                                      name="country"
                                    />
                                  </Col>
                                  <Col xs={12} style={{ padding: "0px" }}>
                                    <ErrorMessage
                                      className="err_msg"
                                      name="country"
                                    >
                                      {(error) => (
                                        <div className="formikerror">
                                          {error}
                                        </div>
                                      )}
                                    </ErrorMessage>
                                  </Col>
                                </Row>

                                <Row className="formik-control">
                                  <Col
                                    md={12}
                                    style={{ padding: "0px 10px 0px 0px " }}
                                  >
                                    <label
                                      className="formik-label"
                                      htmlFor="email"
                                    >
                                      Your Email:
                                    </label>
                                  </Col>
                                  <Col style={{ padding: "0px" }}>
                                    <Field
                                      type="email"
                                      id="email"
                                      name="email"
                                    />
                                  </Col>
                                  <Col xs={12} style={{ padding: "0px" }}>
                                    <ErrorMessage
                                      className="err_msg"
                                      name="email"
                                    >
                                      {(error) => (
                                        <div className="formikerror">
                                          {error}
                                        </div>
                                      )}
                                    </ErrorMessage>
                                  </Col>
                                </Row>

                                <Row className="formik-control">
                                  <Col
                                    md={12}
                                    style={{ padding: "0px 10px 0px 0px " }}
                                  >
                                    <label
                                      className="formik-label"
                                      htmlFor="message"
                                    >
                                      Upload your Resume:
                                    </label>
                                  </Col>
                                  <Col style={{ padding: "0px" }}>
                                    <FileUploader
                                      multiple={false}
                                      handleChange={handleChange}
                                      name="file"
                                      style={{ height: "200px" }}
                                    />

                                    <div
                                      style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "start",
                                      }}
                                    >
                                      <p>
                                        {formik.values.cv
                                          ? `${formik.values.cv.name}`
                                          : "no files uploaded yet"}
                                      </p>
                                    </div>
                                  </Col>
                                </Row>

                                {render_submit_button()}
                              </Form>
                            );
                          }}
                        </Formik>
                      </Col>
                    </Row>
                  )}

                  <Row className=" justify-content-center">
                    <Col style={{ paddingTop: "0px" }}>
                      <div class="section_header">
                        <span class="section_header_inner">job DETAILS</span>
                        <div className="section_header_under"></div>
                      </div>
                    </Col>
                  </Row>
                  {the_job && the_job.application_link && (
                    <Row style={{ minHeight: "30px", marginBottom: "10px" }}>
                      <Col className="details_title " xs={6} md={3}>
                        Application link :
                      </Col>
                      <Col xs={6} md={8} className="details_value">
                        {the_job.application_link}
                      </Col>
                    </Row>
                  )}

                  {the_job && the_job.company_name && (
                    <Row style={{ minHeight: "30px", marginBottom: "10px" }}>
                      <Col className="details_title" xs={6} md={3}>
                        Company name :
                      </Col>
                      <Col md={8} xs={6} className="details_value">
                        {the_job.company_name}
                      </Col>
                    </Row>
                  )}
                  {the_job && the_job.contact_email && (
                    <Row style={{ minHeight: "30px", marginBottom: "10px" }}>
                      <Col className="details_title" xs={6} md={3}>
                        Contact email :
                      </Col>
                      <Col
                        md={8}
                        xs={6}
                        className="details_value"
                        style={{ overflow: "hidden" }}
                      >
                        {the_job.contact_email}
                      </Col>
                    </Row>
                  )}
                  {the_job && the_job.location && (
                    <Row style={{ minHeight: "30px", marginBottom: "10px" }}>
                      <Col className="details_title" xs={6} md={3}>
                        Location :
                      </Col>
                      <Col md={8} xs={6} className="details_value">
                        {the_job.location}
                      </Col>
                    </Row>
                  )}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SingleJobViewComponent;
