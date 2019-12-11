import React from "react";

import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Header from "./Header";
import Winner from "./Winner";
import Reset from "./Reset";
import History from "./History";

const App = () => (

    <React.Fragment>
        
        <Header />

		<Player1 />
		<Player2 />

		<Winner />

		<Reset />
			
		<History />

    </React.Fragment>
);

export default App;