import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'


const LanguageSelection = ({ language, handleLanguage }) => (
    <>
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
          <div className="btn btn-sm btn-secondary">
            <FontAwesomeIcon icon={faGlobeAmericas} />
          </div>
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
      </>
)

export default LanguageSelection;