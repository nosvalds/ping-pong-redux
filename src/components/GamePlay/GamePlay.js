import React from 'react';
import ScoreCard1 from "../ScoreCard/ScoreCard1";
import ScoreCard2 from "../ScoreCard/ScoreCard2";
import Winner from '../Winner'
import translations from '../translations'

const GamePlay = ({ language, handleNewGame }) => (
    <>
        {/* gameplay scores section */}
        <div className="row mb-4">
            <ScoreCard1 
            player={ 1 }
            />
            <ScoreCard2 
            player={ 2 }
            />
        </div>

        { /* winner message */}
        <Winner />

        <hr />

        { /* New Game button */}
        <div className="d-flex justify-content-between">
            <button 
            className="btn btn-danger"
            onClick={ handleNewGame }
            >
            { translations.new_game[language] }
            </button>
        </div>

        <hr />
    </>
)

export default GamePlay;