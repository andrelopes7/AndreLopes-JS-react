
import { CHANGE_VALUE, RESEARCH, CHANGE_NUMBER_CUSTOMERS, ADD_COUNTRY, NEW_RECIPES, CHANGE_LOADING} from 'src/action';


const initialState = {
  recipes : '',
  country: '',
  numberCustomers : 4,
  newValue: '',
  research: '',
  axiosRecipes : '',
  loading: true,
  loadingCountry : true,
 
};



const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        newValue: action.newValue,
      };
      case CHANGE_LOADING :
        return {
          ...state,
          [action.key] : action.value
        };
    case NEW_RECIPES: 
      return {
        ...state, 
        recipes: action.recipesArray
      }
    case RESEARCH:
      return {
        ...state,
        research: action.value = '' ? state.newValue : action.value,
        newValue: '',
      };
    
    case CHANGE_NUMBER_CUSTOMERS: 
    return {
      ...state,
      numberCustomers : action.value
    } 
    case ADD_COUNTRY: 
    return {
      ...state,
      country : action.fetchCountry
    }

    default:
       return{ ...state}
  }
 
};

export default reducer;
