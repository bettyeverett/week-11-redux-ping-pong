import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import store from "./data/store";

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
            serving={ state.serving }
            winner={ state.winner }
            handlePlayer1={ () => store.dispatch({ type: "player1" }) }
            handlePlayer2={ () => store.dispatch({ type: "player2" }) }
            handleReset={ () => store.dispatch({ type: "reset" }) }
        />, document.getElementById("root")
    ); 

};

store.subscribe(render); // render when state changes 
render(); // render when page loads using initial state

