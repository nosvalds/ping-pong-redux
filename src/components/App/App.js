import React from "react";
import Header from "../Header";
import GameHistory from "../GameHistory";
import Settings from "../Settings";
import Loading from "../Loading";
import LanguageSelection from "../LanguageSelection";
import GamePlay from "../GamePlay";

const App = ({ 
  showSettings 
}) => (
    <>
        { /* language selection */}
        <LanguageSelection />

        {/* header */}
        <Header title={ "Pong Ping" } />

        {/* Settings or Gameplay */}
        { showSettings ? 
          <Settings />
        : 
          <GamePlay />
        }
        {/* Game History, wrap in loading so we show loading bar until history is loaded from the API */}
        <Loading>
          <GameHistory />
        </Loading>
    </>
);

export default App;
