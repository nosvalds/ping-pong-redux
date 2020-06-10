import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { incrementP2 } from '../../data/actions';


const mapStateToProps = ({ server, player2, language, winner, player2Name}) => {
    return {
        server,
        score: player2,
        language,
        gameOver: winner !== 0,
        playerName: player2Name,
    };
}

const mapDispatchToProps = (dispatch) => ({
    handleIncrement: () => dispatch(incrementP2())
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard)
