import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="App">
          {this.props.a} + {this.props.b} = {this.props.a + this.props.b}
      </div>
    );
  }
}

export default AuthorQuiz;
