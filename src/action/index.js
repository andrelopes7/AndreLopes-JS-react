
export const RESEARCH = 'RESEARCH';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_CUSTOMERS = 'CHANGE_CUSTOMERS';
export const FETCH_ALL_RECIPES = 'FETCH_ALL_RECIPES';
export const COUNTRY = 'COUNTRY';
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const NEW_RECIPES = 'NEW_RECIPES'
export const CHANGE_LOADING = 'CHANGE_LOADING'
export const TYPE_FORM = 'TYPE_FORM'
export const FORM_VALUE = 'FORM_VALUE'

export const RECIVE_TOKEN = 'RECIVE_TOKEN'

export const receiveToken = () => ({
  type :  RECIVE_TOKEN
})

export const fetchAllrecipe = () => ({
  type : FETCH_ALL_RECIPES
})
export const addCountry = (fetchCountry) => ({
  type : ADD_COUNTRY,
  fetchCountry,
})
export const country = () => ({
  type : COUNTRY
})
export const changeLoading = (key, value) => ({
 
  type : CHANGE_LOADING,
  key,
  value
})
export const newRecipes  = (recipesArray) => ({
  type: NEW_RECIPES,
  recipesArray, 
})
export const changeValue = (newValue) => ({
  type: CHANGE_VALUE,
  newValue,
});
export const research = (value) => {
  return {
  type: RESEARCH,
  value,
}};

export const ChangeCustomers = (value) => {
  return {
    type: CHANGE_CUSTOMERS,
    value,
  }
}
export const TypeForm = (value)=> {
  return{
   type : TYPE_FORM,
   value, 
  }
 } 
 export const FormValue = (value, key) => {
   console.log(value, key)
return {
  type : FORM_VALUE,
  value,
  key
}

 }


