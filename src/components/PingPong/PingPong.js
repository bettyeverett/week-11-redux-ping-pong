import React from "react";

import Winner from "../Winner";
import Reset from "../Reset";
import History from "../History";
import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";
import Settings from "../Settings";

const PingPong = ({ settings }) => (

        settings ?
            
            <>

                <Player1 />
                <Player2 />
                <Winner />
                <Reset />
                <History />
            
            </>
            
        : 

        <Settings />

);

export default PingPong;