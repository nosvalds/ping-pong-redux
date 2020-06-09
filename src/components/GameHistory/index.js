import { connect } from 'react-redux';
import GameHistory from './GameHistory';

const mapStateToProps = ({gameHistory, language}) => ({ gameHistory, language })

export default connect(mapStateToProps)(GameHistory);