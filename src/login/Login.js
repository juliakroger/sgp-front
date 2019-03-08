import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actionsTypes';
import Amplify, { Auth } from 'aws-amplify';
import './Login.css';

Amplify.configure({
    API: {
        graphql_endpoint: 'https://provafacil.auth.us-east-1.amazoncognito.com',
    },
    Auth: {
        identityPoolId:  'us-east-1:0fc56bd8-50ba-4583-bc92-3ebb98469502',
        region: 'us-east-1',
        userPoolId: 'us-east-1_12QaBDnB7',
        userPoolWebClientId: '5sflv6jt0858s9tp8k70hco4nh',
    }
});

//this.props.history.push("/home");
class Login extends Component {
    loginHandler = (event) => {
        console.log(this.props.username, this.props.password)
        Auth.signIn(this.props.username, this.props.password)
            .then(response => {
                console.log('200', response)
            })
            .catch(error => console.log('400', error.message))

    }



    onUsernameChange = (event) => {
        this.props.onUserNameEnter(event.target.value)
    }
    onPassowordChange = (event) => {
        this.props.onIngredientRemoved(event.target.value)
    }

    render () {
        return (
        <div className='LoginScreen'>
            <header>
                <img alt="logo" src="https://strtec.s3.amazonaws.com/demo/logos/f090c20c-7492-11e8-ad59-0242ac11000f_sys_logo.png"/>
            </header>

            <section className="login-form-container">
                <div className="login-form">
                    <input className="form-control" placeholder="Usuário" onChange={this.onUsernameChange}/>
                    <input className="form-control" placeholder="Senha" type="password" onChange={this.onPassowordChange}/>

                    <div className="login-btn" onClick={this.loginHandler}><span>Logar</span></div>
                </div>
            </section>


            <section className="login-footer">
                <div className="login-footer-container">
                    <div className="login-footer-header">
                        <h4>Nossas Soluções</h4>
                        <div className="progress">
                            <div className="progress-bar" ></div>
                        </div>
                    </div>
                    <div className="login-footer-images">
                        <a href="https://www.provafacilnaweb.com.br/avaliar" >
                            <img alt='avaliar' className="active"
                                 src="https://cdn.starlinetecnologia.com.br/images/logo-avaliacoes-regulares-white.svg"
                                 />
                        </a>

                        <a href="https://www.provafacilnaweb.com.br/treinar">
                            <img alt='treinar' className=""
                                 src="https://cdn.starlinetecnologia.com.br/images/logo-simulados-white.svg"
                                 />
                        </a>

                        <a href="https://www.provafacilnaweb.com.br/medir">
                            <img alt='medir'
                                 src="https://cdn.starlinetecnologia.com.br/images/logo-pesquisa-white.svg"
                                 />
                        </a>

                        <a href="https://www.provafacilnaweb.com.br/selecionar">
                            <img alt='selecionar'
                                 src="https://cdn.starlinetecnologia.com.br/images/logo-processo-de-selecao-white.svg"
                                 />
                        </a>

                        <a href="https://www.provafacilnaweb.com.br/corrigir">
                            <img alt='corrigir'
                                 src="https://cdn.starlinetecnologia.com.br/images/logo-professor-white.svg"
                                 />
                        </a>
                    </div>
                </div>
            </section>
        </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserNameEnter: (payload) => dispatch({type: actions.USERNAME_ENTER, payload: payload }),
        onIngredientRemoved: (payload) => dispatch({type: actions.PASSWORD_ENTER, payload: payload})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);