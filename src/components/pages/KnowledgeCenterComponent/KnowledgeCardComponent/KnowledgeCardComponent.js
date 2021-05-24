import React from 'react'
import place_holder_img from "./placeholder.jpg"
import classes from "./KnowledgeCardComponent.module.css"

function KnowledgeCardComponent(props) {
    return (
        <div className={classes.card__group}>
            <a href="#">
                <span className={classes.card__image} style={{ backgroundImage: `url(${props.image})` }}>
                    <img src={place_holder_img} alt="working_group_image" />
                </span>
                <span className={classes.card__content}>
                    <h3>{props.title}</h3>
                </span>
            </a>
        </div>
    )
}

export default KnowledgeCardComponent
