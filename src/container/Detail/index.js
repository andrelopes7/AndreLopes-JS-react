import Detail from 'src/components/Detail';
import { connect } from 'react-redux';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({ 
  recipes: state.recipes.recipes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
