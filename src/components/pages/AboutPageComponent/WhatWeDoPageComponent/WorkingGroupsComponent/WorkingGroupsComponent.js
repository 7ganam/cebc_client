import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./WorkingGroupsComponent.css"
import WorkingGroupCardComponent from "./WorkingGroupCardComponent/WorkingGroupCardComponent"

import { Link } from "react-router-dom";




function WorkingGroupsComponent(props) {

    console.log('props.programmes_state.LoadedProgrammes.length', props.programmes_state.LoadedProgrammes.length)

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
        <div style={{ marginTop: '110px' }}>
            <Container >
                <Row className=" justify-content-center">
                    <div class="section_header" style={{ marginTop: "70px" }}>
                        {(props.type === "programm") ?
                            <span class="section_header_inner">
                                programmes
                             </span>
                            :
                            <span class="section_header_inner">
                                Working groups
                            </span>
                        }
                        <div className="section_header_under"></div>

                    </div>
                </Row>
                <Row className=" justify-content-center" style={{ marginTop: "40px" }}>
                    {props.programmes_state.LoadedProgrammes.length > 0 &&
                        render_groups(props.programmes_state.LoadedProgrammes)
                    }
                </Row>



            </Container>
        </div>
    )
}

export default WorkingGroupsComponent
