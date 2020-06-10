import React from "react";
import Header from "../Header";
import ScoreCard1 from "../ScoreCard/ScoreCard1";
import ScoreCard2 from "../ScoreCard/ScoreCard2";
import Winner from '../Winner'
import GameHistory from "../GameHistory";
import translations from '../translations.json'
import Settings from "../Settings";

const App = ({ 
  handleReset, 
  handleLanguage,
  language,
  showSettings 
}) => (
    <React.Fragment>
        { /* language button */}
        <div 
          className="btn-group btn-group-toggle" 
          data-toggle="buttons"
        >
          <label 
            className={`btn btn-secondary ${(language === "English") ? "active" : ""}`}
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
            className={`btn btn-secondary ${(language === "Esperanto") ? "active" : ""}`}
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

        {/* <div 
          className="btn-group" 
          role="group" 
          aria-label="language selection">
          <button 
            className="btn btn-sm btn-secondary ml-4"
            onClick={ handleLanguage }
            >
            { language === "English" ? "Esperanto" : "English" }
          </button>
          <button 
            className="btn btn-small btn-secondary ml-4"
            onClick={ handleLanguage }
            >
            { language === "English" ? "Esperanto" : "English" }
          </button>
        </div> */}
        {/* header */}
        <Header title={ "PongPing" } />


        { showSettings ? 
          <Settings />
        : 
          <>
            {/* scores */}
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

            { /* reset button */}
            <div className="d-flex justify-content-between">
              <button 
                className="btn btn-danger"
                onClick={ handleReset }
              >
                { translations.reset[language] }
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
