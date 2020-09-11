import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import HelloStudent from './components/HelloStudent';
import HelloStudents from './components/HelloStudents';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <HelloStudent name="Birm" unit="React"/>
    <HelloStudent name="Danish" unit="JavaScript" />
    <HelloStudent name="Adolf" unit="React" />
    <HelloStudents></HelloStudents>
  </React.StrictMode>,
  document.getElementById('root')
);
