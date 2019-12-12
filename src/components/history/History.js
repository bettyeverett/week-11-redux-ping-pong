import React from "react";

import { Table } from "react-bootstrap";

const History = ({ history, player1Name, player2Name, }) => (
   
   <Table striped bordered hover>
        <thead>
            <tr>
                <th>Won</th>
                <th>Lost</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            { history.map((match, index) => (
                <tr
                    key={ index }
                >
                    <td>{ match.player_1.won ? player1Name : player2Name }</td>
                    <td>{ !match.player_1.won ? player1Name : player2Name }</td>
                    <td>{ match.player_1.won ? 
                        `${match.player_1.score} - ${ match.player_2.score }` 
                    : 
                        `${match.player_2.score} - ${ match.player_1.score }`
                    }</td>
                </tr>
            )) }
        </tbody>
    </Table>

);

export default History;
