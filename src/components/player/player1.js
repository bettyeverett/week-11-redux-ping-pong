// import connect from React Redux
// this will talk to the Provider component, which has
// wrapped the entire app, so that it can access the store 
import { connect } from "react-redux";
// import the React component that we want to wrap 
// in the same directory, so path is short
import Player from "./Player";
import { player1 } from "../../data/actions"; 
// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
const mapStateToProps = state => {
    return {
        serving: state.serving === 1,
        score: state.player1,
        winner: state.winner,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch(player1()),
    };
};
// use the connect function to connect mapDispatchToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps, mapDispatchToProps)(Player);