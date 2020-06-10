import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { incrementP1 } from '../../data/actions';

// Tricks
// 1. Descruturing
// 2. Auto-key naming
// 3. Fat arrow single line

// naming convention is mapStateToProps. ownProps is normal props being passed in to the component
const mapStateToProps = ({ server, player1, language, winner, player1Name }, /* ownProps */) => ({
        server, // equivalent to server: server
        score: player1,
        language, // equivalent to language: language
        gameOver: winner !== 0,
        playerName: player1Name
});

// second parameter is ownProps like mapStateToProps
const mapDispatchToProps = (dispatch) => ({
        handleIncrement: () => dispatch(incrementP1())
})

// connect calls mapStateToProps when changes occur in our component
export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard)
