import { TYPE_FORM, FORM_VALUE } from 'src/action'

const initialState = {
  typeformValue :'',
  nameValue: '',
  passwordValue:'',
  pictureValue:'',
  mailValue:'',
}

const reducer = (state = {initialState}, action = {}) => {

  switch (action.type) {
    
    case TYPE_FORM:
      return {
        ...state,
        typeformValue: action.value,
      };
    case FORM_VALUE:
    return {
      ...state,
      [action.key]: action.value,
    };

    default:
      return {
        ...state
      }
  }
}

export  default reducer; 
