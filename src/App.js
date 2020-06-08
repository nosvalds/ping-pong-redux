import React from "react";
import Header from "./components/Header";
import ScoreCard from "./components/ScoreCard";
import Winner from "./components/Winner";
import GameHistory from "./components/GameHistory";
import translations from './components/translations.json'

const App = ({ 
  server, 
  player1, 
  player2,
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
          <ScoreCard 
            server={ server }
            player={ 1 }
            score={ player1 }
            handleIncrement={ handleIncrementP1 }
            gameOver={ winner !== 0 }
            language={ language }
          />
          <ScoreCard 
            server={ server }
            player={ 2 }
            score={ player2 }
            handleIncrement={ handleIncrementP2 }
            gameOver={ winner !== 0 }
            language={ language }
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
