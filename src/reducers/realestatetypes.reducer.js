import {
    FETCH_REAL_ESTATE_TYPES_REQUEST,
    FETCH_REAL_ESTATE_TYPES_SUCCESS,
    FETCH_REAL_ESTATE_TYPES_FAILURE,
  } from '../actions/realEstateTypes'
  import {
    fetchRealEstateTypesRequest,
    fetchRealEstateTypesSuccess,
    fetchRealEstateTypesFailure,
  } from '../actions/realEstateTypes';


  
  export const fetchRealEstateTypes = () => {
    return async (dispatch) => {
      dispatch(fetchRealEstateTypesRequest());
  
      try {
        const response = await fetch('http://localhost:8000/api/realestatetype/list/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
  
        if (!Array.isArray(data)) {
          throw new TypeError('Expected an array');
        }
  
        dispatch(fetchRealEstateTypesSuccess(data));
      } catch (error) {
        dispatch(fetchRealEstateTypesFailure(error.message));
      }
    };
  };
  
  const initialState = {
    loading: false,
        types: [],
        error: null,
  };
  
  const realEstateTypesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REAL_ESTATE_TYPES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_REAL_ESTATE_TYPES_SUCCESS:
        return {
          ...state,
          loading: false,
          types: action.payload,
        };
      case FETCH_REAL_ESTATE_TYPES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default realEstateTypesReducer;



