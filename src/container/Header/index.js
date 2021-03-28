import { connect } from 'react-redux';
import Header from '../../components/Header';
import{ TypeForm } from 'src/action';


const mapDispatchToProps = (dispatch) => ({
  TypeForm: (value) => {
    dispatch(TypeForm(value));
  },
});
const mapStateToProps = (state) => ({
  typeFormValue : state.user.typeformValue,

});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
