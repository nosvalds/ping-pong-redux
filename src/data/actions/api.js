import axios from '../../axios/axios';
import { startGame, updateScore } from './state';

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