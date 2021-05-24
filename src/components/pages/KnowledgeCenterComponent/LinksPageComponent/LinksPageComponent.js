import React from 'react'
import './LinksPageComponent.css'

import { useHttpClient } from "./../../../../hooks/http-hook"
import { useState, useEffect, useCallback } from 'react';
import { Container, Row } from 'reactstrap';
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";




function LinksPageComponent(props) {









    function generate_links_view() {
        const link_container = []
        for (const link_group of props.links) {
            link_container.push(
                <div className='link_group_title' style={{ textAlign: 'left' }}>
                    {link_group.title_for_new_group_of_links}
                </div>
            )
            console.log(`link_group`, link_group)
            for (const link of link_group.link) {
                link_container.push(

                    <>
                        <div className='link_box'   >
                            <a className="link_link" target="_blank" href={link.link_url}>
                                <i class="fas fa-external-link-alt mr-2 ml-1"></i>
                                {` ${link.title}`}
                            </a>
                        </div>
                        <div className='link_sub_box'   >

                            {` ${link.description}`}

                        </div>
                    </>

                )
                console.log(`link_container`, link.title)
            }
        }

        return (link_container)
    }




    if (props.links.length === 0) {
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
                        <span class="section_header_inner">   useful links    </span>
                        <div className="section_header_under"></div>
                    </div>
                    <Row style={{ backgroundColor: '' }}>
                        <div style={{ marginTop: '50px', width: '100%', padding: '10px' }}>
                            {generate_links_view()}
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default LinksPageComponent
