import React from 'react';

const Header = ({ title }) => (
    <header className="jumbotron mt-1 mb-4 bg-primary">
            <h1 
                className="text-light display-3"
            >
                { title }
            </h1>
            <p class="lead text-light">The ping pong scoring web app built with React and Redux.</p>
    </header>
)

export default Header;