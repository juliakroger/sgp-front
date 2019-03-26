import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Process extends Component {
  render() {
    return (
        <div className="content">
          <div className="page-head">
            <h3 className="row">
              <div className="col-xs-12">
                Todos os processamentos
              </div>
              <div className="state-information col-xs-12 text-right no-pad" onClick={this.showModal}>
                <Link to='/home/process/uploadimagesview'><p id="discursive_question"
                                                             className="btn btn-success btn-sm m-r-12 pull-right mr-2">Enviar
                  novas imagem</p></Link>

              </div>
            </h3>
          </div>
        </div>
    );
  };
};

export default Process;