import React, {Component} from 'react';
import Column from './QuestionsColumnDragable';
import {DragDropContext} from "react-beautiful-dnd";
import Spinner from '../components/Spinner/Spinner';

class TestQuestionsDragable extends Component {
  state = {
    questions: {},
    columns: {},
    columnOrder: []
  };

  componentDidMount() {
    setTimeout(() => {
      let columns = {};
      let questions = {};
      let columnOrder = [];
      this.props.session.map(session => {
        const column = { [session.key]: { id: session.key, title: session.name, questionsIds: [] } }
        columnOrder.push(session.key)
          session.assessmentitem_set.map(question => {
            const {key, type, full_text} = question.item.itemcontent.command_set[0];
            column[session.key].questionsIds.push(key);
            const quest = { [key]: {id:key, value:question.value, type:type, content:full_text} }
            Object.assign(questions, quest)
          })
        Object.assign(columns, column)
      })
      this.setState({questions: questions, columns: columns, columnOrder: columnOrder})
    }, 4000)
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    const column = this.state.columns;
    const questionIds = column[destination.droppableId].questionsIds;
    questionIds.splice(source.index, 1)
    questionIds.splice(destination.index, 0, draggableId)

    column[destination.droppableId].questionsIds = questionIds
    this.setState({columns: column});
  }

  render() {
    return (
        <div className="text-center">
        {
        (this.state.columnOrder.length > 0) ?
            <DragDropContext onDragEnd={this.onDragEnd}>
              {
                this.state.columnOrder.map(columnId => {
                  const column = this.state.columns[columnId];
                  const questions = column.questionsIds.map(questionId => this.state.questions[questionId]);
                  return <Column key={column.id} column={column} questions={questions} session={this.props.session}/>
                })
              }
            </DragDropContext> : <Spinner/>
        }
        </div>
    )};
};

export default TestQuestionsDragable;