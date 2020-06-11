import { connect } from 'react-redux';
import LanguageSelection from './LanguageSelection';
import { toggleLanguage } from '../../data/actions/state';

const mapStateToProps = ({ language }) => ({ language })

const mapDispatchToProps = (dispatch) => {
    return {
        handleLanguage: () => dispatch(toggleLanguage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelection);