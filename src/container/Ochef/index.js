import { connect } from 'react-redux';
import Ochef from 'src/components/Ochef';
import { fetchAllrecipe, country, receiveToken } from 'src/action';


const mapDispatchToProps = (dispatch) => ({
  fetchAllrecipe: () => {
    dispatch(fetchAllrecipe());
  },
  country: () => {
    dispatch(country());
  },
  receiveToken: () => {
    dispatch(receiveToken());
  },
});

const mapStateToProps = (state) => ({
loading : state.recipes.loading
});
export default connect(mapStateToProps, mapDispatchToProps)(Ochef);
