import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import RealHomeService from '../api/realhome.service'

const initialState = {
    isSavingUserSignup: false,
    errorMessage: '',
}

export const createUser = createAsyncThunk(
    'createUser', async (data) => RealHomeService.createUser(data)
);

const signupData = createSlice({
    name: 'signupSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isSavingUserSignup = true;
            state.errorMessage = '';
        });
        builder.addCase(createUser.fulfilled, (state) => {
            state.isSavingUserSignup = false;
            state.errorMessage = '';
        });
        builder.addCase(createUser.rejected, (state) => {
            state.isSavingUserSignup = false;
            state.errorMessage = 'User could not be created';
        });
    }
})

export default signupData.reducer;