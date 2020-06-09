import React from "react";
import Header from "./components/Header";
import ScoreCard1 from "./components/ScoreCard/ScoreCard1";
import ScoreCard2 from "./components/ScoreCard/ScoreCard2";
import Winner from "./components/winner";
import GameHistory from "./components/GameHistory";
import translations from './components/translations.json'

const App = ({ 
  winner, 
  gameHistory, 
  handleIncrementP1, 
  handleIncrementP2, 
  handleReset, 
  language, 
  handleLanguage 
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
        <Winner 
          winner={ winner } 
          language={ language }
        />

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
            {language === "English" ? "Esperanto" : "English" }
          </button>
        </div>


        <hr />
        
        {/* Score History */}
        <GameHistory 
          gameHistory={ gameHistory } 
          language={ language }
        />
    </React.Fragment>
);

export default App;
