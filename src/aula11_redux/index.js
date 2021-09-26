import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../infra/actions';
import Aula11 from './Aula11';

console.log('index')

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

const Aula11Connected = connect(mapStateToProps, mapDispatchToProps)(Aula11);

export { Aula11Connected as Aula11 }
