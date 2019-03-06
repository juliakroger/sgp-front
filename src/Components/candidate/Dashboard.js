import React from 'react';


const Dashboard = (props) => {
    return (
      <div className="candidate-dashboard">
          <a id="prova-online" className=""
             href="/demo/schedule/resultcandidatelist/46c03dea-1f0d-11e9-8187-0242ac11001b/onlinetests/">
              <div className="candidate-dashboard-item">
                  <img src="https://cdn.starlinetecnologia.com.br/images/candidate_online_test.png"/>
                      <span>Prova Online</span>
              </div>
          </a>

          <a id="provas-ja-realizadas" className=""
             href="/demo/schedule/resultcandidatelist/46c03dea-1f0d-11e9-8187-0242ac11001b/assessmentslast/">
              <div className="candidate-dashboard-item">
                  <img src="https://cdn.starlinetecnologia.com.br/images/candidate_results.png"/>
                      <span>Provas Já realizadas</span>
              </div>
          </a>

          <a id="questionarios" className=""
             href="/demo/schedule/resultcandidatelist/questionnaire/46c03dea-1f0d-11e9-8187-0242ac11001b/">
              <div className="candidate-dashboard-item">

                  <img src="https://cdn.starlinetecnologia.com.br/images/candidate_online_test.png"/>

                      <span>Questionários</span>
              </div>
          </a>

          <a id="requerimentos" className="" href="/demo/appeal/candidateappeal/46c03dea-1f0d-11e9-8187-0242ac11001b/">
              <div className="candidate-dashboard-item">

                  <img src="https://cdn.starlinetecnologia.com.br/images/candidate_requirements.png"/>

                      <span>Requerimentos</span>
              </div>
          </a>

          <a id="relatorios" className=""
             href="/demo/schedule/resultcandidatelist/reports/46c03dea-1f0d-11e9-8187-0242ac11001b/">
              <div className="candidate-dashboard-item">

                  <img src="https://cdn.starlinetecnologia.com.br/images/menu-relatorios.png"/>

                      <span>Relatórios</span>
              </div>
          </a>

          <a id="certificados" className=""
             href="/demo/schedule/resultcandidatelist/46c03dea-1f0d-11e9-8187-0242ac11001b/certificates/">
              <div className="candidate-dashboard-item">

                  <img src="https://cdn.starlinetecnologia.com.br/images/candidate_requirements.png"/>

                      <span>Certificados</span>
              </div>
          </a>
      </div>
    );
};

export default Dashboard;