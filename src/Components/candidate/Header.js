import React from 'react';
import './candidate.css';

const Header = (props) => {
    return (
        <div className="candidate-header">
            <div className="login-header">
                <img className="logo-login" alt="logo-login" src="https://strtec.s3.amazonaws.com/demo/logos/f090c20c-7492-11e8-ad59-0242ac11000f_sys_logo.png" />
            </div>
            <div className="candidate-info">
                <h2>Aana Maria</h2>
                <span>
                    <b>Matricula: </b> 20190101
                </span>
            </div>
            <div className="logout-container">
                <i className="fa fa-power-off logout-icon"/>
                <span>sair</span>
            </div>
        </div>
    );
};

export default Header;

