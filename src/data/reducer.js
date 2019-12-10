import initial from "./initial";

let total = (state) => (state.player1 + state.player2); // Keeping a total of the two scores added together

let game = (state) => (state.player1 >= 21 || state.player2 >= 21); // Tracking if either of the scores hit 21

let twoPointLead = (state) => (Math.abs(state.player1 - state.player2) >= 2); // Calculating the difference between the two player's scores

let win = state => (state.player1 > state.player2 ? 1 : 2);

const player1 = (state) => ({ ...state, player1: state.player1 + 1 });
const player2 = (state) => ({ ...state, player2: state.player2 + 1 });
const serving = (state) => ({ ...state, serving: !game(state) ? (Math.floor(total(state) / 5) % 2) + 1 : (Math.floor(total(state) / 2) % 2) + 1 });

const winner = (state) => ({ ...state, winner: game(state) && twoPointLead(state) ? win(state) : 0 });

const history = (state) => ({ 
    ...state, 
    history: state.winner !== 0 ? [...state.history,
    {
        "player_1": {
            "score": state.player1,
            "won": state.winner === 1
        },
        "player_2": {
            "score": state.player2,
            "won": state.winner === 2
        },
    } ]
    : state.history
})

// the reducer gets given the current version of the state
// and the action that called it, which has a "type" property
const reducer = (state, action) => {
    // depending on what the action's type property is 
    // we can do different things
    switch (action.type) {
    // using object spread to create a new object
    // with the same properties
        case "player1": return history(winner(serving(player1(state))));
        case "player2": return history(winner(serving(player2(state))));
        case "reset": return {...initial, history: state.history};
        default: return state;

    } 

};

export default reducer;