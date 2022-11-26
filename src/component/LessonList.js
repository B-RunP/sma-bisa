import React from "react";
import LessonItem from "./LessonItem";

function LessonList({ lessons }) {
    return (
        <div className="lessons-list">
            {
                lessons.length === 0 ? (
                    <p className="lessons-list__empty-message">Tidak Ada Catatan</p>
                ) : (
                    lessons.map((lesson) => (
                        <LessonItem key={lesson.id} id={lesson.id} {...lesson} />
                    ))
                )
            }
        </div>
    )
}

export default LessonList;