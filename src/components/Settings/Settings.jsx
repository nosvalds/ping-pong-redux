import React, { useState } from 'react';
import translations from '../../components/translations';

const Settings = ({ 
    handleSubmit, 
    player1Name, 
    player2Name, 
    winningScore, 
    serveInterval, 
    language 
}) => {
    const [player1NameInput, setPlayer1NameInput] = useState(player1Name);
    const [player2NameInput, setPlayer2NameInput] = useState(player2Name);
    const [winningScoreInput, setWinningScoreInput] = useState(winningScore);
    const [serveIntervalInput, setServeIntervalInput] = useState(serveInterval);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(
            {
                player1Name: player1NameInput,
                player2Name: player2NameInput,
                winningScore: winningScoreInput,
                serveInterval: serveIntervalInput
            }
        )
    }
    return (
        <form 
           onSubmit={ handleFormSubmit } 
            className="mb-4 p-4 border rounded"
        >
            <div className="form-group">
                <label htmlFor="player1Name" >
                    {`${translations.player[language]} 1 ${translations.name[language]}`}
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="player1Name"
                    value={ player1NameInput }
                    onChange={ (e) => setPlayer1NameInput(e.currentTarget.value) }
                />
            </div>
            <div className="form-group">
                <label htmlFor="player2Name" >
                    {`${translations.player[language]} 2 ${translations.name[language]}`}
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="player2Name"
                    value={ player2NameInput }
                    onChange={ (e) => setPlayer2NameInput(e.currentTarget.value) }
                />
            </div>
            <div className="form-group">
                <label htmlFor="winningScore" >
                    {`${translations.winning_score[language]}`}
                </label>
                <input
                    className="form-control"
                    type="number"
                    id="winningScore"
                    value={ winningScoreInput }
                    onChange={ (e) => setWinningScoreInput(e.currentTarget.value) }
                />
            </div>
            <div className="form-group">
                <label htmlFor="alternateServe">
                    {`${translations.alt_serve[language]}:`}
                </label>
                <select 
                    className="form-control" 
                    id="alternateServe"
                    value={ serveIntervalInput }
                    onChange={ (e) => setServeIntervalInput(e.currentTarget.value) }
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <button 
                type="submit"
                className="btn btn-primary"
            >
                {`${translations.start_game[language]}`}
            </button>

        </form>
    )
}

export default Settings;
