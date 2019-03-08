import React, {Component} from 'react';
import data from '../../API/wrapper.json';
import TotalQuestions from '../Charts/HomeCharts/TotalQuestions';
import TestsByMonth from '../Charts/HomeCharts/TestsByMonth';
import ProcessedQuestions from "../Charts/HomeCharts/ProcessedQuestions";
import TestsTypes from "../Charts/HomeCharts/TestsTypes";
import QuestionsDifficulty from '../Charts/HomeCharts/QuestionsDifficulty';
import ProcessedTests from '../Charts/HomeCharts/ProcessedTests';

class Home extends Component {
    render() {
        return (
            <div className="ml-md-4">
            <div className="row">
                <div className="mr-md-2 col list-group-item-purple">
                    <div className="row">
                        <div className="col-md-4 mb-3 border-right">
                            <i className="fa fa-2x fa-save"></i>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h1 className="timer" id="total_questions">{data.total_questions}</h1>
                            <p>Questões Cadastradas</p>
                        </div>
                    </div>
                </div>

                <div className="mr-md-2 col border bg-light">
                    <div className="row">
                        <div className="col-md-4 mb-3 border-right purple-color">
                            <i className="fa fa-2x fa-bars"></i>
                        </div>
                        <div className="col-md-4 mb-3 value gray">
                            <h1 className="purple-color timer" id="total_questions_discursive">{data.discursive_questions}</h1>
                            <p>Questões Discursivas</p>
                        </div>

                    </div>
                </div>

                <div className="mr-md-2 col list-group-item-green">
                    <div className="row">
                        <div className="col-md-4 mb-3 border-right">
                            <i className="fa fa-2x fa-list-ul"></i>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h1 className="timer" id="total_questions_objective">{data.objective_questions}</h1>
                            <p>Questões Objetivas</p>
                        </div>
                    </div>
                </div>

                <div className="mr-md-3 col border bg-light">
                    <div className="row">
                        <div className="col-md-4 mb-3 border-right green-color">
                            <i className="fa fa-2x fa-file-text"></i>
                        </div>
                        <div className="col-md-4 mb-3 value gray">
                            <h1 className="green-color timer" id="total_tests">{data.total_tests}</h1>
                            <p>Provas Geradas</p>
                        </div>

                    </div>
                </div>
            </div>
                <div className="row home-charts">
                    <TotalQuestions data={data.graf_quant_questoes} />
                    <ProcessedQuestions data={data.questions}/>
                    <TestsTypes not_nominal={data.graf_tests_not_nominal_by_month} nominal={data.graf_tests_nominal_by_month}/>
                    <ProcessedTests data={data.graf_processed_tests} />
                    <QuestionsDifficulty  data={data.graf_questions_difficulty}/>
                    <TestsByMonth data={data.graf_tests_by_month}/>


                  </div>
            </div>
        );
    };
};

export default Home;