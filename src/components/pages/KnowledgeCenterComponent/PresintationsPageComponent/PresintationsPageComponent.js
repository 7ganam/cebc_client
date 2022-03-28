import React from 'react'
import './PresintationsPageComponent.css'

import { useHttpClient } from "./../../../../hooks/http-hook"
import { useState, useEffect, useCallback } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";
import moment from 'moment';


function s3_map(str) {
    str = str.replace('cebc2', 'cebc3');
    str = str.replace('cebc.s3.eu-central', 'cebc3.s3.eu-central');
    return str
}



function PresintationsPageComponent() {



    const { isLoading: PresentationsIsLoading, error: PresentationsError, sendRequest: sendPresentationsRequest, clearError } = useHttpClient();
    const [LoadedPresentations, setLoadedPresentations] = useState([]);
    const fetch_Presentations = useCallback(
        async () => {
            try {

                const responseData = await sendPresentationsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/presentation-groups?_limit=500&_sort=date:DESC`
                );

                setLoadedPresentations(responseData);
                // console.log('loaded presentation-groups', responseData)
            } catch (err) {
                console.log({ err })
            }


        },
        [sendPresentationsRequest],
    );



    useEffect(() => {
        fetch_Presentations();

    }, []);







    function generate_presentations_view() {
        const presentation_container = []
        let latest_date = '1000'
        for (const presentation_group of LoadedPresentations) {

            if (presentation_group.date && (moment(presentation_group.date).year() !== latest_date)) {
                latest_date = moment(presentation_group.date).year();
                presentation_container.push(

                    <div className='presentation_group_title' style={{ textAlign: 'center', fontSize: '35px', borderBottom: '3px solid #bebebe', marginBottom: '50px', marginTop: '70px', color: 'rgb(149 145 145)', padding: '10px' }}>
                        {
                            moment(presentation_group.date).year()

                        }
                        <span>
                            {` - Presentations`}
                        </span>

                    </div>

                )

            }
            presentation_container.push(

                <div className='presentation_group_title' style={{ textAlign: 'left' }}>
                    {presentation_group.title}
                    {presentation_group.date &&
                        <div style={{ color: 'gray', fontSize: '15px' }}>{presentation_group.date}</div>
                    }
                </div>

            )
            let pres = [].concat(presentation_group.presentation).reverse()


            for (const presentation of pres) {

                presentation_container.push(

                    <div className='presentation_box'   >
                        <a className="presentation_link" target="_blank" href={s3_map(presentation.file && presentation.file.url)} rel="noreferrer">
                            <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                            {` ${presentation.title}`}
                        </a>
                    </div>

                )
            }
        }

        return (presentation_container)
    }




    if (LoadedPresentations.length === 0) {
        return (
            <Container>
                <Row >
                    <div style={{ height: "100vh", margin: 'auto', marginTop: '200px' }}>
                        <ReactLoading type={"spin"} color={"#00D2F9"} width={"20vw"} />
                    </div>
                </Row>
            </Container>
        )
    }
    else {
        return (



            <div style={{ backgroundColor: '#F1F1F1', paddingTop: '10px', paddingBottom: '100px' }}>

                <Container className='sub_page_title_container' >
                    <Row className=" justify-content-center">
                        <Col>
                            <div class="sub_page_header">
                                <span class="sub_page_header_inner">Presentations</span>
                                <div className="sub_page_header_under"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container >

                    <Row style={{ backgroundColor: '' }}>
                        <div style={{ marginTop: '50px', width: '100%', padding: '10px' }}>
                            {generate_presentations_view()}
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default PresintationsPageComponent
