import { connect } from 'react-redux';
import UserForm from 'src/components/form'

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => {
  
  return{
    typeFormValue : state.user.typeformValue,
    nameValue:state.user.nameValue,
    pictureValue:state.user.pictureValue, 
    passwordValue:state.user.passwordValue,
    mailValue: state.user.mailValue,
}}
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
