import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./WorkingGroupsComponent.css"
import WorkingGroupCardComponent from "./WorkingGroupCardComponent/WorkingGroupCardComponent"

import { Link } from "react-router-dom";




function WorkingGroupsComponent(props) {


    const render_groups = (groups) => {
        let filter_groups = groups.filter((group) => group.Type === props.type)
        const groups_view = filter_groups.map((group, index) => {
            return (
                <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                    <Link className="" to={`/ABOUTUS/working_groups/${group.id}`}>
                        <div className="working_group_col_div">
                            <WorkingGroupCardComponent image={group.Thumb_nail_image} title={group.Name} />
                        </div>
                    </Link>
                </Col>
            )
        })
        return (groups_view)
    }


    return (
        <div style={{ marginTop: '30px' }}>


            <div className='background_image_div' >
                <img src="/assets/images/hero.png" alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
            <Container className='sub_page_title_container' style={{ marginTop: '0px' }}>
                <Row className=" justify-content-center">
                    <Col>
                        <div class="sub_page_header" style={{ marginTop: '50px' }}>
                            {(props.type === "programm") ?
                                <span class="sub_page_header_inner">
                                    programmes
                             </span>
                                :
                                <span class="sub_page_header_inner">
                                    Working groups
                            </span>
                            }
                            <div className="sub_page_header_under"></div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>

                <Row className=" justify-content-center" style={{ marginTop: "40px" }}>
                    {props.programmes_state.LoadedProgrammes.length > 0 &&
                        render_groups(props.programmes_state.LoadedProgrammes)
                    }
                </Row>
                <Row className=" justify-content-center">
                    <Link to="/MEMBERSHIP/JOIN" style={{ textDecoration: 'none' }}>
                        <div className="end_div">
                            <h4 className="end_text">
                                BECOME A MEMBER
                        </h4>
                        </div>
                    </Link>
                </Row>


            </Container>
        </div>
    )
}

export default WorkingGroupsComponent
