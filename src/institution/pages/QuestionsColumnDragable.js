import React, {Component} from 'react';
import {Droppable} from "react-beautiful-dnd";
import Question from './QuestionsDragable'
import {Input} from 'antd';

class Column extends Component {
  render() {
    return (
        <div className="wrapper">
          <div className="card-body">
            <Input addonBefore="Seção" defaultValue={this.props.column.title} size="small" style={{width: 250}}/>
            <Droppable droppableId={this.props.column.id}>
              {provided => (
                  <div className="card-body"
                       ref={provided.innerRef}
                       {...provided.droppableProps}
                  >
                    {this.props.questions.map((question, index) => (
                        <Question key={question.id} question={question} index={index}/>
                    ))}
                    {provided.placeholder}
                  </div>
              )}
            </Droppable>
          </div>
        </div>
    );
  };
};

export default Column;