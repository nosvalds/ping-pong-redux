import { connect } from 'react-redux';
import Loading from './Loading';
import { getGameHistory } from '../../data/actions/api'

const mapStateToProps = ({ historyLoaded }) => {
    return {
        loaded: historyLoaded,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMount: () => dispatch(getGameHistory()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);