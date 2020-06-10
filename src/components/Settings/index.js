import { connect } from 'react-redux';
import Settings from './Settings';
import { startGame } from '../../data/actions';

const mapStateToProps = ({ 
    language, 
    player1Name, 
    player2Name, 
    winningScore, 
    serveInterval
}) => ({ 
    language, 
    player1Name, 
    player2Name, 
    winningScore, 
    serveInterval 
})

const mapDispatchToProps = (dispatch) =>({
    handleSubmit: (data) => dispatch(startGame(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);