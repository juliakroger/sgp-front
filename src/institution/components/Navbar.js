import React, {Component} from 'react';
import '../css/Style.css';
import {Link} from 'react-router-dom';

class Navebar extends Component {
  render() {
    return (
        <div className="navbar navbar-light bg-light">
          <div>
            <Link to="/home"><i className="fa fa-home nav-link pointer" style={{color: 'rgba(0, 0, 0, 0.65)'}}/></Link>
            <i className="fa fa-tasks nav-link pointer"/>
            <i className="far fa-bell nav-link pointer"/>
          </div>
          <form className="form-inline">
            <p className="small mr-md-1 mt-md-3">Unidades:</p>
            <select className="custom-select" id="inputGroupSelect01">
              <option value="1">FAG</option>
              <option value="2">FIO</option>
              <option value="3">ESAMEC</option>
            </select>
            <p className="small ml-md-4  mt-md-3 pointer">suporte.demo <i className="fa fa-angle-down"></i></p>
          </form>
        </div>

    );
  };
};

export default Navebar;