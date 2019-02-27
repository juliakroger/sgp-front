import React, {Component} from 'react';
import data from '../response.json';
import TotalQuestionsChart from '../Components/Charts/HomeCharts/TotalQuestions';
import QuestionsDifficultyChart from '../Components/Charts/HomeCharts/QuestionsDifficulty';



class Wrapper extends Component {
    render() {
        return (
            <div>
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
            <TotalQuestionsChart data={data.graf_quant_questoes} />
                <QuestionsDifficultyChart />
            </div>
        );
    };
};

export default Wrapper;