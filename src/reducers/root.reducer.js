import { combineReducers } from 'redux';
import formsReducer from './forms.reducers';
import signupReducer from './signup.reducer';
import addpropertyReducer from './addproperty.reducer';
import loginReducer from './login.reducer';
import realEstateTypesReducer from './realestatetypes.reducer';

const rootReducer = combineReducers({
    addproperty: addpropertyReducer,
    signup: signupReducer,
    login: loginReducer,
    forms: formsReducer,
    realEstateTypes: realEstateTypesReducer,
})

export default rootReducer;