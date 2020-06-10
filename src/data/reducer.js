import initial from './initial';

const incrementP1 = state => ({...state, player1: state.player1 + 1});
const incrementP2 = state => ({...state, player2: state.player2 + 1});

const server = state => {
  let serves = (state.player1 >= state.winningScore - 1 && state.player2 >= state.winningScore - 1) ? 2 : state.serveInterval // The server should start to alternate every two serves if both scores get to 20
  if ((state.player1 + state.player2) % serves === 0) {
    return {
      ...state,
      server: state.server === 1 ? 2 : 1 // this swaps server between 1 and 2
    }
  } 
  return state; // must always return state if we don't invoke the if statement
}

// function to check if there has been a winner after each point
// add logic to ensure player is winning by at least 2 points before declaring a winner
const checkWinner = state => {
  if (state.player1 >= state.winningScore && state.player1 - state.player2 >= 2) {
    return {
      ...state, 
      winner: 1,
    }
  }
  if (state.player2 >= state.winningScore && state.player2 - state.player1 >= 2) {
    return {
      ...state, 
      winner: 2,
    }
  }
  return state;
}

const history = state => {
  if (state.winner !== 0) {
    return {
      ...state,
      gameHistory: [
        ...state.gameHistory,
        {
          player_1: {
            score: state.player1,
            won: state.player1 > state.player2
          },
          player_2: {
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
    player1Name: action.player1Name,
    player2Name: action.player2Name,
    winningScore: action.winningScore,
    serveInterval: action.serveInterval,
  }
}

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return history(checkWinner(server(incrementP1(state)))); // increment player 1's score
    case "INCREMENT_P2": return history(checkWinner(server(incrementP2(state)))); // increment player 2's score
    case "RESET": return {
      ...initial,
      gameHistory: state.gameHistory,
      language: state.language 
    }; // to reset return initial state, but preserve game history and lanuage
    case "TOGGLE_LANGUAGE": return {
      ...state,
      language: state.language === "English" ? "Esperanto" : "English"
    }
    case "START_GAME": return startGame(state, action);
    default: return state;
  }
}

export default reducer;