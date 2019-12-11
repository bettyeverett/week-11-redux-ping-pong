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
    }
}

export const player2 = () => {
    return {
        type: "player2",
    }
}