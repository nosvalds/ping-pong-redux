import React, { useState } from 'react';

const Settings = ({ handleSubmit }) => {
    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");
    const [winningScore, setWinningScore] = useState(21);
    const [serveInterval, setServeInterval] = useState(5);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(
            {
                player1Name,
                player2Name,
                winningScore,
                serveInterval
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
                    value={ player1Name }
                    onChange={ (e) => setPlayer1Name(e.currentTarget.value) }
                />
            </div>
            <div className="form-group">
                <label htmlFor="player2Name" >Player 2 Name</label>
                <input
                    className="form-control"
                    type="text"
                    id="player2Name"
                    value={ player2Name }
                    onChange={ (e) => setPlayer2Name(e.currentTarget.value) }
                />
            </div>
            <div className="form-group">
                <label htmlFor="winningScore" >Winning Score</label>
                <input
                    className="form-control"
                    type="number"
                    id="winningScore"
                    value={ winningScore }
                    onChange={ (e) => setWinningScore(e.currentTarget.value) }
                />
            </div>
            <div className="form-group">
                <label htmlFor="alternateServe">Alternate Serve Every:</label>
                <select 
                    className="form-control" 
                    id="alternateServe"
                    value={ serveInterval }
                    onChange={ (e) => setServeInterval(e.currentTarget.value) }
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
