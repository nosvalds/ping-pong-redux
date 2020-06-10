import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { incrementP2 } from '../../data/actions';


const mapStateToProps = ({ server, player2, language, winner}) => {
    return {
        server,
        score: player2,
        language,
        gameOver: winner !== 0,
    };
}

const mapDispatchToProps = (dispatch) => ({
    handleIncrement: () => dispatch(incrementP2())
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard)
