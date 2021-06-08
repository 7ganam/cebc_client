import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className="" to={`/ABOUTUS/JOBS/${props.job.id}`}>

                        <Button color="primary" >
                            Know more

                        </Button>
                    </Link>

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