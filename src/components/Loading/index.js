import { connect } from 'react-redux';
import Loading from './Loading';
import { postNewGame } from '../../data/actions/api';

const mapStateToProps = ({ loaded }) => {
    return {
        loaded: loaded,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMount: () => dispatch(postNewGame())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);