import React from "react";

import { Button } from "react-bootstrap";

const Player = ({
    handlePlayer,
    serving,
    winner,
    score
}) => (


    <div className="row mb-4">
        <div className="col-md-6 mt-4">
            <div className={ ( serving ? "bg-dark text-white card text-center" : "card text-center") }>
                <h5 className="card-header">Player 1</h5>
                <div className="card-body">
                    <p className="card-text display-1">{ score }</p>
                </div>
                <div className="card-footer">
                    <Button 
                        className="form-control btn"
                        variant="success"
                        onClick={ handlePlayer }
                        disabled={ winner !== 0 }
                    >+</Button>
                </div>
            </div>
        </div>
    </div>
    
);

export default Player;