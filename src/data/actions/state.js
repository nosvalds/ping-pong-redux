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

