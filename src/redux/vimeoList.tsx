// src/_reducers/userSlice.ts // 
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { vimeoAcsses, youTubeAcsses } from '../apis/keys';
import { vimeoResponse } from "../postModel";

interface PostState {
    loading: boolean;
    error: string | null;
    data: vimeoResponse | null;
}

const initialState = {
    loading: false,
    error: null,
    data: null,
} as PostState;

// ACTION
export const getVimeoList = createAsyncThunk(
    "GET/VIMEO",
    async (data, thunkAPI) => {
        try {
            const { data } = await axios.get<vimeoResponse>(`https://api.vimeo.com/users/${vimeoAcsses.userid}/videos`, {
                headers: {
                    Authorization: `bearer ${vimeoAcsses.accessToken}`
                }
            })
            return data
        } catch (err: any) {
            return thunkAPI.rejectWithValue({
                errorMessage: '호출에 실패했습니다.'
            })
        }
    }
);

// SLICE
const vimeoSlice = createSlice({
    name: "vimeo",
    initialState,
    reducers: {},
    // createAsyncThunk 호출 처리 = extraReducers
    extraReducers(builder) {
        builder
            .addCase(getVimeoList.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getVimeoList.fulfilled, (state, action: PayloadAction<vimeoResponse>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getVimeoList.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
            });
    },
});

// export const { } = vimeoSlice.actions;
export default vimeoSlice.reducer;