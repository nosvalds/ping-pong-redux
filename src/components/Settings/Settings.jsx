import React, { useState } from 'react';

const Settings = ({ handleSubmit, player1Name, player2Name, winningScore, serveInterval}) => {
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
                <label htmlFor="player1Name" >Player 1 Name</label>
                <input
                    className="form-control"
                    type="text"
                    id="player1Name"
                    value={ player1NameInput }
                    onChange={ (e) => setPlayer1NameInput(e.currentTarget.value) }
                />
            </div>
            <div className="form-group">
                <label htmlFor="player2Name" >Player 2 Name</label>
                <input
                    className="form-control"
                    type="text"
                    id="player2Name"
                    value={ player2NameInput }
                    onChange={ (e) => setPlayer2NameInput(e.currentTarget.value) }
                />
            </div>
            <div className="form-group">
                <label htmlFor="winningScore" >Winning Score</label>
                <input
                    className="form-control"
                    type="number"
                    id="winningScore"
                    value={ winningScoreInput }
                    onChange={ (e) => setWinningScoreInput(e.currentTarget.value) }
                />
            </div>
            <div className="form-group">
                <label htmlFor="alternateServe">Alternate Serve Every:</label>
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
                Start Game
            </button>

        </form>
    )
}

export default Settings;
