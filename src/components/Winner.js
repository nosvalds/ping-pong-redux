import React from 'react';
import translations from './translations.json'

const Winner = ({ winner, language }) => (
    winner !== 0 ?
    <h2 
        className="alert alert-success"
    >
        {`${translations.player[language]} ${ winner } ${translations.wins[language]}!`}
    </h2>
    : null
)

export default Winner;