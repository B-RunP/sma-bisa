import React from "react";
import PropTypes from "prop-types";

function NoteItem({ id, title, createdAt, body }) {
    return (
        <div id={id} className="note-item">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__createdAt">{createdAt}</p>
            <p className="note-item__body">{body}</p>
        </div >
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired

}

export default NoteItem;