import React from 'react';

const GameHistory = ({ gameHistory }) => (
    <table className="table">
        <thead className="thead-light">
            <tr>
                <th scope="col">Game #</th>
                <th scope="col">Player</th>
                <th scope="col">Win/Lose</th>
                <th scope="col">Score</th>
            </tr>
        </thead>
        <tbody>
            { gameHistory.map((game, i) => (
                <React.Fragment key= { i }>
                    <tr>
                        <th scope="row" rowSpan="2">{ i + 1 }</th>
                        <td>Player 1</td>
                        <td>{ game.player_1.won ? "Win" : "Lose"}</td>
                        <td>{ game.player_1.score }</td>
                    </tr>
                    <tr key={ i }>
                        {/* <th scope="row" rowSpan="2">{ i + 1 }</th> */}
                        <td>Player 2</td>
                        <td>{ game.player_2.won ? "Win" : "Lose"}</td>
                        <td>{ game.player_2.score }</td>
                    </tr>
                </React.Fragment>
            ))}
        </tbody>
    </table>
);

export default GameHistory;