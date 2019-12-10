import React from "react";
import { Button } from "react-bootstrap";

const App = ( { 
	player1, 
	player2,
	handlePlayer1,
	handlePlayer2,
	handleReset,
	serving,
	winner
} ) => (

    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <div className="col-md-6 mt-4">
				<div className={ (serving === 1 ? "bg-dark text-white card text-center" : "card text-center") }>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player1 }</p>
                    </div>
                    <div className="card-footer">
						<Button 
							className="form-control btn"
							variant="success"
							onClick={ handlePlayer1 }
							disabled={ winner !== 0 }
						>+</Button>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
				<div className={ (serving === 2 ? "bg-dark text-white card text-center" : "card text-center") }>
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player2 }</p>
                    </div>
                    <div className="card-footer">
						<Button 
							className="form-control btn"
							variant="success"
							onClick={ handlePlayer2 }
							disabled={ winner !== 0 }
						>+</Button>
                    </div>
                </div>
            </div>
        </div>

        { /* winner message */ }
		{ winner !== 0 ? 
			<h2 className="alert alert-success">Player { winner } wins!</h2>
			: null }
        <hr />

        { /* reset button */}
		<button 
			className="btn btn-danger"
			onClick={ handleReset }
		>Reset</button>
    </React.Fragment>
);

export default App;