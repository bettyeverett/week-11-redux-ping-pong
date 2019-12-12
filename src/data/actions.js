// a reset action creator
// doesn't need any additional data, so no parameters
export const reset = () => {
    return {
        type: "reset",
    }; 
};

export const player1 = () => {
    return {
        type: "player1",
    };
};

export const player2 = () => {
    return {
        type: "player2",
    };
};

export const submitSettings = ({ player1Name, player2Name, winningScore, alternateEvery, settings }) => {
    return {
      type: "submitSettings",
      // we can use the action creator to tidy up the data
      // make sure it's definitely a number before it
      // gets to the reducer
      player1Name: player1Name,
      player2Name: player2Name,
      winningScore: winningScore,
      alternateEvery: alternateEvery,
      settings: settings,
    }; 
};