import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import "./ProjectsPageComponent.css"

function ProjectsPageComponent(props) {

    console.log(`props.projects`, props.projects)
    function generate_projects_cards() {
        const projects = props.projects.map((project, index) => {
            return (
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Link to={`/KNOWLEDGECENTER/PROJECTS/${project.id}`}>
                        <div className="project_card">
                            <div style={{ width: "100%", height: "250px", borderRadius: "", overflow: "hidden", borderBottom: '1px solid #80808045' }}>
                                <img src={project.image && project.image.url} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>

                            <div style={{ background: "white", width: "100%", minHeight: "60px", color: "black", fontSize: "16px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <div >
                                    {project.title}
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

            )

        })
        return projects;
    }



    return (
        <div style={{ marginTop: '200px', marginBottom: '100px' }}>
            <div class="section_header" style={{ marginTop: "100px", marginBottom: "100px", zIndex: '99' }}>
                <span class="section_header_inner" style={{ zIndex: '99' }}>  PROJECTS    </span>
                <div className="section_header_under" style={{ zIndex: '99' }}></div>
            </div>
            <Container>
                <div className="back_ground_div">         </div>
                <Row>

                    {generate_projects_cards()}
                </Row>
            </Container>
        </div>
    )
}

export default ProjectsPageComponent
