import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import RealHomeService from '../api/realhome.service'

const initialState = {
  loading: false,
  types: [],
  error: null,
};

export const listRealEstateTypes = createAsyncThunk(
    'listRealEstateTypes', async () => RealHomeService.listRealEstateTypes()
);

const listRealEstateTypesData = createSlice({
    name: 'listRealEstateTypesSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(listRealEstateTypes.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(listRealEstateTypes.fulfilled, (state, action) => {
          state.types = action.payload;
          state.loading = false;
        });
        builder.addCase(listRealEstateTypes.rejected, (state) => {
            state.loading = false;
            state.errorMessage = 'Could not retrieve real estate types';
        });
    }
})

export default listRealEstateTypesData.reducer;
