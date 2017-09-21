import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<IndexRedirect to="/about"/>
  		<Route path="/resume" component={ Resume } />
  		<Route path="/about" component={ About } />
  		<Route path="/contact" component={ Contact } />
  	</Route>
  </Router>,
  document.getElementById('root')
);
