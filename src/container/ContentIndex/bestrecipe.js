import BestReacipe from 'src/components/ContentIndex/bestRecipe';
import { connect } from 'react-redux';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
 recipe : state.recipes.recipes
});

export default connect(mapStateToProps, mapDispatchToProps)(BestReacipe);
