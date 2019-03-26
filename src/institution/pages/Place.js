import React, {Component} from 'react';
import PlaceField from './PlaceField';
import PlaceForm from './PlaceForm';


class Place extends Component {
  render() {
    return (
        <div className="content">
          <div className="page-head">
            <h3 className="row">
              <div className="col-xs-12">
                Local
              </div>
              <div className="state-information col-xs-12 text-right no-pad">
                <p>Polo / Prédio / Andar / Sala</p>
              </div>
            </h3>
          </div>

          <div className="wrapper row">
            <div className="state-information col-sm-4 text-right no-pad">
              <p id="add-button" className="btn btn-success m-r-12 btn-sm pull-right"><i
                  className="fa fa-plus"></i> Adicionar</p>
              <form className="text-left">
                <PlaceForm/>
              </form>
            </div>

            <div className="col-sm-4 tree_view">
              <div className="local">
                <PlaceField/>
              </div>
            </div>
          </div>
        </div>
    )
  };
}

export default Place;