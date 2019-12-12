import { connect } from "react-redux";

import Settings from "./Settings";

// import in the action
import { submitSettings } from "../../data/actions"; // as before

const mapStateToProps = state => {

    return {
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        winningScore: state.winningScore, 
        alternateEvery: state.alternateEvery,
        settings: state.settings,
    };

};

// pass in a function that accepts a value
// pass the value along to the action creator
const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: data => dispatch(submitSettings(data)),
}; };
// make sure you pass in mapDispatchToProps as the second argument
export default connect(mapStateToProps, mapDispatchToProps)(Settings);