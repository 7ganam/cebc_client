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
            <Link className="" to={`/ABOUTUS/JOBS/${props.job.id}`}>
                <Card>
                    <CardBody>
                        {/* <CardTitle className='header_text' tag="h2" style={{ marginTop: '0px' }}></CardTitle> */}
                        <h2 className='header_text' style={{ margin: '10px', height: '100%' }}>
                            {props.job.title}
                        </h2>

                        {/* <Button color="primary" >
                            Know more

                        </Button>
                   */}

                    </CardBody>
                    {/* <CardFooter >
                    <div style={{ display: 'flex', flexWrap: "wrap" }}>
                        {props.job.Apprenticeship && <Alert color="primary" className="footer_tag">Apprenticeship   </Alert>}
                        {props.job.Freelance && <Alert color="primary" className="footer_tag">Freelance   </Alert>}
                        {props.job.FullTime && <Alert color="primary" className="footer_tag">FullTime   </Alert>}
                        {props.job.Internship && <Alert color="primary" className="footer_tag">Internship   </Alert>}
                        {props.job.PartTime && <Alert color="primary" className="footer_tag">PartTime   </Alert>}
                        {props.job.Temporary && <Alert color="primary" className="footer_tag">Temporary   </Alert>}
                    </div>
                </CardFooter> */}
                </Card>
            </Link>
        </div>
    );
};

export default JobCard;