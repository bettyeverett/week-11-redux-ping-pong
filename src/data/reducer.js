import initial from "./initial";

let total = (state) => (state.player1 + state.player2); // 

let game = (state) => (state.player1 >= 21 || state.player2 >= 21);

let twoPointLead = (state) => (Math.abs(state.player1 - state.player2) >= 2);

let win = state => (state.player1 > state.player2 ? 1 : 2);

const player1 = (state) => ({ ...state, player1: state.player1 + 1 });
const player2 = (state) => ({ ...state, player2: state.player2 + 1 });
const serving = (state) => ({ ...state, serving: (Math.floor(total(state) / 5) % 2) + 1 });

const winner = (state) => ({ ...state, winner: game(state) && twoPointLead(state) ? win(state) : 0 });

// the reducer gets given the current version of the state
// and the action that called it, which has a "type" property
const reducer = (state, action) => {
    // depending on what the action's type property is 
    // we can do different things
    switch (action.type) {
    // using object spread to create a new object
    // with the same properties
        case "player1": return winner(serving(player1(state)));
        case "player2": return winner(serving(player2(state)));
        case "reset": return initial;
        default: return state;

    } 

};

export default reducer;