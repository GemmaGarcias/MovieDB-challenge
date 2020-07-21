import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from 'react-redux';
import store from './store';

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
wrapper) : false;