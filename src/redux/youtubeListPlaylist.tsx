/** 그리곰 픽쳐스 상업영상 채널아이디를 이용하여 재생목록 불러오기 재생목록은 카테고리로 사용됨.*/

import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { youTubeAcsses } from '../apis/keys';
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

const BASE_URL = "https://grigompictureshidefunctions.netlify.app";

// ACTION
export const youtubeListPlaylistAction = createAsyncThunk(
  "GET/YOUTUBE_CHANNELID",
  async (channelId: string, thunkAPI) => {
    try {
      // URL 생성
      const url = new URL("youtube/v3/playlists", BASE_URL);
      const parameters = new URLSearchParams({
        part: "snippet",
        channelId: channelId,
        maxResults: "30",
        // API 키는 백엔드에서 처리됨
      });
      url.search = parameters.toString();

      // API 호출
      const { data } = await axios.get<youtubeResponse>(url.toString());
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue({
        errorMessage: "호출에 실패했습니다.",
      });
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