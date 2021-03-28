import SeasonRecipe from 'src/components/ContentIndex/SeasonRecipe';
import { connect } from 'react-redux';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
 recipe : state.recipes.recipes
});

export default connect(mapStateToProps, mapDispatchToProps)(SeasonRecipe);
