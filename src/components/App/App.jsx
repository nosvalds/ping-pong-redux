import React from "react";
import Header from "../Header";
import ScoreCard1 from "../ScoreCard/ScoreCard1";
import ScoreCard2 from "../ScoreCard/ScoreCard2";
import Winner from '../Winner'
import GameHistory from "../GameHistory";
import translations from '../translations.json'

const App = ({ 
  handleIncrementP1, 
  handleIncrementP2, 
  handleReset, 
  handleLanguage,
  language 
}) => (
    <React.Fragment>
        {/* header */}
        <Header title={ "PongPing" }/>

        {/* scores */}
        <div className="row mb-4">
          <ScoreCard1 
            player={ 1 }
            handleIncrement={ handleIncrementP1 }
          />
          <ScoreCard2 
            player={ 2 }
            handleIncrement={ handleIncrementP2 }
          />
        </div>

        { /* winner message */}
        <Winner />

        <hr />

        { /* reset button */}
        <div className="d-flex justify-content-between">
          <button 
            className="btn btn-danger"
            onClick={ handleReset }
          >
            { translations.reset[language] }
          </button>

          { /* language button */}
          <button 
            className="btn btn-secondary ml-4"
            onClick={ handleLanguage }
          >
            { language === "English" ? "Esperanto" : "English" }
          </button>
        </div>

        <hr />
        
        {/* Score History */}
        <GameHistory />
    </React.Fragment>
);

export default App;
