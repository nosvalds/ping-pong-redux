import { connect } from 'react-redux';
import Settings from './Settings';
import { startGame } from '../../data/actions';

const mapStateToProps = ({ language }) => ({ language })

const mapDispatchToProps = (dispatch) =>({
    handleSubmit: (data) => dispatch(startGame(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);