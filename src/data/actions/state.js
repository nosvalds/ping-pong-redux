export const updateScore = (data) => {
    let winner = 0;
    if (data.player_1.won) {
        winner = 1;
    } else if (data.player_2.won) {
        winner = 2;
    }
    return {
        type: "UPDATE_SCORE",
        player1: data.player_1.score,
        player2: data.player_2.score,
        server: data.player_1.serving ? 1 : 2,
        winner: winner,
    }
}

export const incrementP1 = () => {
    return {
        type: "INCREMENT_P1"
    }
}

export const incrementP2 = () => {
    return {
        type: "INCREMENT_P2"
    }
}

export const newGame = () => {
    return {
        type: "NEW_GAME"
    }
}

export const toggleLanguage = () => {
    return {
        type: "TOGGLE_LANGUAGE"
    }
}

export const startGame = (data) => {
    return {
        type: "START_GAME",
        gameId: data.id,
        player1Name: data.player_1.name,
        player2Name: data.player_2.name,
        winningScore: +data.winning_score,
        serveInterval: +data.change_serve
    }
}

