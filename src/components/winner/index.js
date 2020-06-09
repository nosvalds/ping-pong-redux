import { connect } from 'react-redux';
import Winner from './Winner';

const mapStateToProps = ({winner, language}) => ({ winner, language})

export default connect(mapStateToProps)(Winner);