import { connect } from 'react-redux';
import { research } from 'src/action';
import List from 'src/components/SearchList/List';

const mapDispatchToProps = (dispatch, ownProps) => ({
  research: () => {
    dispatch(research(ownProps.argument));
  },
});

const mapStateToProps = () => (null);
export default connect(mapStateToProps, mapDispatchToProps)(List);
