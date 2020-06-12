import React from 'react';
import translations from '../translations.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const GameHistory = ({ 
    gameHistory, 
    language, 
    handleDelete,
    handleContinue,
 }) => (
    <div className="container">
        <h4 className="p-4 m-0 bg-info text-white border border-info rounded text-center">
            {translations.game_history[language]}
        </h4>
        <table className="table border border-secondary rounded table-striped bg-light">
            <thead className="thead-light">
                <tr>
                    <th scope="col">{translations.game[language] + " #"}</th>
                    <th scope="col">{translations.player[language]}</th>
                    <th scope="col">
                        {translations.wins[language] + "/" + translations.loss[language]}
                    </th>
                    <th scope="col">{ translations.score[language] }</th>
                    <th scope="col">{ translations.actions[language] }</th>
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
                            <td>
                                { !game.complete ? 
                                    <button
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={ () => handleContinue(game.id) } // load the game where it left off
                                    >
                                        {translations.continue[language]}
                                    </button> :
                                    null
                                }
                            </td>
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
                                </td>) : null
                            }
                            <td>{ game.player_2.score }</td>
                            <td>
                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={ () => handleDelete(game.id) }
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    </div>
);

export default GameHistory;