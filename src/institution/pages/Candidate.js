import React, {Component} from 'react';
import './pages.css';
import axios from "axios";
import Spinner from '../components/Spinner/Spinner';


class Candidate extends Component {
  state = {
    data: [],
    page: 0,
  };

//fazer um request com o numero de paginacao
  componentWillMount() {
    axios.get('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/tm/rest/candidate/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token d1c5a0ea6a837ea105a9ca3ce5356dace0d27e18',
      },
    })
        .then(response => {
          this.setState({data: response.data})
        })
        .catch(error => console.log(error))
  }

  paginationHandler = (page) => {
    const goTo = page.target.id;
    console.log(goTo)
  };

  render() {
    return (
        <div className="content">
          <div className="page-head">
            <h3 className="row">
              <div className="col-xs-12">
                Alunos
              </div>
              <div className="state-information col-xs-12 text-right no-pad">
                <p onClick={() => alert('clicked')} id="add-button"
                   className="btn btn-success m-r-12 btn-sm pull-right">
                  <i className="fa fa-plus"></i> Adicionar
                </p>
              </div>
            </h3>
          </div>

          <div className="wrapper bg-white ">
            <form>
              <div className="form-row">
                <div className="col-sm-4">
                  <input className="search-form" type="text" placeholder="Digite algo que deseja encontrar..."/>
                </div>
                <div>
                  <p className="search-button"><i className="fa fa-search"></i></p>
                </div>
              </div>
            </form>

            <div className="panel-body allow-scroll-y-mb text-center">
              <p className="grey-small-text">Página {this.state.page + 1} de {this.state.data.length} registros</p>
              <div className="table-responsive">
                <table className="table table-striped table-sm font-13">
                  <thead>
                  <tr>
                    <th className="col-lg-5 col-md-2 col-sm-4">Nome</th>
                    <th className="col-lg-2 col-md-1 col-sm-1">Matrícula</th>
                    <th className="col-lg-2 col-md-1 col-sm-1">Documento de Identificação</th>
                    <th className="col-lg-2 col-md-1 col-sm-1">Local</th>
                    <th className="w-100"></th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    (this.state.data.length > 0) ?
                        this.state.data.map((student, i) => {
                              if (i >= this.state.page * 20 && i < (this.state.page + 1) * 20) {
                                return (
                                    <tr key={student.key}>
                                      <td>{student.name}</td>
                                      <td>{student.enrollment_code}</td>
                                      <td>{student.document_id}</td>
                                      <td>{student.place}</td>
                                      <td>
                                        <button type="button" className="btn btn-primary btn-sm">Ações</button>
                                      </td>
                                    </tr>
                                )
                              }
                            },
                        ) : null
                  }
                  </tbody>
                </table>
              </div>
              {(this.state.data.length <= 0) ? <Spinner/> : null}
            </div>
          </div>

          <div aria-label="Page navigation example">
            <ul className="pagination justify-content-center pagination-sm">
              <li className="page-item"><p id={this.state.page - 1} className="page-link"
                                           onClick={this.paginationHandler}>Previous</p></li>
              <li className="page-item"><p id={this.state.page} className="page-link"
                                           onClick={this.paginationHandler}>{this.state.page + 1}</p></li>
              <li className="page-item"><p id={this.state.page + 1} className="page-link"
                                           onClick={this.paginationHandler}>{this.state.page + 2}</p></li>
              <li className="page-item"><p id={this.state.page + 2} className="page-link"
                                           onClick={this.paginationHandler}>{this.state.page + 3}</p></li>
              <li className="page-item"><p id={this.state.page + 3} className="page-link"
                                           onClick={this.paginationHandler}>Next</p></li>
            </ul>
          </div>
        </div>
    )
  };
}

export default Candidate;