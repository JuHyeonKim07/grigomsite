/** 그리곰 픽쳐스 상업영상 채널아이디를 이용하여 재생목록 불러오기 재생목록은 카테고리로 사용됨.*/

import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { youtubeResponse, cartegory } from "../getTypes";

interface PostState {
    loading: boolean;
    error: string | null;
    cartegory: cartegory
}

const initialState = {
    loading: false,
    error: null,
    cartegory: []
} as PostState;

const BASE_URL = 'https://www.googleapis.com/youtube/v3'

// ACTION
export const youtubeListPlaylistAction = createAsyncThunk(
    "GET/YOUTUBE_CHANNELID",
    async (channelId: string, thunkAPI) => {
        try {
            const { data } = await axios.get<youtubeResponse>(
                `${BASE_URL}/playlists?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet&maxResults=30`
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
const youtubeCategory = createSlice({
    name: "YOUTUBE_PLAYLIST",
    initialState,
    reducers: {},
    // createAsyncThunk 호출 처리 = extraReducers
    extraReducers(builder) {
        builder
            .addCase(youtubeListPlaylistAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(youtubeListPlaylistAction.fulfilled, (state, action: PayloadAction<youtubeResponse>) => {
                state.loading = false;
                state.cartegory = action.payload.items
            })
            .addCase(youtubeListPlaylistAction.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


export default youtubeCategory.reducer;