import { connect } from 'react-redux';
import Input from 'src/components/form/input'
import { FormValue } from 'src/action';

const mapDispatchToProps = (dispatch, ownProps) => ({
    FormValue: (value, key) => {
    dispatch(FormValue(value, ownProps.name))
  }
});


const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Input);
