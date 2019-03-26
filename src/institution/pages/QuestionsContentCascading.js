import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from "../../store/actions/actionsTypes";


class QuestionsContentCascading extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    axios.get('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/str/rest/contentcascading/')
        .then(res => this.setState({data: res.data.items}))
        .catch(error => console.log(error))
  }

  printDisciplina = (event) => {
    let URL = 'https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/str/rest/contentcascading/' + event.target.value;
    axios.get(URL)
        .then(res => {
          console.log(res);
          res.data.items.map(item => {
            if (item.data.length > 0) {
              this.state.data.map(dataItems => {
                if (dataItems.order >= item.order) {
                  dataItems.data = item.data;
                }
              })
            }
          });
          this.forceUpdate();
        })
        .catch(error => console.log(error))
  };

  selectedContent = (event) => {
    this.props.onContent(event.target.value);
  };

  render() {
    return (
        <div className="row">
          {
            this.state.data.map(item => {
              return (
                  <div key={item.order} className="col input-group-sm">
                    <p>{item.name}</p>
                    <select className="custom-select" id="inputGroupSelect" onChange={this.selectedContent}>
                      <option defaultValue>Selecione</option>
                      {
                        item.data.map(value => {
                          return <option key={value.key} value={value.key}
                                         onClick={this.printDisciplina}>{value.name}</option>
                        })
                      }
                    </select>
                  </div>
              )
            })
          }
        </div>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onContent: (payload) => dispatch({type: actions.ADD_CONTENT_PK, payload: payload})
  }
};

export default connect(null, mapDispatchToProps)(QuestionsContentCascading);