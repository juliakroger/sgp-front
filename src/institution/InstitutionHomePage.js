import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Candidate from './pages/Candidate';
import Place from './pages/Place';
import QuestionsBatch from './pages/QuestionsBatch';
import QuestionsBatchDiscursive from './pages/QuestionsBatchDiscursive';
import QuestionsBatchObjective from './pages/QuestionsBatchObjetive';
import Process from './pages/Process';
import UploadImagesView from "./pages/UploadImagesView";
import ProcessImageValidation from './pages/ProcessImageValidation';

class InstitutionHomePage extends Component {
  render() {
    return (
        <div>
          <Sidebar/>
          <div className="main">
            <Navbar/>
            <Route exact path={'/home/'} component={Home}/>
            <Route path={`/home/place`} component={Place}/>
            <Route path={`/home/batch`} component={QuestionsBatch}/>
            <Route path={`/home/candidate`} component={Candidate}/>
            <Route path={`/home/create/objective`} component={QuestionsBatchObjective}/>
            <Route path={`/home/create/discursive`} component={QuestionsBatchDiscursive}/>
            <Route path={`/home/process/all`} component={Process}/>
            <Route path={`/home/process/uploadimagesview`} component={UploadImagesView}/>
            <Route path={`/home/process/image/` + this.props.dataProcess} component={ProcessImageValidation}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataProcess: state.ImageProcessReducer.dataProcess,
  }
};

export default connect(mapStateToProps)(InstitutionHomePage);
