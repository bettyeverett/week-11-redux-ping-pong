import React from "react";

import Player1 from "./player/Player1";
import Player2 from "./player/Player2";
import Header from "./header/Header";
import Winner from "./winner";
import Reset from "./reset";
import History from "./history";

const App = ( { 
	handlePlayer1,
	handlePlayer2,
} ) => (

    <React.Fragment>
        
        <Header />

		<Player1 handlePlayer={ handlePlayer1 }/>
		<Player2 handlePlayer={ handlePlayer2 }/>

		<Winner />

		<Reset />
			
		<History />

    </React.Fragment>
);

export default App;