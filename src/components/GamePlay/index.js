import { connect } from 'react-redux';
import GamePlay from './GamePlay';
import { newGame } from '../../data/actions/state';
import { getGameHistory } from '../../data/actions/api';

const mapStateToProps = ({ language }) => ({ language })

const mapDispatchToProps = (dispatch) => {
    return {
        handleNewGame: () => {
            dispatch(newGame())
            dispatch(getGameHistory())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);