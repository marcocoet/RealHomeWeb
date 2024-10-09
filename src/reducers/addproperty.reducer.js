import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import RealHomeService from '../api/realhome.service'

const initialState = {
    isPropertyAdded: false,
    errorMessage: '',
}

export const addProperty = createAsyncThunk(
    'addProperty', async (data) => RealHomeService.addProperty(data)
);

const addpropertyData = createSlice({
    name: 'addpropertySlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addProperty.pending, (state) => {
            state.isPropertyAdded = true;
            state.errorMessage = '';
        });
        builder.addCase(addProperty.fulfilled, (state) => {
            state.isPropertyAdded = false;
            state.errorMessage = '';
        });
        builder.addCase(addProperty.rejected, (state) => {
            state.isPropertyAdded = false;
            state.errorMessage = 'Property could not be added';
        });
    }
})

export default addpropertyData.reducer;