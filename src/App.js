import React from "react";
import Header from "./components/Header";
import ScoreCard from "./components/ScoreCard";
import Winner from "./components/Winner";
import Button from "./components/Button";

const App = ({ server, player1, player2, winner, handleIncrementP1, handleIncrementP2, handleReset }) => (
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
          />
          <ScoreCard 
            server={ server }
            player={ 2 }
            score={ player2 }
            handleIncrement={ handleIncrementP2 }
            gameOver={ winner !== 0 }
          />
        </div>

        { /* winner message */}
        <Winner winner={ winner } />

        <hr />

        { /* reset button */}
        <Button
          name="Reset"
          handleClick={ handleReset }
        />
    </React.Fragment>
);

export default App;
