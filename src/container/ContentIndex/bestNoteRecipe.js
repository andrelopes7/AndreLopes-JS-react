import bestNoteRecipe from 'src/components/ContentIndex/bestNoteRecipe';
import { connect } from 'react-redux';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
 recipe : state.recipes.recipes
});

export default connect(mapStateToProps, mapDispatchToProps)(bestNoteRecipe);
