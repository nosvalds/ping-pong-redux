import React from 'react';
import translations from '../translations.json'

const GameHistory = ({ 
    gameHistory, 
    language, 
 }) => (
    <table className="table">
        <thead className="thead-light">
            <tr>
                <th scope="col">{translations.game[language] + " #"}</th>
                <th scope="col">{translations.player[language]}</th>
                <th scope="col">
                    {translations.wins[language] + "/" + translations.loss[language]}
                </th>
                <th scope="col">{ translations.score[language] }</th>
            </tr>
        </thead>
        <tbody>
            { gameHistory.map((game, i) => (
                <React.Fragment key= { i }>
                    <tr>
                        <th scope="row" rowSpan="2">{ game.id }</th>
                        <td>
                            {`${translations.player[language]} 1: ${game.player_1.name}`}
                        </td>
                        { game.complete ? (game.player_1.won ?
                            <td className="table-success">
                                { translations.wins[language] }
                            </td> : 
                            <td className="table-danger">
                                { translations.loss[language] }
                            </td>) :
                            <th 
                                className="table-warning" 
                                scope="row" 
                                rowSpan="2"
                            >
                                { translations.not_complete[language] }
                            </th>
                        }
                        <td>{ game.player_1.score }</td>
                    </tr>
                    <tr>
                        <td>
                            {`${translations.player[language]} 2: ${game.player_2.name}`}
                        </td>
                        { game.complete ? (game.player_2.won ?
                            <td className="table-success">
                                { translations.wins[language] }
                            </td> : 
                            <td className="table-danger">
                                { translations.loss[language] }
                            </td>) :
                            null
                        }
                        <td>{ game.player_2.score }</td>
                    </tr>
                </React.Fragment>
            ))}
        </tbody>
    </table>
);

export default GameHistory;