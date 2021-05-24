import React, { useState, useCallback, useEffect } from 'react';
import './WhatWeDoPageComponent.css';

import { Col, Container, Row } from 'reactstrap';

import mena from './../images/mena1.png';

import WorkingAreaComponent from './../WorkingAreaComponent/WorkingAreaComponent';

import SDGComponenet from './../SDGComponenet/SDGComponenet';

import { useHttpClient } from '../../../../hooks/http-hook';

import black_img from './Saidi-trans.png';

import world from './world_2.png';

import quote_marks from './quote3.png';
import WorkingGroupsComponent from './WorkingGroupsComponent/WorkingGroupsComponent'

import CallToAction from '../../../shared/CallToAction/CallToAction';
function WhatWeDoPageComponent(props) {
    const { sendRequest: sendcontentRequest } = useHttpClient();
    const [Loadedcontent, setLoadedcontent] = useState([]);
    const fetch_content = useCallback(async () => {
        try {
            const responseData = await sendcontentRequest(
                `${process.env.REACT_APP_BACKEND_URL}/about-page`
            );
            setLoadedcontent(responseData);
            // console.log('content ', responseData)
        } catch (err) {
            console.log({ err });
        }
    }, [sendcontentRequest]);

    useEffect(() => {
        fetch_content();
    }, []);

    return (
        <div>
            <div
                style={{
                    width: '100%',
                    height: '800px',
                    position: 'absolute',
                    top: '0',
                    right: '',
                    overflow: 'hidden',
                }}
            >
                <img
                    src="/assets/images/hero.png"
                    alt=""
                    style={{ width: '100%', height: 'auto', position: '' }}
                />
            </div>

            <Container
                style={{
                    marginTop: '170px',
                    marginBottom: '50px',
                    overflow: 'visible',
                }}
            >
                <Row className=" justify-content-center">
                    <Col>
                        <div class="section_header">
                            <span class="section_header_inner">About the CEBC</span>
                            <div className="section_header_under"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="quote_box">
                        <div className="quote_content" style={{}}>

                            <div>
                                <div className="quote_message">
                                    <div className="quote_marks" style={{}}>
                                        <img
                                            src={quote_marks}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            alt="gead"
                                        ></img>
                                    </div>
                                    <div className="quote_marks2" style={{}}>
                                        <img
                                            src={quote_marks}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            alt="gead"
                                        ></img>
                                    </div>

                                    <div>
                                        The world is witnessing an energy transformation and clean
                                        energy revolution
                                   </div>
                                </div>
                                <div className="quote_signature">
                                    <div style={{ color: '#ffb600' }}>H.E. DR. NASSER SAIDI</div>
                                    <div style={{ color: 'white' }}>Chairman of the CEBC</div>
                                </div>
                            </div>
                        </div>
                        <div className="dr-saidi" style={{}}>
                            <img
                                src={black_img}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                alt="gead"
                            ></img>
                        </div>

                        <div
                            className="world_bg"
                            style={{ width: '50%', height: '100%', marginLeft: '' }}
                        >
                            <img
                                src={world}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                alt="gead"
                            ></img>
                        </div>
                    </div>
                </Row>

            </Container>


            <div
                style={{
                    marginTop: '  120px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f7f7f7',
                    height: '',
                    paddingTop: '1px',
                }}
            >
                <Container>
                    <Row className="title_row">
                        <div
                            class="section_header"
                            style={{
                                marginLeft: '15px',
                                marginTop: '60px',
                                alignItems: 'start',
                                textAlign: 'left',
                                paddingLeft: ' 0',
                                fontWeight: '400',
                            }}
                        >
                            <span
                                class="section_header_inner"
                                style={{ fontSize: '34px', fontWeight: '300' }}
                            >
                                What We Do
                            </span>
                            <div
                                className="section_header_under"
                                style={{
                                    fontSize: '34px',
                                    marginBottom: '20px',
                                    width: '250px',
                                }}
                            ></div>
                        </div>
                    </Row>
                    <Row>
                        <Col
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                textAlign: 'left',
                                fontSize: '20px',
                                marginBottom: '40px',
                                fontSize: '18px',
                            }}
                        >
                            <div className="mt-3">
                                {' '}
                                The Clean Energy Business Council (CEBC) is a non-profit, non governmental association that brings together leading local and international organizations in the MENA clean energy sector from both the private and public spheres. It is the only clean energy industry group to cover the MENA region.
                            </div>
                            <div className="mt-3">
                                CEBC is a leading forum for local, international corporations and government entities focused on the development and deployment of clean energy in the MENA region. We promote constructive dialogue and collective action by all stakeholders, in order to guide public policy and private investment in the region’s nascent clean energy sector.
                            </div>
                            <div className="mt-3">
                                CEBC constantly strives to provide its members with updates on the latest developments in clean energy policy, research, and technology and opportunities to grow their organizations and network with high-level industry players. CEBC is an accredited observer at the Green Climate Fund and partner of the UNDP, IRENA Coalition for Action and the Research Council of Oman and Masdar.
                            </div>

                            <div className="mt-3">
                                {' '}
                                We are active throughout the MENA region with our Working Groups and Programmes, a range of events and networking opportunities, and by promoting connections between private and public sector organisations.
                           </div>

                        </Col>
                    </Row>


                </Container>
            </div>

            <Container>
                <Row className="title_row">
                    <div
                        class="section_header"
                        style={{
                            marginLeft: '15px',
                            marginTop: '10px',
                            alignItems: 'start',
                            textAlign: 'left',
                            paddingLeft: ' 0',
                            fontWeight: '400',
                        }}
                    >
                        <span
                            class="section_header_inner"
                            style={{ fontSize: '34px', fontWeight: '300' }}
                        >
                            Vision and Mission
                        </span>
                        <div
                            className="section_header_under"
                            style={{ fontSize: '34px', marginBottom: '20px', width: '250px' }}
                        ></div>
                    </div>
                </Row>

                <Col sm="12">
                    <div class="section_header" style={{ marginBottom: '20px' }}>
                        <span
                            class="section_header_inner"
                            style={{ fontWeight: 'bold' }}
                        ></span>
                    </div>
                </Col>
                <Row style={{ position: 'relative', top: '', overflow: 'visible' }}>
                    <div class='mena_image'
                        style={{
                            width: '125%',
                            height: '500px',
                            position: 'absolute',
                            top: '',
                            left: '-15%',
                            overflow: 'visible',
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                        }}
                    >
                        <img
                            src={mena}
                            alt=""
                            style={{
                                margin: 'auto',
                                width: '95vw',
                                height: 'auto',
                                filter: ' grayscale(1)',
                                opacity: ' .1',
                            }}
                        />
                    </div>

                    <Col className="p-md-2" md={{ size: 6 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i className="solid  fas fa-hands-helping"></i>
                            </div>
                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header">Leading forum</h3>
                Establish a leading forum for companies and government entities
                focused on the development and deployment of clean energy in the
                MENA region;
              </div>
                        </div>
                    </Col>
                    <Col className="p-md-2" md={{ size: 6, order: 2, offset: 0 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i class="solid fas fa-charging-station"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header">Promote the clean energy</h3>
                Promote the clean energy industry beginning to flourish in the
                region and inform the wider community of the benefits of the
                sector;
              </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ position: 'relative', top: '' }}>
                    <Col className="p-md-2" md={{ size: 6 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i class="fas fa-file-contract"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header">
                                    Collaborate with governments
                </h3>
                Collaborate with government agencies and other stakeholders in
                policy development and regulation of this rapidly developing and
                exciting sector;
              </div>
                        </div>
                    </Col>
                    <Col className="p-md-2" md={{ size: 6, order: 2, offset: 0 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i class="fas fa-chess"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header">Strategic alliances</h3>
                Develop a series of strategic alliances with research
                institutions, international associations, media and others to
                drive the delivery of clean energy solutions for MENA;
              </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ position: 'relative', top: '' }}>
                    <Col className="p-md-2" md={{ size: 6 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i class="solid  fas fa-lightbulb"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header">Data and information</h3>
                Coordinate the gathering of data and information on the sector
                to ensure relevant benchmarking and transparency in the sectors
                development;
              </div>
                        </div>
                    </Col>
                    <Col className="p-md-2" md={{ size: 6, order: 2, offset: 0 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i class="  fas  fa-university"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header"> Assist governments</h3>
                Support and assist governments, industry and the community in
                the region to meet low carbon targets and sustainability goals.
              </div>
                        </div>
                    </Col>
                </Row>




            </Container>

            <div id="working_groups_section" style={{ marginTop: "100px", backgroundColor: "#f7f7f7", paddingBottom: "100px " }}>
                <WorkingGroupsComponent programmes_state={props.programmes_state} type="working_group" />

                <Row>
                    <div style={{ margin: ' 70px auto 50px auto' }}>
                        <CallToAction />
                    </div>
                </Row>
            </div>

        </div>
    );
}

export default WhatWeDoPageComponent;
