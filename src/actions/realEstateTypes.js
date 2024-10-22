export const FETCH_REAL_ESTATE_TYPES_REQUEST = 'FETCH_REAL_ESTATE_TYPES_REQUEST';
export const FETCH_REAL_ESTATE_TYPES_SUCCESS = 'FETCH_REAL_ESTATE_TYPES_SUCCESS';
export const FETCH_REAL_ESTATE_TYPES_FAILURE = 'FETCH_REAL_ESTATE_TYPES_FAILURE';

export const fetchRealEstateTypesRequest = () => ({
  type: FETCH_REAL_ESTATE_TYPES_REQUEST,
});

export const fetchRealEstateTypesSuccess = (types) => ({
  type: FETCH_REAL_ESTATE_TYPES_SUCCESS,
  payload: types,
});

export const fetchRealEstateTypesFailure = (error) => ({
  type: FETCH_REAL_ESTATE_TYPES_FAILURE,
  payload: error,
});