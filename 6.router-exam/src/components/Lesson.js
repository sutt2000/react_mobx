import React, { Component } from 'react';
import lessonsData from '../static-data/lessonsData';

class Lesson extends Component {
  render(){
    const lessonId = this.props.match.params.lessonId;
    const selectedLesson = lessonsData.find( lesson => {
      return lesson.id === Number(lessonId);
    })

    return <div>{selectedLesson.description}</div>
  }
}

export default Lesson;