import React from "react";
import Header from "../Header";
import ScoreCard1 from "../ScoreCard/ScoreCard1";
import ScoreCard2 from "../ScoreCard/ScoreCard2";
import Winner from '../Winner'
import GameHistory from "../GameHistory";
import translations from '../translations.json'
import Settings from "../Settings";

const App = ({ 
  handleNewGame, 
  handleLanguage,
  language,
  showSettings 
}) => (
    <React.Fragment>
        { /* language selection */}
        <div 
          className="btn-group btn-group-toggle pt-1" 
          data-toggle="buttons"
        >
          <label 
            className={`btn btn-sm btn-info ${(language === "English") ? "active" : ""}`}
          >
            <input 
              type="radio" 
              name="options" 
              id="english" 
              onChange={ handleLanguage }
            />
              English
          </label>
          <label 
            className={`btn btn-sm btn-info ${(language === "Esperanto") ? "active" : ""}`}
          >
            <input 
              type="radio" 
              name="options" 
              id="esperanto"
              onChange={ handleLanguage }
            />
              Esperanto
          </label>
        </div>

        {/* header */}
        <Header title={ "Pong Ping" } />

        {/* Settings or Gameplay */}
        { showSettings ? 
          // render the settings component
          <Settings />
        : 
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
        }
        {/* Score History */}
        <GameHistory />
    </React.Fragment>
);

export default App;
