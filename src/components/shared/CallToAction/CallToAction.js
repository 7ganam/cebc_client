import React from 'react'
import { Link } from 'react-router-dom'
import './CallToAction.css'
function CallToAction(props) {
    return (
        <Link to='/MEMBERSHIP/JOIN' style={{ textDecorationLine: "none" }} >
            <div class="cto-button cto-shadow cto-animate cto-blue">
                <span style={{ marginRight: "10px", fontSize: "25px" }}> {props.text || "Join the CEBC now"}</span>
                <i style={{ fontSize: "25px" }} class="far fa-arrow-alt-circle-right"></i>
            </div>
        </Link>
    )
}

export default CallToAction
