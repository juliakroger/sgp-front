import React, {Component} from 'react';
import {Draggable} from "react-beautiful-dnd";
import {Dropdown, Input, Menu} from 'antd';


const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">VISUALIZAR</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">EDITAR</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">REMOVER</a>
      </Menu.Item>
    </Menu>
);

class Question extends Component {
  render() {
    return (
        <Draggable draggableId={this.props.question.id} index={this.props.index}>
          {(provided) => (
              <div className="card mb-1"
                   {...provided.draggableProps}
                   {...provided.dragHandleProps}
                   ref={provided.innerRef}>
                <div className="card-body row">
                  <div className="col-xs-1 border-right">{this.props.index + 1}</div>
                  <div className="col">
                    <p>{this.props.question.content.slice(0, 100)}...</p>
                    {
                      (this.props.question.type === 't') ? <p className="text-secondary font-italic">Questão discursiva</p> : <p className="font-weight-bold">Resposta: </p>
                    }
                  </div>
                  <div className="col-xs-1 text-center">
                    <div className="mb-1">
                      <Input addonBefore="Valor" defaultValue={this.props.question.value} size="small" style={{width: 100}}/>
                    </div>
                    <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href="#">
                        <i className="fas fa-ellipsis-v"></i>
                      </a>
                    </Dropdown>
                  </div>

                </div>
              </div>
          )}
        </Draggable>
    )
  }
}

export default Question;