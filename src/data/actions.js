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
        player1Name: data.player1Name,
        player2Name: data.player2Name,
        winningScore: +data.winningScore,
        serveInterval: +data.serveInterval
    }
}