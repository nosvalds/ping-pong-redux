import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';

// Tricks
// 1. Descruturing
// 2. Auto-key naming
// 3. Fat arrow single line

// naming convention is mapStateToProps. ownProps is normal props being passed in to the component
const mapStateToProps = ({ server, player1, language, winner }, /* ownProps */) => ({
        server, // equivalent to server: server
        score: player1,
        language, // equivalent to language: language
        gameOver: winner !== 0,
});

// connect calls mapStateToProps when changes occur in our component
export default connect(mapStateToProps)(ScoreCard)
