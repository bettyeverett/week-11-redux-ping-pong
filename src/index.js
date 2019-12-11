import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './components/App';
import store from "./data/store";

// we update subscribe to call the ReactDOM.render 
// method whenever the state changes
    
// pass in state.value as a value prop
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById("root")
); 


