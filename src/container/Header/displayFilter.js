import { connect } from 'react-redux';
import displayFilters from '../../components/Header/displayFilter';
import { research } from 'src/action';

const mapDispatchToProps = (dispatch) => ({
  research: (value) => {
    console.log(value)
    dispatch(research(value));
  },
});

const mapStateToProps = (state) => {
  
  return{
  allCountry : state.recipes.country,
  loadingCountry : state.recipes.loadingCountry,

}}
export default connect(mapStateToProps, mapDispatchToProps)(displayFilters);



