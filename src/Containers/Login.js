import React, {Component} from 'react';
import Amplify, { Auth } from 'aws-amplify';
import '../CSS/Login.css';

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


class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    loginHandler = (event) => {
        console.log(this.state.username, this.state.password)
        Auth.signIn(this.state.username, this.state.password)
            .then(response => console.log('200', response))
            .catch(error => console.log('400', error.message))
    }



    onUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    onPassowordChange = (event) => {
        this.setState({password: event.target.value})
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
                    <div className="display-flex">
                        <label className="sgp-checkbox">
                            <input name="chksession" value="remember-me" type="checkbox" />
                                <span className="checkmark"></span>
                                <span>Permanecer Logado</span>
                        </label>
                        <a className="forgot-password ml-md-4 mt-md-2">Esqueci minha senha</a>
                    </div>
                    <div className="login-btn" onClick={this.loginHandler}>
                            <span>Logar</span>
                    </div>
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
                        <a href="https://www.provafacilnaweb.com.br/avaliar" target="_blank">
                            <img className="active"
                                 src="https://cdn.starlinetecnologia.com.br/images/logo-avaliacoes-regulares-white.svg"
                                 data-toggle="popover" data-placement="bottom" data-trigger="hover" data-html="true"
                                 data-content="Sua Solução" data-original-title="" title=""/>
                        </a>

                        <a href="https://www.provafacilnaweb.com.br/treinar" target="_blank">
                            <img className=""
                                 src="https://cdn.starlinetecnologia.com.br/images/logo-simulados-white.svg"
                                 data-toggle="popover" data-placement="bottom" data-trigger="hover" data-html="true"
                                 data-content="Conhecer Solução" data-original-title="" title=""/>
                        </a>

                        <a href="https://www.provafacilnaweb.com.br/medir" target="_blank">
                            <img className="active"
                                 src="https://cdn.starlinetecnologia.com.br/images/logo-pesquisa-white.svg"
                                 data-toggle="popover" data-placement="bottom" data-trigger="hover" data-html="true"
                                 data-content="Sua Solução" data-original-title="" title=""/>
                        </a>

                        <a href="https://www.provafacilnaweb.com.br/selecionar" target="_blank">
                            <img className=""
                                 src="https://cdn.starlinetecnologia.com.br/images/logo-processo-de-selecao-white.svg"
                                 data-toggle="popover" data-placement="bottom" data-trigger="hover" data-html="true"
                                 data-content="Conhecer Solução" data-original-title="" title=""/>
                        </a>

                        <a href="https://www.provafacilnaweb.com.br/corrigir" target="_blank">
                            <img className=""
                                 src="https://cdn.starlinetecnologia.com.br/images/logo-professor-white.svg"
                                 data-toggle="popover" data-placement="bottom" data-trigger="hover" data-html="true"
                                 data-content="Conhecer Solução" data-original-title="" title=""/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
        );
    };
};

export default Login;