import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from './Components/PageNotFound';
import MyCourses from './Components/MyCourses';
import Home from './Components/Home';
import Forum from './Components/Forum';
import Answer from './Components/Answer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" exact component={App}/>
        <Route path="/mycourses" exact component={MyCourses}/>
        <Route path="/C3" exact component={Home}/>
        <Route path="/forum" exact component={Forum}/>
        <Route path="/answer" exact component={Answer}/>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
