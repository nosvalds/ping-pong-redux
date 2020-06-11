import { connect } from 'react-redux';
import App from './App';
import { newGame, toggleLanguage } from '../../data/actions/state';
import { getGameHistory } from '../../data/actions/api';

const mapStateToProps = ({ language, showSettings }) => ({ language, showSettings })

const mapDispatchToProps = (dispatch) => {
    return {
        handleNewGame: () => {
            dispatch(newGame())
            dispatch(getGameHistory())
        },
        handleLanguage: () => dispatch(toggleLanguage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);