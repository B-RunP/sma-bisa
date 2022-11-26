import React from 'react';
import { useParams } from 'react-router-dom';
import LessonDetail from '../component/LessonDetail';
import { getLesson } from '../utils/data';

function DetailPageWrapper() {
    const { id } = useParams();
    return (<DetailPage id={id} />)
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lesson: getLesson(this.props.id),
        }
    }

    render() {
        console.log(this.state.lesson);

        if (this.state.lesson === null) {
            return <p>Movie is not found!</p>;
        }

        return (
            <section>
                <LessonDetail id={this.state.lesson.id} title={this.state.lesson.title} createdAt={this.state.lesson.createdAt} body={this.state.lesson.body} />
            </section>
        );
    }
}

export default DetailPageWrapper;