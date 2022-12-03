import React from "react";
import { useSearchParams } from 'react-router-dom';
import LessonList from "../component/LessonList";
import SearchBar from "../component/SearchBar";
import { getAllLessons } from "../utils/data";

function LessonPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <LessonPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  }

class LessonPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lessons: getAllLessons(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }
    
    onKeywordChangeHandler(keyword) {
        this.setState(() => {
          return {
            keyword,
          }
        });
        this.props.keywordChange(keyword);
    }
    
    render() {
        const lessons = this.state.lessons.filter((lesson) => {
            return lesson.title.toLowerCase().includes(
              this.state.keyword.toLowerCase()
            );
          });
        return (
            <React.Fragment>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <LessonList lessons={lessons} />
            </React.Fragment>
    )}
}

export default LessonPageWrapper;