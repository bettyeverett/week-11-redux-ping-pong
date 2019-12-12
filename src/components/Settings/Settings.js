import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";

class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            Player1: props.player1Name,
            player2Name: props.player2Name,
            winningScore: props.winningScore,
            alternateEvery: props.alternateEvery,
            settings: props.settings,
        };

    this.handlePlayer1 = this.handlePlayer1.bind(this);
    this.handlePlayer2 = this.handlePlayer2.bind(this);
    this.handleScore = this.handleScore.bind(this);
    this.handleAlternate = this.handleAlternate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }


    handlePlayer1(e) {
        this.setState({ player1Name: e.currentTarget.value });
    }

    handlePlayer2(e) {
        this.setState({ player2Name: e.currentTarget.value });
    }

    handleScore(e) {
        this.setState({ winningScore: e.currentTarget.value });
    }

    handleAlternate(e) {
        this.setState({ alternateEvery: e.currentTarget.value });
    }

    handleSubmit(e) { 

        e.preventDefault();

        // call the passed in function
        // pass it the current input value 
        this.props.handleSubmit({ ...this.state, settings: true });

    }

    render() {
        let { winningScore, alternateEvery, input } = this.state;
     
        return (

                    <Form onSubmit={ this.handleSubmit }>
                        <Form.Group controlId="formPlayer1Name">
                            <Form.Label>Player 1 Name:</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Player 1 Name"
                                onChange={ this.handlePlayer1 } 
                                value={ input }
                            />
                        </Form.Group>

                        <Form.Group controlId="formPlayer2Name">
                            <Form.Label>Player 2 Name:</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Player 2 Name"
                                onChange={ this.handlePlayer2 } 
                                value={ input }
                            />
                        </Form.Group>

                        <Form.Group controlId="formWinningScore">
                            <Form.Label>Winning Score:</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder={ winningScore }
                                onChange={ this.handleScore } 
                                value={ input } 
                            />
                        </Form.Group>

                        <Form.Group controlId="formAlternateEvery">
                            <Form.Label>Alternate Server Every:</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder={ alternateEvery }
                                onChange={ this.handleAlternate }
                                value={ input }
                            />
                        </Form.Group>
                        <Button 
                            variant="primary" 
                            type="submit"
                        >
                            Start Game
                        </Button>
                    </Form>

        ); 
    }    

}

export default Settings;