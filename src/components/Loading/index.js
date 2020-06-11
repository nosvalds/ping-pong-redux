import { connect } from 'react-redux';
import Loading from './Loading';
import { postNewGame } from '../../data/actions/api';

const mapStateToProps = ({ historyLoaded }) => {
    return {
        historyLoaded,
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleMount: () => dispatch(postStartGame())
//     };
// }

export default connect(mapStateToProps)(Loading);