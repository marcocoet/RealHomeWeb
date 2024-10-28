import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const forms = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setFormProperties: (state, action) => {
      state[action.payload.name] = {
        ...state[action.payload.name],
        ...action.payload.properties,
      };
    },

    clearFormProperties: (state, action) => {
      delete state[action.payload.name];
    },
  },
});

export const { setFormProperties, clearFormProperties } = forms.actions;

export default forms.reducer;