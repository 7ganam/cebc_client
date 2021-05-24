import React from 'react'
import "./WorkingGroupsPageComponent.css"
import WorkingGroupsComponent from "../HomePageComponent/WorkingGroupsComponent/WorkingGroupsComponent"




function WorkingGroupsPageComponent(props) {
    return (

        <div style={{ marginTop: "150px" }}>
            <WorkingGroupsComponent programmes_state={props.programmes_state} type={props.type} />
        </div>
    )
}

export default WorkingGroupsPageComponent
