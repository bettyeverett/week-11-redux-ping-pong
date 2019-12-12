import React from "react";

const Winner = ({ win, player1Name, player2Name }) => (

    <>
        { win === 1 ? 
            <h2 className="alert alert-success">{ player1Name } wins!!! Well done, { player1Name }!</h2>
            : 
            <h2 className="alert alert-success">{ player2Name } wins!!! Well done, { player2Name }!</h2> 
        }
        <hr />
    </>

);

export default Winner;

