import { connect } from 'react-redux';
import App from './App';
import { reset, toggleLanguage } from '../../data/actions';

const mapStateToProps = ({ language, showSettings }) => ({ language, showSettings })

const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(reset()),
        handleLanguage: () => dispatch(toggleLanguage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);