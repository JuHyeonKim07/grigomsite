/** 그리곰 픽쳐스 상업영상 채널아이디를 이용하여 재생목록 불러오기 재생목록은 카테고리로 사용됨.*/

import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { youTubeAcsses } from '../apis/keys';
import { youtubeResponse } from "../postModel";

interface PostState {
    loading: boolean;
    error: string | null;
    data: youtubeResponse | null;
    cartegory: {}[]
}

const initialState = {
    loading: false,
    error: null,
    data: null,
    cartegory: []
} as PostState;

// ACTION
export const youtubeList_Playlist = createAsyncThunk(
    "GET/YOUTUBE_CHANNELID",
    async (channelId: string, thunkAPI) => {
        try {
            const { data } = await axios.get<youtubeResponse>(
                `https://www.googleapis.com/youtube/v3/playlists?key=${youTubeAcsses.apiKey}&channelId=${channelId}&part=snippet&maxResults=30`
                // channelId=UCvpIHsNLXfpOj_uMgI62I2A - 그리곰 픽쳐스 상업 유튜브 채널
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
const youtube_PlaylistSlice = createSlice({
    name: "YOUTUBE_PLAYLIST",
    initialState,
    reducers: {},
    // createAsyncThunk 호출 처리 = extraReducers
    extraReducers(builder) {
        builder
            .addCase(youtubeList_Playlist.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(youtubeList_Playlist.fulfilled, (state, action: PayloadAction<youtubeResponse>) => {
                state.loading = false;
                state.data = action.payload;
                state.cartegory = [...state.data?.items, ...action.payload.items];
            })
            .addCase(youtubeList_Playlist.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
            });
    },
});


export default youtube_PlaylistSlice.reducer;