// src/_reducers/userSlice.ts // 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { vimeoAcsses, youTubeAcsses } from '../apis/Acsses';

interface MyKnownError {
    errorMessage: string;
}

interface RegisterActionType {
    success: string;
}

export const registerUser = createAsyncThunk<
    RegisterActionType,
    object,
    { rejectValue: MyKnownError }
>("users/registerUser", async (registerInfo, thunkAPI) => {
    try {
        // success 객체가 들어올 것으로 예상됨.
        const { data } = await axios.get(`https://api.vimeo.com/users/${vimeoAcsses.userid}/videos`, {
            headers: {
                Authorization: `bearer ${vimeoAcsses.accessToken}`
            }
        })
        console.log(data)
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue({
            errorMessage: "회원가입 실패",
        });
    }
});

export interface InitailStateType {
    userData: object;
    error: null | MyKnownError | undefined;
    loading: boolean;
}

const initialState: InitailStateType = {
    userData: {},
    error: null,
    loading: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // 통신 중
            .addCase(registerUser.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            // 통신 성공
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.error = null;
                state.loading = false;
                state.userData = payload;
            })
            // 통신 에러
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.error = payload;
                state.loading = false;
            });
    },
});

export const { } = userSlice.actions;

export default userSlice.reducer;