import React from 'react'
import { Container } from 'reactstrap'
import JobCard from './JobCard/JobCard'
import ReactLoading from 'react-loading';
import { Formik, Field, Form } from 'formik';
import { useRef, useEffect, useState } from 'react'

import './JobPageCompoenent.css'

function JobPageCompoenent(props) {
    // console.log(`props`, props)



    const formRef = useRef();



    const [filteredJobs, setfilteredJobs] = useState(null)



    const [values, setvalues] = useState({ Temporary: false, PartTime: false, Apprenticeship: false, Freelance: false, Internship: false, FullTime: false })




    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setvalues({
            ...values,
            [name]: value
        });
        // console.log(`value`, values)
    }


    function filter_jobs(jobs, values) {
        console.log(`jobs`, jobs)
        const true_values = []
        // console.log(`values`, values)
        for (const value in values) {
            if (values[value]) {
                true_values.push(value)
            }
        }
        let filtered_jobs = jobs.filter(job => {
            let condition = true;
            for (const value of true_values) {
                condition = condition && job[value]
            }
            return (condition)
        });

        // console.log(`filtered_jobs`, filtered_jobs)
        return (filtered_jobs)
    }





    const render_jobs = (jobs, index) => {
        let jobs_view = jobs.map((job) => {
            return <JobCard job={job} index={index} />
        })
        return jobs_view
    }

    useEffect(() => {

    }, [props.jobs])

    return (
        <div style={{
            minHeight: "400px", paddingTop: '222px', paddingBottom: '300px'
        }}>
            { props.jobs && props.jobs.length > 0 ?
                <div>
                    <div class="section_header"><span class="section_header_inner">Careers</span><div class="section_header_under"></div></div>
                    <Container>

                        <div className='filter_box'>

                            <div className='filter_title'> Filter jobs</div>
                            <div className='filter_box_entries'>
                                <div className='filter_entry'>
                                    <span className='filter_entry_text'>
                                        Temporary
                                    </span>
                                    <span>
                                        <input class="ios_toggle" type="checkbox" name="Temporary"
                                            value={values["Temporary"]}
                                            onChange={handleInputChange}
                                            checked={values["Temporary"]}
                                        />
                                    </span>
                                </div>
                                <div className='filter_entry'>
                                    <span className='filter_entry_text'>
                                        Part Time
                                    </span>
                                    <span>
                                        <input class="ios_toggle" type="checkbox" name="PartTime"
                                            value={values["PartTime"]}
                                            onChange={handleInputChange}
                                            checked={values["PartTime"]}
                                        />
                                    </span>
                                </div>
                                <div className='filter_entry'>
                                    <span className='filter_entry_text'>
                                        Internship
                                    </span>
                                    <span>
                                        <input class="ios_toggle" type="checkbox" name="Internship"
                                            value={values["Internship"]}
                                            onChange={handleInputChange}
                                            checked={values["Internship"]}
                                        />
                                    </span>
                                </div>
                                <div className='filter_entry'>
                                    <span className='filter_entry_text'>
                                        Full Time
                                    </span>
                                    <span>
                                        <input class="ios_toggle" type="checkbox" name="FullTime"
                                            value={values["FullTime"]}
                                            onChange={handleInputChange}
                                            checked={values["FullTime"]}
                                        />
                                    </span>
                                </div>
                                <div className='filter_entry'>
                                    <span className='filter_entry_text'>
                                        Freelance
                                    </span>
                                    <span>
                                        <input class="ios_toggle" type="checkbox" name="Freelance"
                                            value={values["Freelance"]}
                                            onChange={handleInputChange}
                                            checked={values["Freelance"]}
                                        />
                                    </span>
                                </div>
                                <div className='filter_entry'>
                                    <span className='filter_entry_text'>
                                        Apprenticeship
                                    </span>
                                    <span>
                                        <input class="ios_toggle" type="checkbox" name="Apprenticeship"
                                            value={values["Apprenticeship"]}
                                            onChange={handleInputChange}
                                            checked={values["Apprenticeship"]}
                                        />
                                    </span>
                                </div>

                            </div>
                        </div>

                    </Container>
                    <Container className="">
                        {props.jobs && props.jobs.length > 0 && values &&
                            render_jobs(filter_jobs(props.jobs, values))
                        }
                    </Container>
                </div>
                :
                <div style={{ margin: 'auto', display: "flex", justifyContent: 'center' }}>
                    <ReactLoading type={"spin"} color={"#00D2F9"} width={"100px"} />
                </div>

            }
        </div>
    )
}

export default JobPageCompoenent
