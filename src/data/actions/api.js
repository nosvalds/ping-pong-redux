import axios from '../../axios/axios';
import { startGame } from './state';

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