import Picture from 'src/components/Content/Picture';
import { connect } from 'react-redux';
import { research } from 'src/action';

const mapStateToProps = (state) => ({ 
  recipesLength: state.recipes.recipes.length,
  newValue : state.recipes.newValue,
  numberCustomers : state.recipes.numberCustomers
});
const mapDispatchToProps = (dispatch) => ({
  research: (value) => {
    dispatch(research(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Picture);
