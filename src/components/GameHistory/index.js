import { connect } from 'react-redux';
import GameHistory from './GameHistory';
import { deleteGame, getResumeGame } from '../../data/actions/api'

const mapStateToProps = ({
    gameHistory, 
    language
}) => ({ 
    gameHistory, 
    language
 })

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (id) => dispatch(deleteGame(id)),
        handleContinue: (id) => dispatch(getResumeGame(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameHistory);