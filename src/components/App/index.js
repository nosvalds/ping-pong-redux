import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ language }) => ({ language })

export default connect(mapStateToProps)(App);