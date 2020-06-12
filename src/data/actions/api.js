import axios from '../../axios/axios';
import { 
    startGame, 
    updateScore, 
    saveHistory, 
    removeGame,
    resumeGame 
} from './state';

export const postStartGame = ({ 
        player1Name, 
        player2Name, 
        serveInterval, 
        winningScore
    }) => {
    return (dispatch) => {
        axios.post("/", {
            player_1: player1Name,
            player_2: player2Name,
            winning_score: winningScore,
            change_serve: serveInterval
        }).then(({ data }) => {
            dispatch(startGame(data.data))
        })
    };
}

export const patchScore = player => (dispatch, getState) => {
    // use getState function to get the state object
    // then read the currentGameID property
    const id = getState().gameId;

    axios.patch(`${id}/score`,{
        player: player,
    }).then(({ data }) => {
        // dispatch state action
        dispatch(updateScore(data.data));
    });
};

export const getGameHistory = () => (dispatch) => {
    axios.get("/").then(({ data }) => {
        dispatch(saveHistory(data.data))
    })
}

export const deleteGame = (id) => {
    return (dispatch) => {
        axios.delete(`${id}`).then(() => {
            dispatch(removeGame(id)) 
        })
    }
}

export const getResumeGame = (id) => {
    return (dispatch) => {
        axios.get(`${id}`).then(({ data }) => {
            if (!data.data.complete) {
                dispatch(resumeGame(data.data));
            } else {
                getGameHistory();
            }
        })
    };
}