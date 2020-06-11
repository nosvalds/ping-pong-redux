import initial from './initial';

const updateScore = (
  state, 
    { player1, 
      player2, 
      server, 
      winner
    }
) => {
  return {
    ...state,
    player1,
    player2,
    server,
    winner
  }
}

const history = state => {
  if (state.winner !== 0) {
    return {
      ...state,
      gameHistory: [
        ...state.gameHistory,
        {
          player_1: {
            name: state.player1Name,
            score: state.player1,
            won: state.player1 > state.player2
          },
          player_2: {
            name: state.player2Name,
            score: state.player2,
            won: state.player2 > state.player1
          }
        }
      ]
    }
  }
  return state;
}

const startGame = (state, action) => {
  return {
    ...state,
    showSettings: false,
    gameId: action.gameId,
    player1Name: action.player1Name,
    player2Name: action.player2Name,
    winningScore: action.winningScore,
    serveInterval: action.serveInterval,
  }
}

const newGame = (state) => {
  return {
    ...initial,
    gameHistory: state.gameHistory,
    language: state.language,
    serveInterval: state.serveInterval,
    winningScore: state.winningScore,
    player1Name: state.player1Name,
    player2Name: state.player2Name 
  }; // to newGame return initial state, but preserve game history, lanuage, and settings
}

const toggleLanguage = state => {
  return {
    ...state,
    language: state.language === "English" ? "Esperanto" : "English"
  }
}

const saveHistory = (state, action) => {
  return {
    ...state,
    gameHistory: action.gameHistory,
    historyLoaded: true,
  }
}

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SCORE": return history(updateScore(state, action)); // increment player 1's score
    case "NEW_GAME": return newGame(state);
    case "TOGGLE_LANGUAGE": return toggleLanguage(state);
    case "START_GAME": return startGame(state, action);
    case "SAVE_HISTORY": return saveHistory(state, action);
    default: return state;
  }
}

export default reducer;