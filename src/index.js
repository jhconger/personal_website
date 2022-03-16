import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { browserHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(<App />,document.getElementById('root'));

export const Test = () => (
    <div className="">
        <button onClick={BrowserRouter.goBack}>Back</button>
    </div>
)