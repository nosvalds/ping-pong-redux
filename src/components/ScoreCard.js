import React from 'react';
import translations from './translations.json'

const ScoreCard = ({ 
    server, 
    player, 
    score, 
    handleIncrement, 
    gameOver, 
    language 
}) => (
    <div className="col-md-6 mt-4">
        <div 
            className={ (server === +player ? "bg-dark text-white " : "") + "card text-center" }
        >
            <h5 className="card-header">{translations.player[language] + " " + player }</h5>
            <div className="card-body">
                <p className="card-text display-1">{ score }</p>
            </div>
            <div className="card-footer">
                <button 
                    className="form-control btn btn-success"
                    onClick={ handleIncrement }
                    disabled={ gameOver }
                >
                    +
                </button>
            </div>
        </div>
    </div>
);

export default ScoreCard;