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

export const saveHistory = (data) => {
    return {
        type: "SAVE_HISTORY",
        gameHistory: data,
    }
}

export const removeGame = (id) => {
    return {
        type: "REMOVE_GAME",
        id,
    }
}

export const resumeGame = (data) => {
    return {
        type: "RESUME_GAME",
        gameId: data.id,
        player1: data.player_1.score,
        player2: data.player_2.score,
        player1Name: data.player_1.name,
        player2Name: data.player_2.name,
        winningScore: +data.winning_score,
        serveInterval: +data.change_serve,
        server: data.player_1.serving ? 1 : 2,
    }
}