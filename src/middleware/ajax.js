import axios from 'axios';
import recipes from 'src/data//recipiesV2';
import { FETCH_ALL_RECIPES, COUNTRY, RECIVE_TOKEN} from 'src/action';
import { newRecipes, changeLoading, addCountry  } from 'src/action';



const ajax = (store) => (next) => (action) => {
  axios.defaults.baseURL = 'http://100.26.211.142';
  switch (action.type) {
    
    case RECIVE_TOKEN:
      axios
      .post('api/login_check',{
       
    
        username : "fab@fab.com",
        password : "fab"
      }
      )
      .then((response) => {
        axios.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
        console.log(response.data, 'test')
      ;})
      .catch((error) => { 
        console.error(error)
       
      ;})
      .finally (() => {
         console.log('')
      })

    case FETCH_ALL_RECIPES: console.log(action.type);
      axios
      .get(
        (`/api/recipe/`),
        store.dispatch(changeLoading('loading', true)),)
      .then((response) => {
        store.dispatch(newRecipes(response.data)),
        store.dispatch(changeLoading('loading', false));

      })
      .catch((error) => { 
        console.error(error), 
        store.dispatch(newRecipes(recipes))
      ;})
      .finally (() => {
         console.log('')
      })
   
      case COUNTRY: axios.get(
        (`/api/country/`), 
        store.dispatch(changeLoading('loadingCountry', true)),
      )
      .then((response) => {
        changeLoading(),
        store.dispatch(addCountry(response.data)),
        store.dispatch(changeLoading('loadingCountry', false));
      })
      .catch((error) => {
        console.error('')
        ;})
      
        default: 
  }
  next(action);
};
export default ajax;
