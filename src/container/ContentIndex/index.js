import Content from 'src/components/ContentIndex';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => ({
 
  research: (value) => {
    dispatch(research(value));
  },
});

const mapStateToProps = (state) => {
    let recipes = state.recipes.recipes ;
    let error = ''

    if (state.recipes.research !== '') {
      recipes = state.recipes.recipes.filter((recipes) => {
      return (
        recipes.name.includes(state.recipes.research) || 
        recipes.country === state.recipes.research|| 
       ( recipes.category === state.recipes.research)
      );
    }) 
    
    }
    if (recipes.length === 0 ) {
      recipes = state.recipes.recipes
      error = ' aucune recette trouve'
    }
  
   
    
    return {
      recipes : recipes,
      error : error
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);
