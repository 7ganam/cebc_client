import React from 'react'
import './PresintationsPageComponent.css'

import { useHttpClient } from "./../../../../hooks/http-hook"
import { useState, useEffect, useCallback } from 'react';
import { Container, Row } from 'reactstrap';
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";




function PresintationsPageComponent() {



    const { isLoading: PresentationsIsLoading, error: PresentationsError, sendRequest: sendPresentationsRequest, clearError } = useHttpClient();
    const [LoadedPresentations, setLoadedPresentations] = useState([]);
    const fetch_Presentations = useCallback(
        async () => {
            try {

                const responseData = await sendPresentationsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/presentation-groups`
                );

                setLoadedPresentations(responseData);
                console.log('loaded presentation-groups', responseData)
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
        for (const presentation_group of LoadedPresentations) {
            presentation_container.push(
                <div className='presentation_group_title' style={{ textAlign: 'left' }}>
                    {presentation_group.title}
                </div>
            )
            console.log(`presentation_group`, presentation_group)
            for (const presentation of presentation_group.presentation) {
                presentation_container.push(

                    <div className='presentation_box'   >
                        <a className="presentation_link" target="_blank" href={presentation.file && presentation.file.url}>
                            <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                            {` ${presentation.title}`}
                        </a>
                    </div>

                )
                console.log(`presentation_container`, presentation.title)
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



            <div style={{ backgroundColor: '#F1F1F1', paddingTop: '200px', paddingBottom: '100px' }}>

                <Container >
                    <div class="section_header" >
                        <span class="section_header_inner">   Presentations    </span>
                        <div className="section_header_under"></div>
                    </div>
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
