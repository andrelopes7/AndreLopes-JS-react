import SearchList from 'src/components/SearchList';
import { connect } from 'react-redux';

const mapDispatchToProps = () => (null);
const mapStateToProps = (state) => (
  {
    AllRecipes: state.recipes.recipes,
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
