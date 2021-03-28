import { connect } from 'react-redux';
import SearchBar from 'src/components/Header/SearchBar';
import { changeValue, research } from 'src/action';

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value) => {
    dispatch(changeValue(value,));
  },
  research: (value) => {
    dispatch(research(value));
  },
});

const mapStateToProps = (state) => ({
  newValue: state.recipes.newValue,
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
