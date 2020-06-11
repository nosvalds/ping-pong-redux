import React from "react";
import Header from "../Header";
import ScoreCard1 from "../ScoreCard/ScoreCard1";
import ScoreCard2 from "../ScoreCard/ScoreCard2";
import Winner from '../Winner'
import GameHistory from "../GameHistory";
import translations from '../translations.json'
import Settings from "../Settings";
import Loading from "../Loading";
import LanguageSelection from "../LanguageSelection";

const App = ({ 
  handleNewGame, 
  language,
  showSettings 
}) => (
    <React.Fragment>
        { /* language selection */}
        <LanguageSelection />

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
        {/* Game History */}
        <Loading>
          <GameHistory />
        </Loading>
    </React.Fragment>
);

export default App;
