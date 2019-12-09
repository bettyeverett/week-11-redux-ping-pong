import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from "redux";

const initial = {
    player1: 0,
    player2: 0,
};

// the reducer gets given the current version of the state
// and the action that called it, which has a "type" property
const reducer = (state, action) => {
    // depending on what the action's type property is 
    // we can do different things
    switch (action.type) {
    // using object spread to create a new object
    // with the same properties
        case "player1": return { ...state, player1: state.player1 + 1 };
        case "player2": return { ...state, player2: state.player2 + 1 }; 
        case "reset": return initial;
        default: return state;

    } 

};

const store = createStore(
    reducer, 
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// we update subscribe to call the ReactDOM.render 
// method whenever the state changes
const render = () => {
    // get the current state using the getState method 
    // we can get the state, but not update it
    let state = store.getState();
    // pass in state.value as a value prop
    ReactDOM.render(
        <App 
            player1={ state.player1 } 
            player2={ state.player2 }
            handlePlayer1={ () => store.dispatch({ type: "player1" }) }
            handlePlayer2={ () => store.dispatch({ type: "player2" }) }
            handleReset={ () => store.dispatch({ type: "reset" }) }
        />, document.getElementById("root")
    ); 

};

store.subscribe(render); // render when state changes 
render(); // render when page loads using initial state



