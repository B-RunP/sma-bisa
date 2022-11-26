import React from "react";
import LessonList from "../component/LessonList";
import { getAllLessons } from "../utils/data";

function LessonPage() {
    const lessons = getAllLessons();
    return (
        <LessonList lessons={lessons} />
    )
}

export default LessonPage;