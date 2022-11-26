import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LessonItem({ id, title, createdAt, body }) {
    return (
        <div id={id} className="lesson-item">
            <Link to={`/detail/${id}`} className="lesson-item__title"><h3>{title}</h3></Link>
            <p className="lesson-item__createdAt">{createdAt}</p>
            <p className="lesson-item__body">{body}</p>
        </div >
    )
}

LessonItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired

}

export default LessonItem;