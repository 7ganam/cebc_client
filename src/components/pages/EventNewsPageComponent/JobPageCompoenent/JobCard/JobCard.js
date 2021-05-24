import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Alert
} from 'reactstrap';
import { UncontrolledCollapse, } from 'reactstrap';


import './JobCard.css'


const JobCard = (props) => {


    return (
        <div className="job_card">
            <Card>
                <CardBody>
                    <CardTitle tag="h2" style={{ marginTop: '0px' }}>{props.job.title}</CardTitle>
                    {/* <CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
                    <Button color="primary" id={"toggler" + props.job.id}>Know more
                    <i class="fas fa-angle-down ml-2 " style={{ position: 'relative', top: '2px' }}></i>
                    </Button>
                    <UncontrolledCollapse toggler={"#toggler" + props.job.id}>
                        <Card>
                            <CardBody className="d-flex align-items-start  flex-column">
                                <div style={{ textAlign: 'left' }}>
                                    {props.job.description}
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span style={{ fontWeight: "bold ", marginRight: '5px', fontSize: "19px" }}>
                                        Location:
                                    </span>
                                    <span>

                                        <Alert color="info" style={{ marginTop: '10px' }}>
                                            {props.job.location}
                                        </Alert>

                                    </span>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span style={{ fontWeight: "bold ", marginRight: '5px', fontSize: "19px" }}>
                                        for applicationa contact:
                                    </span>
                                    <span>

                                        <Alert color="info" style={{ marginTop: '10px' }}>
                                            {props.job.contact_email}
                                        </Alert>

                                    </span>
                                </div>

                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </CardBody>
                <CardFooter >
                    <div style={{ display: 'flex', flexWrap: "wrap" }}>

                        {props.job.Apprenticeship && <Alert color="primary" className="footer_tag">Apprenticeship   </Alert>}
                        {props.job.Freelance && <Alert color="primary" className="footer_tag">Freelance   </Alert>}
                        {props.job.FullTime && <Alert color="primary" className="footer_tag">FullTime   </Alert>}
                        {props.job.Internship && <Alert color="primary" className="footer_tag">Internship   </Alert>}
                        {props.job.PartTime && <Alert color="primary" className="footer_tag">PartTime   </Alert>}
                        {props.job.Temporary && <Alert color="primary" className="footer_tag">Temporary   </Alert>}





                    </div>
                </CardFooter>
            </Card>

        </div>
    );
};

export default JobCard;