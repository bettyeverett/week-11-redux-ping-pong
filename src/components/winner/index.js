import { connect } from "react-redux";

import Winner from "./Winner";

const mapStateToProps = state => {
    return {
        win: state.win,
        player1Name: state.player1Name,
        player2Name: state.player2Name,
    };
};

export default connect(mapStateToProps)(Winner);