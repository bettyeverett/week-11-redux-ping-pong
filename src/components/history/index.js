import { connect } from "react-redux";

import History from "./History";

const mapStateToProps = state => {
    return {
        history: state.history,
        player1Name: state.player1Name,
        player2Name: state.player2Name,
    };
};

export default connect(mapStateToProps)(History);