import Ingredient from 'src/components/Detail/Ingredients';
import { connect } from 'react-redux';
import { changeValue,  } from 'src/action';

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value) => {
    dispatch(changeValue(value));
  },
  ChangeCustomers: (value) => {
    dispatch(ChangeCustomers(value));
  },
});


const mapStateToProps = (state) => ({
  newValue: state.recipes.newValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
