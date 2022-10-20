// src/_reducers/userSlice.ts // 
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice, createReducer } from "@reduxjs/toolkit";
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
export const getYoutubeList_Personal = createAsyncThunk(
    "GET/YOUTUBE_PERSONAL",
    async (args, thunkAPI) => {
        try {
            const { data } = await axios.get<youtubeResponse>(
                `https://www.googleapis.com/youtube/v3/playlistItems?key=${youTubeAcsses.apiKey}&playlistId=PLThDpQpBDLxfDomsur6lq4TQ384K8pStY&part=snippet&maxResults=30`
                // playlistId=PLThDpQpBDLxfDomsur6lq4TQ384K8pStY - 그리곰 픽쳐스 개인 영상 
            )
            return data
        } catch (err: any) {
            return thunkAPI.rejectWithValue({
                errorMessage: '호출에 실패했습니다.'
            })
        }
    }
);

// 여기에 dispatch 해서 채널 id 가져오기
const alertSlice = createSlice({
    name: 'todos',
    initialState: {

    },
    reducers: {},
    extraReducers: (builder) => { }
});

// SLICE
const youtube_PersonalSlice = createSlice({
    name: "YOUTUBE_PERSONAL",
    initialState,
    reducers: {},
    // createAsyncThunk 호출 처리 = extraReducers
    extraReducers(builder) {
        builder
            .addCase(getYoutubeList_Personal.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getYoutubeList_Personal.fulfilled, (state, action: PayloadAction<youtubeResponse>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getYoutubeList_Personal.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
            });
    },
});


export default youtube_PersonalSlice.reducer;