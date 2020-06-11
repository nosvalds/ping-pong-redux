import { connect } from 'react-redux';
import App from './App';
import { newGame, toggleLanguage } from '../../data/actions/state';

const mapStateToProps = ({ language, showSettings }) => ({ language, showSettings })

const mapDispatchToProps = (dispatch) => {
    return {
        handleNewGame: () => dispatch(newGame()),
        handleLanguage: () => dispatch(toggleLanguage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);