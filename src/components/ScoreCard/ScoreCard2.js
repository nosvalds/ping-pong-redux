import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';

const mapStateToProps = (state) => {
    return {
        server: state.server,
        score: state.player2,
        language: state.language,
        gameOver: state.winner !== 0,
    };
}

export default connect(mapStateToProps)(ScoreCard)
