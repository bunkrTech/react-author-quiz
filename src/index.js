import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AuthorQuiz a={4} b={2}/>, document.getElementById('root'));
registerServiceWorker();
