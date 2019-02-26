import React, {Component} from 'react';
import './Style.css';

class Navebar extends Component {
    render() {
        return (
            <div className="navbar navbar-light bg-light">
                <div>
                    <a className="small"><i className="fa fa-dedent nav-link"/></a>
                    <a className="small"><i className="fa fa-home nav-link"/></a>
                    <a className="small"><i className="fa fa-tasks nav-link"/></a>
                    <a className="small"><i className="fa fa-bell-o nav-link "/></a>
                </div>
                <form className="form-inline">
                    <p className="small mr-md-1 mt-md-3">Unidades:</p>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option value="1">FAG</option>
                        <option value="2">FIO</option>
                        <option value="3">ESAMEC</option>
                    </select>
                    <p className="small ml-md-4  mt-md-3">suporte.demo  <i className="fa fa-angle-down"></i></p>
                </form>
            </div>




    );
    };
};


export default Navebar;