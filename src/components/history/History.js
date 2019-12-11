import React from "react";

import { Table } from "react-bootstrap";

const History = ({ history }) => (
   
   <Table striped bordered hover>
        <thead>
            <tr>
                <th colspan="2">Player 1</th>
                <th colspan="2">Player 2</th>
            </tr>
            <tr>
                <th>Score</th>
                <th>Won</th>
                <th>Score</th>
                <th>Won</th>
            </tr>
        </thead>
        <tbody>
            { history.map((match, index) => (
                <tr
                    key={ index }
                >
                    <td>{ match.player_1.score }</td>
                    <td>{ match.player_1.won ? "Won" : "Lost" }</td>
                    <td>{ match.player_2.score }</td>
                    <td>{ match.player_2.won ? "Won" : "Lost" }</td>
                </tr>
            )) }
        </tbody>
    </Table>

);

export default History;
