// src/_reducers/userSlice.ts // 
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { youTubeAcsses } from '../apis/keys';
import { youtubeResponse } from "../postModel";

interface PostState {
    loading: boolean;
    error: string | null;
    data: youtubeResponse | null;
}

const initialState = {
    loading: false,
    error: null,
    data: null,
} as PostState;

// ACTION
export const getYoutubeList = createAsyncThunk(
    "GET/YOUTUBE",
    async (data, thunkAPI) => {
        try {
            const { data } = await axios.get<youtubeResponse>(
                `https://www.googleapis.com/youtube/v3/playlistItems?key=${youTubeAcsses.apiKey}&playlistId=${youTubeAcsses.playlistId}&part=snippet&maxResults=30`
            )
            return data
        } catch (err: any) {
            return thunkAPI.rejectWithValue({
                errorMessage: '호출에 실패했습니다.'
            })
        }
    }
);

// SLICE
const youtubeSlice = createSlice({
    name: "youtube",
    initialState,
    reducers: {},
    // createAsyncThunk 호출 처리 = extraReducers
    extraReducers(builder) {
        builder
            .addCase(getYoutubeList.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getYoutubeList.fulfilled, (state, action: PayloadAction<youtubeResponse>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getYoutubeList.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
            });
    },
});


export default youtubeSlice.reducer;