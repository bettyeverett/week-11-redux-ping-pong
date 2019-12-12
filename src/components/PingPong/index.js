import { connect } from "react-redux";

import PingPong from "./PingPong";

const mapStateToProps = state => {
    return {
        settings: state.settings,
    };
};

export default connect(mapStateToProps)(PingPong);