import React from "react";

function LessonDetail({ id, title, createdAt, body }) {
    return (
        <div id={id} className="lesson-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{createdAt}</p>
            <p className="detail-page__body">{body}</p>
        </div >
    )
}

export default LessonDetail;