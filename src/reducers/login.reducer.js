import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import RealHomeService from '../api/realhome.service'
import api from '../api/api';

const initialState = {
    isUserLoggedIn: false,
    isUserLoggingIn: false,
    errorMessage: '',
}

export const logUserIn = createAsyncThunk(
    'logUserIn', async (data) => RealHomeService.loginUser(data)
);

const logUserInData = createSlice({
    name: 'loguserinSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(logUserIn.pending, (state) => {
            state.isUserLoggingIn = true;
            state.isUserLoggedIn = false;
            state.errorMessage = '';
        });
        builder.addCase(logUserIn.fulfilled, (state, action) => {
            api.setToken(action.payload.access)
            state.isUserLoggingIn = false;
            state.isUserLoggedIn = true;
            state.errorMessage = '';
        });
        builder.addCase(logUserIn.rejected, (state) => {
            api.setToken('')
            state.isUserLoggingIn = false;
            state.isUserLoggedIn = false;
            state.errorMessage = 'Could not log in';
        });
    }
})

export default logUserInData.reducer;