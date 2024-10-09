import { combineReducers } from 'redux';
import formsReducer from './forms.reducers';
import signupReducer from './signup.reducer';
import addpropertyReducer from './addproperty.reducer';

const rootReducer = combineReducers({
    addproperty: addpropertyReducer,
    signup: signupReducer,
    forms: formsReducer,
})

export default rootReducer;